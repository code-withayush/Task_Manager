import React from "react";
import { FaTrash, FaCheck, FaUndo } from "react-icons/fa";
import { motion } from "framer-motion";

const TaskCard = ({ task, toggleStatus, deleteTask }) => {
  const priorityStyles = {
    High : "bg-gradient-to-r from-red-500 to-pink-500",
    Medium : "bg-gradient-to-r from-yellow-400 to-orange-400",
    Low: "bg-gradient-to-r from-green-500 to-emerald-500",
  };

  const statusStyles =
    task.status === "Pending"
      ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
      : "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow-lg p-5 transition-all duration-300 border border-gray-100 hover:shadow-xl"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        {/* Task Info */}
        <div className="flex-1">
          <h5
            className={`text-lg md:text-xl font-semibold mb-1 ${
              task.status === "Completed"
                ? "line-through text-gray-400"
                : "text-gray-800"
            }`}
          >
            {task.title}
          </h5>
          {task.description && (
            <p className="text-gray-600 mb-2 text-sm md:text-base">{task.description}</p>
          )}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
              {task.category}
            </span>
            {task.dueDate && (
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                📅 {task.dueDate}
              </span>
            )}
            <span
              className={`${priorityStyles[task.priority]} text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm`}
            >
              🔥 {task.priority} priority
            </span>
          </div>
        </div>

        {/* Buttons (compact) */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-1 mt-2 md:mt-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleStatus(task._id)}
            className={`${statusStyles} text-white px-3 py-1 md:px-4 md:py-2 rounded-lg flex items-center gap-1 md:gap-2 text-sm md:text-base font-medium shadow`}
          >
            {task.status === "Pending" ? <FaCheck /> : <FaUndo />}
            {task.status === "Pending" ? "Done" : "Undo"}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => deleteTask(task._id)}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg flex items-center gap-1 md:gap-2 text-sm md:text-base font-medium shadow"
          >
            <FaTrash /> Delete
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TaskCard;
