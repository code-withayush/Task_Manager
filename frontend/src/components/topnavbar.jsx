import React, { useState, useEffect } from "react";
import { FiUser, FiMoon, FiSun, FiClipboard, FiHome, FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const menuItems = [
    { name: "Home", href: "/", icon: <FiHome /> },
    { name: "Dashboard", href: "/dashboard1", icon: <FiClipboard /> },
    { name: "Profile", href: "/profile", icon: <FiUser /> },
    { name: "Features", href: "#features", icon: <FiSettings /> },
    { name: "Pricing", href: "#pricing", icon: <FiSettings /> },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-3
      bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
      shadow-xl backdrop-blur-md transition-all duration-500">

      {/* Logo + Name */}
      <div className="flex items-center gap-2 text-white text-xl font-bold cursor-pointer relative group" onClick={() => navigate("/")}>
        <FiUser size={24} className="animate-pulse" />
        <span className="text-yellow-300 dark:text-yellow-400">Task Manager</span>

        {/* Animated glowing underline */}
        <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 rounded-full
          group-hover:w-full transition-all duration-500 blur-sm opacity-70 animate-pulse"></span>
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex items-center gap-6">
        {menuItems.map((item, i) => (
          <button
            key={i}
            onClick={() => navigate(item.href)}
            className="flex items-center gap-1 text-white dark:text-gray-200 hover:text-yellow-200 dark:hover:text-yellow-400 font-medium 
              transition transform hover:scale-110 duration-300 relative"
          >
            {item.icon && <span>{item.icon}</span>} {item.name}
          </button>
        ))}

        {/* Dark/Light Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:scale-110 transition-transform"
        >
          {darkMode ? <FiSun size={20} className="text-yellow-400 animate-pulse" /> : <FiMoon size={20} />}
        </button>
      </div>

      {/* Mobile Placeholder */}
      <div className="md:hidden text-white">
        {/* You can add mobile menu toggle here */}
        <span>☰</span>
      </div>
    </div>
  );
};

export default TopBar;
