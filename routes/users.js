const express = require("express");
const router = express.Router();
const { user } = require("../models");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  res.send(await user.findAll());
});

module.exports = router;
