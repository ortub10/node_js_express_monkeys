const express = require("express");
const { FoodModel, validFood } = require("../models/foodModel");
const router = express.Router();

router.get("/", async (req, res) => {
  let data = await FoodModel.find({});
  res.json(data);
});

router.post("/", async (req, res) => {
  let validBody = validFood(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  let food = new FoodModel(req.body);
  await food.save();
  res.json(food);
});

module.exports = router;
