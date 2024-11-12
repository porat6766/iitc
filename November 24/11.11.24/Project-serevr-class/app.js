//base modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//user modules
const UserRoute = require("./routs/UserRoute.js");
const userModel = require("./models/UserModel.js");

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_KEY).then(() => {
  console.log("THE DATA BASE IS CONNECTED");
});

app.get("/", (req, res) => {
  res.send("HOME-PAGE");
});

app.use("/api/users", UserRoute);

app.listen(process.env.PORT, () => {
  console.log("THE SERVER IS RUNING...");
});
