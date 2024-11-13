const Review = require("../models/reviewModel.js");
const Book = require("../models/bookModel.js");
const z = require("zod");

//check the content that containig a list three letters
const reviewSchema = z.object({
  content: z.string().min(3, "must be at least 3 letters"),
});

const createReview = async (req, res) => {
  const newReview = new Review({
    content: req.body.content,
    rating: req.body.rating,
    bookID: req.body.bookID,
    userID: req.body.userID,
  });

  try {
    reviewSchema.parse(req.body);
    const response = await newReview.save();

    if (response) {
      res.status(201).send({
        message: "Review created successfully!",
        id: newReview._id,
      });

      await Book.findByIdAndUpdate(
        req.body.bookID,
        {
          $push: { reviews: response._id },
        },
        { new: true }
      );
    } else {
      res.status(404).send({
        message: "Review failed!",
      });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", data: error });
  }
};

const getReviewByID = async (req, res) => {
  const { id } = req.params;
  try {
    const foundReview = await Review.findById(id);

    if (!foundReview) {
      return res.status(404).send({
        message: `No review found with id ${id}`,
      });
    }

    res.status(200).send(foundReview);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const updatePartialReview = async (req, res) => {
  const { id } = req.params;
  const { content, rating } = req.body;

  const fieldsToUpdate = {};

  if (content) {
    fieldsToUpdate.content = content;
  }

  if (typeof rating === "number") {
    fieldsToUpdate.rating = rating;
  }

  try {
    const updatedReview = await Review.findByIdAndUpdate(id, fieldsToUpdate, {
      new: true,
    });

    if (!updatedReview) {
      return res.status(404).send({ message: "Review not found" });
    } else {
      res.status(200).send(updatedReview);
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
};

const updateAllReview = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedReview = await Review.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (updatedReview) {
      res.status(200).send(updatedReview);
    } else {
      res.status(404).send({ message: "Review not found" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
};

const deleteReviewByID = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedReview = await Review.findByIdAndDelete(id);

    if (deletedReview) {
      res.status(200).send("Review deleted successfully");
    } else {
      res.status(404).send({ message: "Review not found" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  createReview,
  getReviewByID,
  updatePartialReview,
  updateAllReview,
  deleteReviewByID,
};
