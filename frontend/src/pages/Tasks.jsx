import React from "react";
import { FiCheckCircle, FiClock, FiAlertCircle } from "react-icons/fi";

const Tasks = () => {
  const tasks = [
    { title: "Complete Profile Setup", status: "Done", icon: <FiCheckCircle />, color: "text-green-600" },
    { title: "Build Dashboard UI", status: "Pending", icon: <FiClock />, color: "text-yellow-500" },
    { title: "Fix Login Bug", status: "Overdue", icon: <FiAlertCircle />, color: "text-red-500" },
    { title: "Create Tasks Page", status: "Pending", icon: <FiClock />, color: "text-yellow-500" },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center animate-fadeIn">My Tasks 📝</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition transform hover:scale-105 flex items-start gap-4"
          >
            <div className={`w-8 h-8 flex items-center justify-center rounded-full ${task.color} bg-opacity-20`}>
              {task.icon}
            </div>
            <div>
              <h2 className="text-lg font-semibold">{task.title}</h2>
              <p className="text-gray-500 mt-1">{task.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
