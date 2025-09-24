import React from "react";
import { FiCheckCircle, FiAlertCircle, FiInfo } from "react-icons/fi";

const Notifications = () => {
  const notifications = [
    { title: "Profile Updated", type: "success", icon: <FiCheckCircle />, color: "bg-green-100 text-green-700" },
    { title: "New Task Assigned", type: "info", icon: <FiInfo />, color: "bg-blue-100 text-blue-700" },
    { title: "Deadline Missed", type: "error", icon: <FiAlertCircle />, color: "bg-red-100 text-red-700" },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center animate-fadeIn">Notifications 🔔</h1>
      <div className="space-y-4">
        {notifications.map((notif, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 p-4 rounded-2xl shadow hover:shadow-lg transform hover:scale-105 transition ${notif.color}`}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-opacity-20 text-xl">
              {notif.icon}
            </div>
            <div>
              <p className="font-semibold">{notif.title}</p>
              <p className="text-gray-500 text-sm">{new Date().toLocaleTimeString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
