// app.js

const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

/**
 * ROOT
 */
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  res.status(201).json({
    message: "User registered",
    data: {
      name,
      email,
    },
  });
});

/**
 * START SERVER
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

