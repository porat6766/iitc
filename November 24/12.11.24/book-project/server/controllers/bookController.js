const Book = require("../models/bookModel.js");

const createBook = async (req, res) => {
  const { bookName, price, year, createdBy } = req.body;
  try {
    const newBook = new Book({
      bookName,
      price,
      year,
      createdBy,
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

const getBookID = async (req, res) => {
  try {
    const { id } = req.params;
    const userToFound = await Book.findById(id);
    console.log(userToFound);

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

const updateAll = async (req, res) => {
  const { id } = req.params;
  const { bookName, price, year } = req.body;
  console.log({ bookName, price, year });
  try {
    const updateBook = {
      bookName,
      price,
      year,
    };
    const updateUser = await Book.findByIdAndUpdate(id, updateBook, {
      new: true,
    });

    console.log(updateUser);
    res.status(200).send({
      message: "User update sucssefuly",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePart = async (req, res) => {
  const { id } = req.params;
  const { bookName, price, year } = req.body;
  const updateBook = {};

  if (bookName) {
    updateBook.bookName = bookName;
  }

  if (price) {
    updateBook.price = price;
  }

  if (year) {
    updateBook.year = year;
  }

  try {
    const newBook = await Book.findByIdAndUpdate(id, updateBook, {
      new: true,
    });

    res.status(200).send({
      message: "User update sucssefuly",  
      data: newBook,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(403).send("id not a valid/exist");
    }
    const deletos = await Book.findByIdAndDelete(id);
    if (deletos) {
      res.status(200).send({ message: "book is deleted" });
    } else {
      res.status(404).send({ message: "book not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "general problem", body: error });
  }
};

module.exports = { createBook, getBookID, updateAll, updatePart, deleteBook };