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

// Edit task
const editTask = (req, res) => {
  const { taskIndex, newTask } = req.body;
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex] = newTask;
    res.status(200).json({ message: "Task updated successfully." });
  } else {
    res.status(400).json({ message: "Invalid task index." });
  }
};
