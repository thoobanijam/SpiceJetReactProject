import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { registerUser } from "./api/authApi";

const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Check that passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Check password length
    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    // Check mobile number
    if (!/^\+?[0-9]{7,15}$/.test(mobile.trim())) {
      setError("Please enter a valid mobile number, including country code.");
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser({
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        mobile: mobile.trim(),
        password,
      });

      // Save the login session returned by the backend
      sessionStorage.setItem("token", response.token);
      sessionStorage.setItem("user", JSON.stringify(response.user));

      setSuccess("Registration successful! Redirecting...");

      // Navigate to the flight search page
      setTimeout(() => {
        navigate("/search-flight");
      }, 1000);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            "Registration failed. Please try again."
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8">
        {/* Logo and heading */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-red-600">
            SpiceJet
          </h1>

          <h2 className="mt-3 text-2xl font-bold text-gray-800">
            Create Your Account
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Register to start booking your flights.
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div
            role="alert"
            className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {/* Success message */}
        {success && (
          <div
            role="status"
            className="mb-4 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700"
          >
            {success}
          </div>
        )}

        {/* Registration form */}
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Full name */}
          <div>
            <label
              htmlFor="fullName"
              className="mb-1 block text-sm font-semibold text-gray-700"
            >
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              autoComplete="name"
              required
              minLength={2}
              maxLength={100}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              maxLength={254}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Mobile */}
          <div>
            <label
              htmlFor="mobile"
              className="mb-1 block text-sm font-semibold text-gray-700"
            >
              Mobile Number
            </label>

            <input
              id="mobile"
              type="tel"
              placeholder="e.g. +919876543210"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              autoComplete="tel"
              required
              maxLength={16}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />

            <p className="mt-1 text-xs text-gray-500">
              Include your country code, such as +91.
            </p>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-semibold text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
              minLength={8}
              maxLength={72}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />

            <p className="mt-1 text-xs text-gray-500">
              Use at least 8 characters.
            </p>
          </div>

          {/* Confirm password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1 block text-sm font-semibold text-gray-700"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
              minLength={8}
              maxLength={72}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-red-600 px-4 py-3 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Login navigation */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-bold text-red-600 hover:text-red-700 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;