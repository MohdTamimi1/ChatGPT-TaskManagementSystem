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

// Delete task
const deleteTask = (req, res) => {
  const taskIndex = req.params.taskIndex;

  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks.splice(taskIndex, 1);
    res.status(200).json({ message: "Task deleted successfully." });
  } else {
    res.status(400).json({ message: "Invalid task index." });
  }
};

// Export functions
module.exports = { addTask, getTasks };
