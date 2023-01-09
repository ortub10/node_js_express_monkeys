const express = require("express");
const { prods_ar } = require("../data/shopData");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(prods_ar);
});

router.get("/:id", (req, res) => {
  let idP = req.params.id;
  let prod = prods_ar.find((item) => {
    return item.id == idP;
  });
  res.json(prod);
});

//with query string
router.get("/catagory", (req, res) => {
  let catagoryQ = req.query.catagory;
  let temp_ar = prods_ar.filter((item) => {
    return item.cat == catagoryQ;
  });
  res.json(temp_ar);
});

//with params
router.get("/catagory/:catagoryName", (req, res) => {
  let catagoryP = req.params.catagoryName;
  let temp_ar = prods_ar.filter((item) => {
    return item.cat == catagoryP;
  });
  res.json(temp_ar);
});

//------------------------------

//?min
router.get("/query", (req, res) => {
  let min = req.query.min;
  let temp_ar = prods_ar.filter((item) => {
    return Number(item.price) > min;
  });
  res.json(temp_ar);
});
module.exports = router;
