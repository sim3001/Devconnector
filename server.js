const express = require("express");
const mongoose = require("mongoose");

//Initalize App
const app = express();

//======Initialize Mongoose and Database======//

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));
//============================================//

app.get("/", (req, res) => {
  res.send("Hello");
});

//=================Server Setup===================//
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
//================================================//
