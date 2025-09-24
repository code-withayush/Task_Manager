const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth"); // <- import middleware

// Get user-specific tasks
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 });
  res.json(tasks);
});

// Add task
router.post("/", auth, async (req, res) => {
  const task = new Task({ ...req.body, user: req.user.id });
  const savedTask = await task.save();
  res.json(savedTask);
});

// Update task
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// Delete task
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
