const express = require("express");
const mongoose = require("mongoose");

//Require Routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//Initalize App
const app = express();
//Bodyparser Setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//======Initialize Mongoose and Database======//

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));

//==============Use Routes=================//

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//=================Server Setup===================//
const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
//================================================//
