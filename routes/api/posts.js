const express = require("express");
const router = express.Router();

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => {
    res.json({
        test: "Post Works",
        status: 201
    });
});

module.exports = router;
