var express = require('express');
var router = express.Router();

/* ROOT */
router.get('/', function(req, res) {
  res.json({ message: "API working" });
});

/* PRODUCTS */
router.get('/products', function(req, res) {
  const { category, brandName } = req.query;

  res.json({
    category,
    brand: brandName
  });
});

module.exports = router;


