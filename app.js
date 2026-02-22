const express = require("express");
const app = express();
const PORT = 3000;

// Simple route
app.get("/", (req, res) => {
  res.send("Hello from Vinny's Node server 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});