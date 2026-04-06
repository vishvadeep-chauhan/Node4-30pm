const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to API"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


/* SIMPLE ROUTES */
app.get("/about", (req, res) => {
  res.json({ success: true, data: "About page" });
});

app.get("/contact", (req, res) => {
  res.json({ success: true, data: "Contact page" });
});

/* API ROUTE */
app.get("/api/student", (req, res) => {
  const user = {
    name: "Avneesh",
    age: 24,
    skills: ["node.js", "Express.js", "HTML", "CSS", "JS"],
    isHired: true
  };

  res.json({
    success: true,
    data: user
  });
});

app.get("/api/student/:name", (req, res) => {
  const name = req.params.name;

  res.json({
    success: true,
    data: { name }
  });
});

app.get("/api/search", (req, res) => {
  const skill = req.query.skill;

  res.json({
    success: true,
    data: { skill }
  });
});


