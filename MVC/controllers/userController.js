const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  const users = await User.find();

  res.render("user", { users });
};

exports.addUser = async (req, res) => {
  const { name, age } = req.body;

  await User.create({
    name,
    age,
  });

  res.redirect("/");
};