
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X ,  User, Lock, Mail ,Circle,CircleDot,} from "lucide-react";
import Signup from "../Signup";
import axios from "axios";
import { loginUser } from "../api/authApi";
const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
const [loginOpen, setLoginOpen] = useState(false);
const [loginType, setLoginType] = useState("SpiceClub");
const [loginMethod, setLoginMethod] = useState("Mobile Number");

const [mobileNumber, setMobileNumber] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [loginError, setLoginError] = useState("");
const [isLoggingIn, setIsLoggingIn] = useState(false);

const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoginError("");
  setIsLoggingIn(true);

  try {
    const loginData =
      loginMethod === "Email"
        ? {
            email: email.trim(),
            password,
          }
        : {
            mobile: mobileNumber.trim(),
            password,
          };

    const response = await loginUser(loginData);

    // Save authentication details
    sessionStorage.setItem("token", response.token);
    sessionStorage.setItem("user", JSON.stringify(response.user));

    // Close login panel
    setLoginOpen(false);

    // Clear form
    setMobileNumber("");
    setEmail("");
    setPassword("");

    // Navigate after successful login
    navigate("/search-flight");

  } catch (error) {
    if (axios.isAxiosError(error)) {
      setLoginError(
        error.response?.data?.message || "Invalid login credentials."
      );
    } else {
      setLoginError("Something went wrong. Please try again.");
    }
  } finally {
    setIsLoggingIn(false);
  }
};
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Add-ons", path: "/addons" },
    { name: "Deals", path: "/deals" },
    { name: "GiftCard", path: "/giftcard" },
    { name: "SpiceClub", path: "/spiceclub" },
    { name: "SpiceScreen", path: "/spicescreen" },
    { name: "Cargo", path: "/cargo" },
    { name: "Charter", path: "/charter" },
    { name: "Travel Policies", path: "/travel-policies" },
  ];

