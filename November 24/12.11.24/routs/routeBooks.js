const express = require("express");
const router = express.Router();

const { checkFields } = require("../middleWare/bookMiddleWare.js");
const {
  createBook,
  getBookID,
  updateAll,
  updatePart,
  deleteBook,
} = require("../controllers/bookController.js");

router.post("/create", checkFields, createBook);

router.get("/:id", getBookID);

router.put("/updateAll/:id", checkFields, updateAll);

router.patch("/updatePart/:id", updatePart);

router.delete("/delete/:id", deleteBook);

module.exports = router;
