const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  img: String,
  cal: Number,
  price: Number,
});

const FoodModel = mongoose.model("foods", foodSchema);
exports.FoodModel = FoodModel;
