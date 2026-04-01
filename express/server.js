const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  //   res.json({ message: "Welcome to the API" });
  res.send("Welcome to the Home API");
});
app.get("/about", (req, res) => {
  //   res.json({ message: "Welcome to the API" });
  res.send(`
    
    `);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
