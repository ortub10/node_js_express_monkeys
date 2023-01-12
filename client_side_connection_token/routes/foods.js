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
    res.status(201).json(food);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:idEdit", auth, async (req, res) => {
  let validateBody = validateFood(req.body);
  if (validateBody.error) {
    return res.json(validateBody.error.details);
  }

  try {
    let idEdit = req.params.idEdit;
    let data;
    if (req.tokenData.role == "admin") {
      data = await FoodModel.updateOne(
        {
          _id: idEdit,
        },
        req.body
      );
    } else {
      data = await FoodModel.updateOne(
        {
          _id: idEdit,
          user_id: req.tokenData._id,
        },
        req.body
      );
    }
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:idDel", auth, async (req, res) => {
  try {
    let idDel = req.params.idDel;
    let data;
    if (req.tokenData.role == "admin") {
      data = await FoodModel.deleteOne({
        _id: idDel,
      });
    } else {
      data = await FoodModel.deleteOne({
        _id: idDel,
        user_id: req.tokenData._id,
      });
    }
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
