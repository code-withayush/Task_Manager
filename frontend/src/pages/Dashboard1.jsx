import React from "react";
import { Activity, BarChart2, Link2, Bell, User } from "lucide-react";

const Dashboard1 = () => {
  const stats = [
    { title: "Total Logins", value: "124", from: "from-blue-400", to: "to-blue-600", icon: "🔵" },
    { title: "Tasks Completed", value: "89", from: "from-green-400", to: "to-green-600", icon: "✅" },
    { title: "Notifications", value: "12", from: "from-yellow-400", to: "to-yellow-500", icon: "🟡" },
    { title: "Profile Views", value: "340", from: "from-purple-400", to: "to-purple-600", icon: "🟣" },
  ];

  const activities = [
    "✔️ Completed Profile Update",
    "📌 Created a new project",
    "🔔 Checked notifications",
    "🚀 Launched new feature",
    "💬 Received feedback"
  ];

  const quickLinks = [
    { name: "Go to Profile", href: "/profile", icon: <User className="w-5 h-5 mr-2 text-white" /> },
    { name: "Check Notifications", href: "/notifications", icon: <Bell className="w-5 h-5 mr-2 text-white" /> },
    { name: "Settings", href: "/settings", icon: "⚙️" },
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 min-h-screen">
      {/* Header */}
      <div className="mb-12 text-center animate-fadeIn">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-3 drop-shadow-lg animate-bounce">
          Welcome Back 🎉
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fadeIn delay-200">
          Your vibrant, interactive dashboard to track activities, stats, and shortcuts in style.
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`relative rounded-2xl p-6 shadow-xl transform hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br ${stat.from} ${stat.to} text-white overflow-hidden group`}
          >
            <div className="absolute -top-10 -right-10 opacity-20 text-6xl">{stat.icon}</div>
            <h2 className="text-sm font-semibold mb-2">{stat.title}</h2>
            <p className="text-3xl font-bold">{stat.value}</p>
            <div className="w-full h-1 bg-white bg-opacity-30 mt-4 rounded-full animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="bg-gradient-to-br from-pink-300 to-pink-500 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 text-white">
          <div className="flex items-center mb-4">
            <Activity className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Recent Activity</h2>
          </div>
          <ul className="space-y-2">
            {activities.map((act, i) => (
              <li key={i} className="flex items-center hover:scale-105 transition-transform duration-300">
                {act}
              </li>
            ))}
          </ul>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 text-white">
          <div className="flex items-center mb-4">
            <BarChart2 className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Statistics</h2>
          </div>
          <div className="flex justify-around mb-4">
            <div className="text-center animate-bounce">
              <p className="text-2xl font-bold">75%</p>
              <p className="text-sm">Completed</p>
            </div>
            <div className="text-center animate-bounce delay-300">
              <p className="text-2xl font-bold">25%</p>
              <p className="text-sm">Pending</p>
            </div>
          </div>
          <div className="w-full h-2 bg-white bg-opacity-30 rounded-full animate-pulse"></div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 text-white">
          <div className="flex items-center mb-4">
            <Link2 className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Quick Links</h2>
          </div>
          <ul className="space-y-3">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="flex items-center text-white hover:scale-105 transition-transform duration-300"
                >
                  {link.icon} {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
