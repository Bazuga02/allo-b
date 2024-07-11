const express = require("express");
const router = express.Router();
const mealsData = require("../data/meals-data");

router.get("/", (req, res) => {
  res.json(mealsData.meals);
});

router.get("/labels", (req, res) => {
  res.json(mealsData.labels);
});

module.exports = router;
