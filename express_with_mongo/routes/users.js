const express = require("express");
const { UserModel, validUser } = require("../models/userModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "users work" });
});

router.post("/", async (req, res) => {
  let validBody = validUser(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  let user = new UserModel(req.body);
  await user.save();
  res.json(user);
});

module.exports = router;
