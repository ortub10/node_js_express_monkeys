const mongoose = require("mongoose");
const Joi = require("joi");

const foodSchema = new mongoose.Schema({
  name: String,
  cals: Number,
  price: Number,
  img_url: String,
  category_id: String,
  user_id: String,
});

exports.FoodModel = mongoose.model("foods", foodSchema);

exports.validateFood = (reqBody) => {
  let joiSchema = Joi.object({
    name: Joi.string().min(2).max(150).required(),
    cals: Joi.number().min(1).max(9999).required(),
    price: Joi.number().min(1).max(9999).required(),
    img_url: Joi.string().min(2).max(350).allow(null, ""),
    category_id: Joi.string().min(2).max(150).required(),
  });

  return joiSchema.validate(reqBody);
};
