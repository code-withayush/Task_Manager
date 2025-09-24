import React, { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", user);
      alert("🎉 User registered successfully! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Error registering user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 via-teal-500 to-cyan-600 relative overflow-hidden">
      {/* Animated glowing orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-[450px] h-[450px] bg-green-400 rounded-full filter blur-3xl opacity-30 animate-ping"></div>

      {/* Glassmorphic Card */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/10 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl w-[400px] border border-white/20"
      >
        <h2 className="text-4xl font-extrabold text-white text-center mb-6 drop-shadow-xl">
          📝 Register
        </h2>
        <p className="text-center text-white/70 mb-6">
          Create your account to start managing tasks
        </p>

        {/* Name */}
        <div className="mb-4">
          <label className="text-white/80 text-sm mb-1 block">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-white/80 text-sm mb-1 block">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-white/80 text-sm mb-1 block">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-cyan-600 text-white font-bold shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
        >
          Register
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-white/30" />
          <span className="px-3 text-white/60 text-sm">or</span>
          <hr className="flex-grow border-white/30" />
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-white/90">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-yellow-300 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
