const express = require("express");
const router = express.Router();
const { addTask, getTasks, deleteTask } = require("./controllers");

// Add a new task
router.post("/tasks", addTask);

// Get the list of tasks
router.get("/tasks", getTasks);

// Delete a task
router.delete("/tasks/:taskIndex", deleteTask);

module.exports = router;
