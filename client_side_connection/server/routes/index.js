const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "express work perfect" });
});

module.exports = router;