const handleNavigation = (path: string) => {
  navigate(path);
  setIsOpen(false);
};
  return (
    <nav className="relative flex items-center justify-between bg-red-600 px-4 py-5 text-white md:px-6 lg:px-8">

      {/* Logo */}
      <h1
        className="shrink-0 cursor-pointer text-xl font-bold md:text-2xl"
        onClick={() => handleNavigation("/")}
      >
        SPICEJET
      </h1>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-5 text-base lg:flex xl:gap-6">
        {navLinks.map((link) => (
          <h2
            key={link.name}
            onClick={() => handleNavigation(link.path)}
            className="cursor-pointer whitespace-nowrap transition-colors hover:text-gray-300"
          >
            {link.name}
          </h2>
        ))}
      </div>

      {/* Desktop Login / Signup */}
      <div className="hidden shrink-0 items-center gap-2 text-base lg:flex">
        <button   onClick={() => setLoginOpen(true)}
        className="hover:text-gray-300">
          Login
        </button>

        <span>|</span>

       <button
  onClick={() => navigate("/signup")}
  className="hover:text-gray-300"
>
  Signup
</button>
      </div>

{/* LOGIN OVERLAY */}



<div
  onClick={() => setLoginOpen(false)}
  className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 ${
    loginOpen
      ? "pointer-events-auto opacity-100"
      : "pointer-events-none opacity-0"
  }`}
>
  <div
    onClick={(e) => e.stopPropagation()}
    className={`absolute right-0 top-0 flex h-full w-full max-w-4xl bg-white shadow-2xl transition-transform duration-500 ${
      loginOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {/* LEFT RED NAVBAR */}
    <div className="flex h-full w-1/2  flex-col bg-red-600 text-white flex items-center justify-center  ">
     <div className="flex flex-col items-center  ">
       <div className="flex items-center  border-white/40 p-5">
        <h2 className="text-xl font-bold">Login</h2>
      </div>

      {["SpiceClub", "Travel Agent", "Sub Agent"].map((item) => (
        <button
          key={item}
          onClick={() => setLoginType(item)}
          className={` border border-white px-12 py-5 text-left font-semibold transition gap-2 m-4 ${
            loginType === item
              ? "bg-[#fd8e39] text-white border-2 border-white"
              : "text-white hover:bg-red-700"
          }`}
        >
          {item}
        </button>
      ))}
     </div>
    </div>

    {/* RIGHT WHITE LOGIN FORM */}
    <div className="relative flex-1 overflow-y-auto bg-white p-6 sm:p-10">

      {/* CLOSE ICON */}
      <button
        type="button"
        onClick={() => setLoginOpen(false)}
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-red-100 hover:text-red-600"
      >
        <X size={25} strokeWidth={2.5} />
      </button>

      <h2 className="mb-8 mt-8 text-2xl font-bold text-gray-900">
        {loginType} Login
      </h2>
<div className="h-50 w-full overflow-hidden rounded-xl">
  <img
    src="/img/login-banner.png"
    alt="Login banner"
    className="h-full w-full object-cover"
  />
</div>
      {/* MOBILE / EMAIL RADIO OPTIONS */}
      <div className="mb-7 flex flex-wrap gap-8 mt-8 text-xl">

        <button
          type="button"
          onClick={() => setLoginMethod("Mobile Number")}
          className="flex items-center gap-2 font-semibold  text-gray-700 "
        >
          {loginMethod === "Mobile Number" ? (
            <CircleDot size={21} className="text-red-600" />
          ) : (
            <Circle size={21} className="text-gray-400" />
          )}
          Mobile Number
        </button>

        <button
          type="button"
          onClick={() => setLoginMethod("Email")}
          className="flex items-center gap-2 font-semibold text-gray-700 "
        >
          {loginMethod === "Email" ? (
            <CircleDot size={21} className="text-red-600" />
          ) : (
            <Circle size={21} className="text-gray-400" />
          )}
          Email
        </button>

      </div>
<form onSubmit={handleLogin}>
      {/* MOBILE NUMBER INPUT */}
      {loginMethod === "Mobile Number" && (
        <>
          <label className="mb-2 block text-xl font-semibold text-gray-700">
            Mobile Number
          </label>

          <div className="mb-6 flex rounded-lg border border-gray-300 focus-within:border-red-500">
            <span className="border-r bg-gray-50 px-4 py-3 text-gray-700">
              +91
            </span>

            <input
              type="tel"
              placeholder="Enter mobile number"
                value={mobileNumber}
  onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full rounded-r-lg px-4 py-3 outline-none"
            />
          </div>
        </>
      )}

      {/* EMAIL INPUT */}
      {loginMethod === "Email" && (
        <>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Email
          </label>

        <input
  type="email"
  placeholder="Enter email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="mb-6 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
/>
        </>
      )}

      {/* PASSWORD */}
      <label className="mb-2 block text-xl font-semibold text-gray-700">
        Password
      </label>

 <input
  type="password"
  placeholder="Enter password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
/>

      {/* FORGOT PASSWORD */}
      <div className="mb-7 mt-3 text-right">
        <button className="text-lg font-semibold text-red-600 hover:underline">
          Forgot Password?
        </button>
      </div>

      {/* LOGIN BUTTON */}
  {/* LOGIN ERROR */}
{loginError && (
  <p className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-600">
    {loginError}
  </p>
)}

{/* LOGIN BUTTON */}
<button
  type="submit"
  disabled={isLoggingIn}
  className="w-full rounded-lg bg-red-600 py-3.5 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
>
  {isLoggingIn ? "LOGGING IN..." : "LOGIN"}
</button>
</form>
      {/* SIGN UP */}
      <p className="mt-7 text-center text-lg text-gray-600">
        Not a member yet?{" "}
        <a
          href="https://spiceclub.spicejet.com/signup/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-red-600 hover:underline"
        >
          Sign Up
        </a>
      </p>

    </div>
  </div>
</div>

      {/* Hamburger Icon: Small and Medium Screens */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md p-2 transition-colors hover:bg-red-700 lg:hidden"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={30} />
        ) : (
          <Menu size={30} />
        )}
      </button>

      {/* Mobile and Tablet Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 flex max-h-[80vh] w-full flex-col gap-4 overflow-y-auto bg-red-600 px-6 py-5 shadow-lg lg:hidden">

          {navLinks.map((link) => (
            <h2
              key={link.name}
              onClick={() => handleNavigation(link.path)}
              className="cursor-pointer border-b border-red-500 pb-3 text-lg transition-colors hover:text-gray-300"
            >
              {link.name}
            </h2>
          ))}

          {/* Mobile Login / Signup */}
          <div className="flex items-center gap-3 pt-2 text-lg">
            <button className="hover:text-gray-300">
              Login
            </button>

            <span>|</span>

            <button className="hover:text-gray-300">
              Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;