import React, { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", credentials);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard"); // dashboard
    } catch (err) {
      alert(err.response?.data?.error || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-[450px] h-[450px] bg-pink-400 rounded-full filter blur-3xl opacity-30 animate-ping"></div>

      {/* Glassmorphic Card */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/10 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl w-[400px] border border-white/20"
      >
        <h2 className="text-4xl font-extrabold text-white text-center mb-6 drop-shadow-xl">
          🔐 Login
        </h2>
        <p className="text-center text-white/70 mb-6">
          Welcome back! Please enter your details
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-white/80 text-sm mb-1 block">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-white/80 text-sm mb-1 block">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-white/30" />
          <span className="px-3 text-white/60 text-sm">or</span>
          <hr className="flex-grow border-white/30" />
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-white/90">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-yellow-300 hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
