const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    test: "Users Works",
    status: 201
  });
});

module.exports = router;
