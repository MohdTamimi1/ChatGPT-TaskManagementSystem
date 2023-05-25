const express = require("express");
const router = express.Router();
const { addTask, getTasks, editTask } = require("./controllers");

// Add a new task
router.post("/tasks", addTask);

// Get the list of tasks
router.get("/tasks", getTasks);

// Edit a task
router.put("/tasks", editTask);

module.exports = router;
