const express = require("express");
const { prods_ar } = require("../data/shopData");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(prods_ar);
});

router.get("/catagory", (req, res) => {
  let catagoryQ = req.query.catagory;
  let temp_ar = prods_ar.filter((item) => {
    return item.cat == catagoryQ;
  });
  res.json(temp_ar);
});

module.exports = router;
