const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Import Post Model
const Post = require("../../models/Post");
//import Validation
const validatePostInput = require("../../validation/post");

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => {
  res.json({
    test: "Post Works",
    status: 201
  });
});

// @route   POST api/posts
// @desc    Create Post
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    //Check validation
    if (!isValid) {
      //If any errors send error
      return res.status(400).json(errors);
    }
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });
    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
