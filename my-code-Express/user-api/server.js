const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});


app.get("/bmi/:weight/:height", (req, res) => {
    const {weight, height} = req.params

    const w = Number(weight)
    const h = Number(height)

    const bmi = w / (h*h);

  let category = "";

if (bmi < 18.5) category = "Underweight";
else if (bmi < 24.9) category = "Normal";
else if (bmi < 29.9) category = "Overweight";
else category = "too much fatty bro";

    res.json({
        weight: w,
        height: h,
        bmi: bmi.toFixed(2),
        Category: category
    })
});



