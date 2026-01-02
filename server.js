const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve public folder
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Admin route
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
