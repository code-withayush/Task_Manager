import React, { useState } from "react";
import { FiBell, FiLock, FiUser } from "react-icons/fi";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState(false);

  return (
    <div className="p-6 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center animate-fadeIn">Settings ⚙️</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Notification Toggle */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:scale-105 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FiBell className="w-6 h-6 text-blue-500" />
            <p>Enable Notifications</p>
          </div>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="w-6 h-6 accent-blue-500"
          />
        </div>

        {/* Privacy Toggle */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:scale-105 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FiLock className="w-6 h-6 text-red-500" />
            <p>Private Account</p>
          </div>
          <input
            type="checkbox"
            checked={privacy}
            onChange={() => setPrivacy(!privacy)}
            className="w-6 h-6 accent-red-500"
          />
        </div>

        {/* Profile Settings */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:scale-105 flex items-center gap-3">
          <FiUser className="w-6 h-6 text-green-500" />
          <p>Change Profile Info</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
