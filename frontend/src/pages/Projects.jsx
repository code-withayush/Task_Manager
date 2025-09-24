import React from "react";
import { FiCheckCircle, FiClock } from "react-icons/fi";

const Projects = () => {
  const projects = [
    { name: "Dashboard Revamp", progress: 80, color: "bg-blue-500" },
    { name: "User Profile Page", progress: 50, color: "bg-green-500" },
    { name: "Task Management Module", progress: 30, color: "bg-yellow-500" },
    { name: "Notifications System", progress: 70, color: "bg-purple-500" },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center animate-fadeIn">My Projects 🚀</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-3">{proj.name}</h2>
            <div className="w-full bg-gray-200 h-4 rounded-full">
              <div
                className={`${proj.color} h-4 rounded-full transition-all duration-500`}
                style={{ width: `${proj.progress}%` }}
              ></div>
            </div>
            <p className="text-gray-500 mt-2">{proj.progress}% Completed</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
