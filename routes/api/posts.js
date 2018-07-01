const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    test: "Post Works",
    status: 201
  });
});

module.exports = router;
