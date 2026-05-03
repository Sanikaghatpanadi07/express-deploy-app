const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

// Logging Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Routes

app.get("/", (req, res) => {
  res.send("Application Deployed Successfully");
});

app.get("/status", (req, res) => {
  res.json({
    status: "running",
    environment: ENV
  });
});

// NEW ROUTE
app.get("/info", (req, res) => {
  res.json({
    name: "Express Deploy App",
    version: "1.0.0",
    author: "Sanika"
  });
});

// 404 Error Handling
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running in ${ENV} mode on port ${PORT}`);
});