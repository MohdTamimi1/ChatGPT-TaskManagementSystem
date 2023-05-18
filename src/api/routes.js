const express = require("express");
const router = express.Router();
const { addTask, getTasks } = require("./controllers");

// Add a new task
router.post("/tasks", addTask);

// Get the list of tasks
router.get("/tasks", getTasks);

module.exports = router;
