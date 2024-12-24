const express = require("express");

const router = express.Router();

const {
  addPost,
  getPost,
  removePost,
  updatePost,
  getPostByID,
  getPostByName,
} = require("../Controller/postController.js");

router.get("/", getPost);

router.get("/:id", getPostByID);

router.post("/add", addPost);

router.delete("/remove/:id", removePost);

router.patch("/update/:id", updatePost);

module.exports = router;
