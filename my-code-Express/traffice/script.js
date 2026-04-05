// Task 6: Traffic Authority - E-Challan Penalty Calculator
// Scenario: Build a route for a traffic police system. The URL will accept a vehicleType and a violation. The server uses a switch statement to determine the penalty amount.

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.get("/challan/:vehicleType/:violation", (req, res) => {
  const { vehicleType, violation } = req.params;

  let penalty = 0;

  switch (vehicleType) {
    case "bike":
      switch (violation) {
        case "no-helmet":
          penalty = 500;
          break;
        case "signal-jump":
          penalty = 1000;
          break;
        default:
          penalty = 0;
      }
      break;

    case "car":
      switch (violation) {
        case "no-seatbelt":
          penalty = 1000;
          break;
        case "overspeed":
          penalty = 2000;
          break;
        default:
          penalty = 0;
      }
      break;

    case "truck":
      switch (violation) {
        case "overload":
          penalty = 5000;
          break;
        case "no-permit":
          penalty = 7000;
          break;
        default:
          penalty = 0;
      }
      break;

    default:
      return res.status(400).json({
        error: "Invalid vehicle type",
      });
  }

  res.json({
    vehicleType,
    violation,
    penalty,
  });
});

