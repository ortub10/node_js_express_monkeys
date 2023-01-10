const express = require("express");
const { FoodModel } = require("../models/foodModel");
const router = express.Router();

router.get("/", async (req, res) => {
  let data = await FoodModel.find({});
  res.json(data);
});

module.exports = router;
