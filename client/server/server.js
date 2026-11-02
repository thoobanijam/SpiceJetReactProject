
import "dotenv/config";
import express from "express";
import cors from "cors";
import pg from "pg";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import {
  cities,
  internationalCities,
  flightItineraries,
} from "./flightData.js";

const app = express();
const PORT = process.env.PORT || 5000;

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

// Check required environment variables
if (!process.env.DATABASE_URL || !process.env.JWT_SECRET) {
  throw new Error("DATABASE_URL and JWT_SECRET must be configured in .env");
}

// Create users table in Neon
const createUsersTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(100) NOT NULL,
      email VARCHAR(254) UNIQUE NOT NULL,
      mobile VARCHAR(16) UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log("Users table is ready.");
};

// Home route
app.get("/", (req, res) => {
  res.json({ message: "Flight demo API is running." });
});

// =====================================
// EXISTING FLIGHT API
// =====================================

app.get("/api/cities", (req, res) => {
  res.json({
    domestic: cities,
    international: internationalCities,
  });
});

app.get("/api/flights", (req, res) => {
  const { from, to, date } = req.query;

  if (!from || !to || !date) {
    return res.status(400).json({
      message: "from, to, and date are required.",
    });
  }

  const getCode = (value) => {
    const match = String(value).match(/\(([A-Z]{3})\)/);
    return match ? match[1] : String(value).trim().toUpperCase();
  };

  const origin = getCode(from);
  const destination = getCode(to);

  if (origin === destination) {
    return res.status(400).json({
      message: "Origin and destination must be different.",
    });
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(date))) {
    return res.status(400).json({
      message: "Use date format YYYY-MM-DD.",
    });
  }

  const selectedDate = new Date(`${date}T12:00:00.000Z`);

  if (
    Number.isNaN(selectedDate.getTime()) ||
    selectedDate.toISOString().slice(0, 10) !== date
  ) {
    return res.status(400).json({
      message: "Invalid calendar date.",
    });
  }

  const matchingFlights = flightItineraries
    .filter(
      (flight) =>
        flight.from === origin &&
        flight.to === destination
    )
    .flatMap((flight) =>
      [0, 1].map((offset) => {
        const flightDate = new Date(selectedDate);

        flightDate.setUTCDate(
          flightDate.getUTCDate() + offset
        );

        return {
          ...flight,
          date: flightDate.toISOString().slice(0, 10),
          price: flight.price + offset * 300,
        };
      })
    );

  res.json({
    isDemo: true,
    message: "Sample itineraries only; live availability is not checked.",
    flights: matchingFlights,
  });
});

// =====================================
// USER REGISTRATION API
// =====================================

app.post("/api/auth/register", async (req, res) => {
  try {
    const { fullName, email, mobile, password } = req.body;

    // Validate required fields
    if (!fullName || !email || !mobile || !password) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    const cleanName = fullName.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMobile = mobile.trim();

    if (cleanName.length < 2 || cleanName.length > 100) {
      return res.status(400).json({
        message: "Please enter a valid full name.",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({
        message: "Please enter a valid email address.",
      });
    }

    if (!/^\+?[0-9]{7,15}$/.test(cleanMobile)) {
      return res.status(400).json({
        message: "Please enter a valid mobile number.",
      });
    }

    if (typeof password !== "string" ||
        password.length < 8 ||
        Buffer.byteLength(password, "utf8") > 72) {
      return res.status(400).json({
        message: "Password must be at least 8 characters and no more than 72 bytes.",
      });
    }

    // Check if email or mobile already exists
    const existingUser = await pool.query(
      `SELECT id FROM users
       WHERE email = $1 OR mobile = $2`,
      [cleanEmail, cleanMobile]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        message: "Email or mobile number is already registered.",
      });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Save user in Neon database
    const result = await pool.query(
      `INSERT INTO users
       (full_name, email, mobile, password_hash)
       VALUES ($1, $2, $3, $4)
       RETURNING id, full_name, email, mobile`,
      [cleanName, cleanEmail, cleanMobile, passwordHash]
    );

    const user = result.rows[0];

    // Generate JWT
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(201).json({
      message: "Registration successful.",
      token,
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        mobile: user.mobile,
      },
    });

  } catch (error) {
    console.error("Registration error:", error);

    if (error.code === "23505") {
      return res.status(409).json({
        message: "Email or mobile number is already registered.",
      });
    }

    return res.status(500).json({
      message: "Registration failed. Please try again.",
    });
  }
});

// =====================================
// USER LOGIN API
// =====================================

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, mobile, password } = req.body;

    if ((!email && !mobile) || !password) {
      return res.status(400).json({
        message: "Email or mobile number and password are required.",
      });
    }

    // Find user by email or mobile
    const identifier = email
      ? email.trim().toLowerCase()
      : mobile.trim();

    const result = await pool.query(
      `SELECT * FROM users
       WHERE email = $1 OR mobile = $1`,
      [identifier]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "Invalid email/mobile number or password.",
      });
    }

    const user = result.rows[0];

    // Verify password
    const passwordMatch = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email/mobile number or password.",
      });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      message: "Login successful.",
      token,
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        mobile: user.mobile,
      },
    });

  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Login failed. Please try again.",
    });
  }
});

// =====================================
// START SERVER
// =====================================

const startServer = async () => {
  try {
    await pool.query("SELECT NOW()");
    console.log("Neon database connected.");

    await createUsersTable();

    app.listen(PORT, () => {
      console.log(`Flight API running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup error:", error);
    process.exit(1);
  }
};

startServer();
