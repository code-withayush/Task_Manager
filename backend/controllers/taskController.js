const Task = require("../models/Task");

// Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Add new task
exports.addTask = async (req, res) => {
  try {
   const task = new Task(req.body);
const savedTask = await task.save();
res.json(savedTask);

  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// Update task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};

// Delete task
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
};
