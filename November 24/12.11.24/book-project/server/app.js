const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

//book modules
const BookModel = require("./models/bookModel.js");
const booksRoute = require("./routs/routeBooks.js");

//user modules
const userModel = require("./models/UserModel.js");
const userRoute = require("./routs/routeUser.js");

//review modules
const reviewRoute = require("./routs/routeReview.js");
const reviewModel = require("./models/reviewModel.js");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.mongo_DB)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
  });

app.get("/", (req, res) => {
  res.send("HELLO TO HOME PAGE");
  console.log("HELLO TO HOME PAGE");
});

app.use("/api/books", booksRoute);
app.use("/api/users", userRoute);
app.use("/api/reviews", reviewRoute);

app.listen(process.env.PORT, () => {
  console.log("server is runing");
});
