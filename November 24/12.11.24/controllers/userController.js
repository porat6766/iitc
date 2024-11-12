const User = require("../models/userModel.js");

const createBook = async (req, res) => {
  const { bookName, price, year } = req.body;
  console.log({ bookName, price, year });
  try {
    const newBook = new User({
      bookName,
      price,
      year,
    });
    const saveUser = await newBook.save();
    console.log(saveUser);
    res.status(201).send({
      message: "User create sucssefuly",
      data: saveUser,
    });
  } catch (error) {
    console.error(error);
    if (error?.errorResponse?.code === 11000) {
      res.send("please put unique bookName");
    } else {
      res.status(500).send(error);
    }
  }
};

const getUserID = async (req, res) => {
  try {
    const { id } = req.params;
    const userToFound = await User.findById(id);
    if (!userToFound) {
      res.status(404).send("user not a found");
    } else {
      res.status(200).send({
        message: "user is found",
        data: userToFound,
      });
    }
  } catch (error) {
    res.status(500);
  }
};

module.exports = { createBook, getUserID };
