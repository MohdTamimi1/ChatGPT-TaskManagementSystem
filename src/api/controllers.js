let tasks = [];

// Add task
const addTask = (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.status(200).json({ message: "Task added successfully." });
};

// Get tasks
const getTasks = (req, res) => {
  res.status(200).json({ tasks });
};

// Export functions
module.exports = { addTask, getTasks };
