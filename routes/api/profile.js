const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    test: "Profile Works",
    status: 201
  });
});

module.exports = router;
