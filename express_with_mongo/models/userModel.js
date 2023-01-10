const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "regular",
  },
  date_created: {
    type: Date,
    default: Date.now(),
  },
});

exports.UserModel = mongoose.model("users", userSchema);

exports.validUser = (_bodyData) => {
  let joiSchema = Joi.object({
    name: Joi.string().min(2).max(99).required(),
    email: Joi.string().min(2).max(200).required().email(),
    password: Joi.string().min(3).max(100).required(),
  });

  return joiSchema.validate(_bodyData);
};

exports.validLogin = (_bodyData) => {
  let joiSchema = Joi.object({
    email: Joi.string().min(2).max(200).required().email(),
    password: Joi.string().min(3).max(100).required(),
  });

  return joiSchema.validate(_bodyData);
};
