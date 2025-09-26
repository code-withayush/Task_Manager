// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FiPlusCircle } from "react-icons/fi";

// const AddTaskForm = ({ addTask }) => {
//   const [task, setTask] = useState({
//     title: "",
//     description: "",
//     category: "Work",
//     dueDate: "",
//     priority: "Medium",
//   });

//   const handleChange = (e) => {
//     setTask({ ...task, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!task.title) return;

//     try {
//       await addTask(task);
//       setTask({
//         title: "",
//         description: "",
//         category: "Work",
//         dueDate: "",
//         priority: "Medium",
//       });
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   return (
//     <motion.form
//       onSubmit={handleSubmit}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className="bg-white p-6 mb-8 rounded-2xl shadow-xl border border-gray-100"
//     >
//       <h2 className="text-2xl font-bold mb-5 text-gray-800 flex items-center gap-2">
//         <FiPlusCircle className="text-blue-500" size={24} />
//         Add New Task
//       </h2>

//       {/* Title Input */}
//       <input
//         type="text"
//         name="title"
//         placeholder="Task title"
//         value={task.title}
//         onChange={handleChange}
//         className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 transition-all"
//       />

//       {/* Description */}
//       <textarea
//         name="description"
//         placeholder="Task description"
//         value={task.description}
//         onChange={handleChange}
//         className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 transition-all"
//         rows="3"
//       />

//       {/* Options Row */}
//       <div className="flex flex-col md:flex-row gap-3 mb-4">
//         <select
//           name="category"
//           value={task.category}
//           onChange={handleChange}
//           className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
//         >
//           <option>Work</option>
//           <option>Personal</option>
//           <option>Study</option>
//         </select>

//         <select
//           name="priority"
//           value={task.priority}
//           onChange={handleChange}
//           className={`flex-1 px-4 py-3 border rounded-lg focus:outline-none transition-all ${
//             task.priority === "High"
//               ? "border-red-400 focus:ring-red-400"
//               : task.priority === "Medium"
//               ? "border-yellow-400 focus:ring-yellow-400"
//               : "border-green-400 focus:ring-green-400"
//           }`}
//         >
//           <option>High</option>
//           <option>Medium</option>
//           <option>Low</option>
//         </select>

//         <input
//           type="date"
//           name="dueDate"
//           value={task.dueDate}
//           onChange={handleChange}
//           className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
//         />
//       </div>

//       {/* Submit Button */}
//       <motion.button
//         whileHover={{ scale: 1.03 }}
//         whileTap={{ scale: 0.95 }}
//         type="submit"
//         className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold shadow-md transition-all"
//       >
//         ➕ Add Task
//       </motion.button>
//     </motion.form>
//   );
// };

// export default AddTaskForm;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPlusCircle } from "react-icons/fi";

const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    category: "Work",
    dueDate: "",
    priority: "Medium",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.title) return;

    setLoading(true);
    try {
      await addTask(task);
      setTask({
        title: "",
        description: "",
        category: "Work",
        dueDate: "",
        priority: "Medium",
      });
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 mb-8 rounded-2xl shadow-xl border border-gray-100"
    >
      <h2 className="text-2xl font-bold mb-5 text-gray-800 flex items-center gap-2">
        <FiPlusCircle className="text-blue-500" size={24} />
        Add New Task
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Task title"
        value={task.title}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 transition-all"
      />

      <textarea
        name="description"
        placeholder="Task description"
        value={task.description}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 transition-all"
        rows="3"
      />

      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <select
          name="category"
          value={task.category}
          onChange={handleChange}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
        >
          <option>Work</option>
          <option>Personal</option>
          <option>Study</option>
        </select>

        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          className={`flex-1 px-4 py-3 border rounded-lg focus:outline-none transition-all ${
            task.priority === "High"
              ? "border-red-400 focus:ring-red-400"
              : task.priority === "Medium"
              ? "border-yellow-400 focus:ring-yellow-400"
              : "border-green-400 focus:ring-green-400"
          }`}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold shadow-md flex justify-center items-center gap-2 transition-all"
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        ) : (
          "➕ Add Task"
        )}
      </motion.button>
    </motion.form>
  );
};

export default AddTaskForm;
