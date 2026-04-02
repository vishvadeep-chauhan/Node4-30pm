const express = require("express");
const app = express();

const PORT = 3001; // different port (important)

/* ======================
   ROOT ROUTE
====================== */
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Laptop API running 💻"
  });
});

/* ======================
   LAPTOP ROUTE
====================== */
app.get("/api/laptop", (req, res) => {
  const laptop = {
    brand: "Apple",
    model: "MacBook Air M2",
    price: 120000,
    inStock: true,
    specs: ["16GB RAM", "512GB SSD", "M2 Chip"]
  };

  res.json({
    success: true,
    data: laptop
  });
});

/* ======================
   SERVER START
====================== */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});