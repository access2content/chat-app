const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  res.json({
    data: "Nice",
  });
});

router.get("users", (req, res) => {
  res.json({
    data: "Users",
  });
});

module.exports = router;
