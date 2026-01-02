
const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit-project", (req, res) => {
  console.log("Client Project:", req.body);
  res.json({ success: true, message: "Project submitted successfully" });
});

app.listen(3000, () => {
  console.log("TIGERARC CONSTRUCTION server running");
});
