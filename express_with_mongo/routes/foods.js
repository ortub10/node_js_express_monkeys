const express = require("express");
const { FoodModel } = require("../models/foodModel");
const router = express.Router();

router.get("/", async (req, res) => {
  let data = await FoodModel.find({});
  res.json(data);
});

router.post("/", async (req, res) => {
  //for checking, the post will return data it get
  let food = new FoodModel(req.body);
  await food.save();
  res.json(food);
});

module.exports = router;
