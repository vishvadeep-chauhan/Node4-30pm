const express = require("express");
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.get("/user/:name", (req, res) => {
  const data = req.params.name;
  res.send(`hello ${data} Welcome to your dashboard`);
});
app.get("/products/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.json({
    category: category,
    productId: id,
    message: `Category ${category} , product id ${id}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port PORT`);
});
