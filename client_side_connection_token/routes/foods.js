const express = require("express");
const { auth } = require("../middlewares/auth");
const { FoodModel, validateFood } = require("../models/foodModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let data = await FoodModel.find({}).limit(20);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", auth, async (req, res) => {
  let validateBody = validateFood(req.body);
  if (validateBody.error) {
    return res.json(validateBody.error.details);
  }

  try {
    let food = new FoodModel(req.body);
    food.user_id = req.tokenData._id;
    await food.save();
    res.json(food);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
