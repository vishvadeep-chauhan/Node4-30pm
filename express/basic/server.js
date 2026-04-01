const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.get("/api/user", (req, res) => {
  res.send("About ");
});
app.get("/api/student", (req, res) => {
  const user = {
    name: "Avneesh",
    age: 24,
    skills: ["node.js", "Express.js", "HTML", "CSS", "JS"],
    isHired: true,
  };
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
