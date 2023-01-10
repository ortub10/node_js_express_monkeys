const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel, validUser, validLogin } = require("../models/userModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "users work" });
});

router.post("/", async (req, res) => {
  let validBody = validUser(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }

  try {
    let user = new UserModel(req.body);
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();
    user.password = "******";
    res.json(user);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ err: "Email already in system or there another problem" });
  }
});

router.post("/login", async (req, res) => {
  let validBody = validLogin(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }

  //Check if email exists
  let user = await UserModel.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ msg: "User not found" });
  }

  let passwordValid = await bcrypt.compare(req.body.password, user.password);
  if (!passwordValid) {
    return res.status(401).json({ msg: "Password wrong" });
  }
  res.json({ msg: "All good, need to send you token" });
});
module.exports = router;
