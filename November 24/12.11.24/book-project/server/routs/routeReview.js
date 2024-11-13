const express = require("express");

const {
  createReview,
  getReviewByID,
  updatePartialReview,
  updateAllReview,
  deleteReviewByID,
} = require("../controllers/reviewController.js");

const router = express.Router();

router.post("/create", createReview);
router.get("/:id", getReviewByID);
router.patch("/update/part/:id", updatePartialReview);
router.put("/update/:id", updateAllReview);
router.delete("/delete/:id", deleteReviewByID);

module.exports = router;
