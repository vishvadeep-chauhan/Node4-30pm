// global.userName = "vishv";
// res.render();
//EJS = embaded js themplate engine

const express = require("express");
const app = express();

const PORT = 3000;

// set EJS
app.set("view engine", "ejs");

// route
app.get("/", (req, res) => {
  const user = {
    name: "Vishv",
    age: 20,
    role: "MERN Dev"
  };

  res.render("index", user);
});

// server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});