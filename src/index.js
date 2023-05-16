const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

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
