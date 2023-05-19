const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Enable CORS and allow ChatGPT domain
app.use(
  cors({
    origin: ["http://localhost:3000", "https://chat.openai.com"],
    credentials: true,
  })
);

app.use(express.json());

// Serve the plugin manifest
app.get("/.well-known/ai-plugin.json", (req, res) => {
  res.sendFile(path.join(__dirname, "..", ".well-known", "ai-plugin.json"));
});

// Serve the OpenAPI specification
app.get("/openapi.yaml", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "openapi.yaml"));
});

// Serve the plugin logo
app.get("/logo.png", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "logo.png"));
});

// Define additional routes and functionality here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
