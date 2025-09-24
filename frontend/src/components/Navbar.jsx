import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiLogOut,
  FiUser,
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiBell,
  FiSettings,
  FiClipboard,
  FiBriefcase,
  FiHome,
} from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Example counters
  const [dashboardCount, setDashboardCount] = useState(2);
  const [profileCount, setProfileCount] = useState(1);
  const [tasksCount, setTasksCount] = useState(3);
  const [projectsCount, setProjectsCount] = useState(4);
  const [notificationsCount, setNotificationsCount] = useState(5);
  const [settingsCount, setSettingsCount] = useState(1);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      document.documentElement.classList.toggle("dark", !prev);
      return !prev;
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [
    { name: "Dashboard", href: "/dashboard1", icon: <FiHome />, badge: dashboardCount, color: "bg-blue-500" },
    { name: "Profile", href: "/profile", icon: <FiUser />, badge: profileCount, color: "bg-green-500" },
    { name: "Tasks", href: "/tasks", icon: <FiClipboard />, badge: tasksCount, color: "bg-orange-500" },
    { name: "Projects", href: "/projects", icon: <FiBriefcase />, badge: projectsCount, color: "bg-purple-500" },
    { name: "Notifications", href: "/notifications", icon: <FiBell />, badge: notificationsCount, color: "bg-red-500" },
    { name: "Settings", href: "/settings", icon: <FiSettings />, badge: settingsCount, color: "bg-yellow-500" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 shadow-xl backdrop-blur-md transition-all duration-500 hover:shadow-2xl dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-white text-2xl font-extrabold tracking-wide cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg"
          >
            <FiUser size={26} className="animate-pulse" />
            Task
            <span className="text-yellow-300 dark:text-yellow-400 animate-bounce">
              Manager
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => navigate(item.href)}
                className="text-white dark:text-gray-200 hover:text-yellow-200 dark:hover:text-yellow-400 font-medium flex items-center gap-1 relative transition transform hover:scale-110 duration-300"
              >
                {item.icon} {item.name}
                {item.badge && (
                  <span className={`${item.color} text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse shadow-lg absolute -top-2 -right-3`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}

            {/* Dark/Light Toggle */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/50 dark:border-gray-300 hover:scale-125 transform transition-transform duration-200 shadow-lg hover:shadow-xl"
            >
              {darkMode ? (
                <FiSun size={20} className="text-yellow-400 animate-pulse" />
              ) : (
                <FiMoon size={20} className="animate-bounce" />
              )}
            </button>

            {/* Logout */}
            <button
              onClick={logout}
              className="flex items-center gap-2 bg-white/30 dark:bg-gray-700 hover:bg-white/50 dark:hover:bg-gray-600 text-white dark:text-gray-200 px-4 py-2 rounded-xl shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              <FiLogOut size={18} /> Logout
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-white dark:text-gray-200">
            {menuOpen ? (
              <FiX
                size={26}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer transform transition-transform hover:rotate-90 duration-300"
              />
            ) : (
              <FiMenu
                size={26}
                onClick={() => setMenuOpen(true)}
                className="cursor-pointer transform transition-transform hover:rotate-90 duration-300"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full left-0 bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 backdrop-blur-md text-white dark:text-gray-200 px-4 py-4 space-y-3 transform transition-all duration-500 ${
          menuOpen ? "top-16 opacity-100 scale-100" : "top-0 opacity-0 scale-95 pointer-events-none"
        } rounded-b-2xl shadow-xl`}
      >
        {menuItems.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              navigate(item.href);
              setMenuOpen(false);
            }}
            className="block w-full text-left font-medium hover:text-yellow-200 dark:hover:text-yellow-400 transition transform hover:scale-105 duration-300 flex items-center gap-2 relative"
          >
            {item.icon} {item.name}
            {item.badge && (
              <span className={`${item.color} text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse shadow-lg absolute -top-2 -right-3`}>
                {item.badge}
              </span>
            )}
          </button>
        ))}

        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 dark:bg-gray-700 hover:bg-white/40 dark:hover:bg-gray-600 transition transform hover:scale-105 duration-300"
        >
          {darkMode ? <FiSun /> : <FiMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button
          onClick={() => {
            logout();
            setMenuOpen(false);
          }}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          <FiLogOut size={18} /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
