const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const userModel = require("./models/userModel.js");
const booksRoute = require("./routs/routeBooks.js");

const app = express();
app.use(express.json());

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

app.listen(process.env.PORT, () => {
  console.log("server is runing");
});
