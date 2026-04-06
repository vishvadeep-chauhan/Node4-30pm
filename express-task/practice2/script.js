const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT , () => {
console.log(`server is running on http://localhost:${PORT} `)
});


app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});


app.get("/product/:category/:id", (req, res) => {
    const {category, id} = req.params;

    res.json({
        category: category,
        id: id,
        message: `Category ${category}, product id ${id}`
    })
})

