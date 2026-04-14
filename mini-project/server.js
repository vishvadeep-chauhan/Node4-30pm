const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Validation Middleware
function validateUser(req, res, next) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.send("All fields are required");
  }

  if (password.length < 6) {
    return res.send("Password must be at least 6 characters");
  }

  next();
}

// Routes
app.post("/register", validateUser, (req, res) => {
  const { username, email, password } = req.body;

  const userData = `Username: ${username}\nEmail: ${email}\nPassword: ${password}\n---\n`;

  const filePath = path.join(__dirname, "users.txt");

  fs.appendFile(filePath, userData, (err) => {
    if (err) {
      console.error("Error saving data:", err);
      return res.send("Error saving user data");
    }

    console.log(`User Registered: ${username}, ${email}`);
    res.send(`<h1>Thanks ${username}, Registration successful</h1>`);
  });
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

