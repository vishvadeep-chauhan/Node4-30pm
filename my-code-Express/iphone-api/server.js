const express = require("express");
const app = express();

const PORT = 3000;

/* ======================
   ROOT ROUTE
====================== */
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "iPhone API running 🚀"
  });
});

/* ======================
   GET ALL IPHONES
====================== */
app.get("/api/iphones", (req, res) => {
  const iphones = [
    { name: "iPhone 13", color: "Black" },
    { name: "iPhone 14", color: "Blue" },
    { name: "iPhone 15", color: "Pink" },
    { name: "iPhone 15 Pro", color: "Titanium" }
  ];

  res.json({
    success: true,
    count: iphones.length,
    data: iphones
  });
});

/* ======================
   SEARCH BY COLOR (QUERY)
====================== */
app.get("/api/iphones/search", (req, res) => {
  const { color } = req.query;

  const iphones = [
    { name: "iPhone 13", color: "Black" },
    { name: "iPhone 14", color: "Blue" },
    { name: "iPhone 15", color: "Pink" },
    { name: "iPhone 15 Pro", color: "Titanium" }
  ];

  const result = iphones.filter(phone =>
    phone.color.toLowerCase() === color?.toLowerCase()
  );

  res.json({
    success: true,
    results: result.length,
    data: result
  });
});

/* ======================
   GET BY NAME (DYNAMIC)
====================== */
app.get("/api/iphones/:name", (req, res) => {
  let name = decodeURIComponent(req.params.name);

  const iphones = [
    { name: "iPhone 13", color: "Black" },
    { name: "iPhone 14", color: "Blue" },
    { name: "iPhone 15", color: "Pink" }
  ];

  const phone = iphones.find(p =>
    p.name.toLowerCase() === name.toLowerCase()
  );

  if (!phone) {
    return res.json({
      success: false,
      message: "iPhone not found"
    });
  }

  res.json({
    success: true,
    data: phone
  });
});

/* ======================
   SERVER START
====================== */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});