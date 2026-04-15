const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/submit", (req, res) => {
  const { name, age, role } = req.body;
  res.render("result", { name, age, role });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});