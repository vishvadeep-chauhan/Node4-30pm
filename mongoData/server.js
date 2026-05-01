const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/myBlogDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("User", userSchema);

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = await User.create({
      name,
      email
    });

    console.log("Saved:", newUser);

    res.render("success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});