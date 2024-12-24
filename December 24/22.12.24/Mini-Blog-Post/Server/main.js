const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const postRoute = require("./Route/postRouter.js");

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.DB_KEY).then(() => {
  console.log("connected-to-mongoDB");
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
  console.log("Home Page accessed");
});

app.use("/api/post", postRoute);

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
