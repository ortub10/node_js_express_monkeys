const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ msg: "foods work !" });
});

module.exports = router;
