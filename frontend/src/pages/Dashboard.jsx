import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import AddTaskForm from "../components/AddTaskForm";
import API from "../api";
import { FiSearch } from "react-icons/fi";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      const res = await API.post("/tasks", task);
      setTasks((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const toggleStatus = async (id) => {
    try {
      const task = tasks.find((t) => t._id === id);
      const res = await API.put(`/tasks/${id}`, {
        status: task.status === "Pending" ? "Completed" : "Pending",
      });
      setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const filteredTasks = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterCategory === "All" || t.category === filterCategory) &&
      (filterPriority === "All" || t.priority === filterPriority)
  );

  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gradient-to-tr from-purple-400 via-pink-300 to-yellow-200 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Add Task Form */}
          <div className="mb-8 bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/40 transition duration-300 hover:shadow-2xl">
            <AddTaskForm addTask={addTask} />
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center bg-white/50 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/30">
            <div className="relative w-full md:w-1/3">
              <FiSearch className="absolute top-3 left-3 text-gray-500" />
              <input
                type="text"
                placeholder="🔍 Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-purple-500 transition bg-white/80 backdrop-blur-sm"
              />
            </div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full md:w-1/3 px-4 py-2 border border-gray-200 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-pink-400 transition bg-white/80 backdrop-blur-sm"
            >
              <option>All</option>
              <option>Work</option>
              <option>Personal</option>
              <option>Study</option>
            </select>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="w-full md:w-1/3 px-4 py-2 border border-gray-200 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-green-400 transition bg-white/80 backdrop-blur-sm"
            >
              <option>All</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          {/* Task List */}
          {filteredTasks.length === 0 ? (
            <p className="text-center text-gray-700 mt-10 text-lg font-semibold animate-pulse">
              🌸 No tasks yet. Start adding and make your day productive!
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTasks.map((task) => (
                <div
                  key={task._id}
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  <TaskCard
                    task={task}
                    toggleStatus={toggleStatus}
                    deleteTask={deleteTask}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
