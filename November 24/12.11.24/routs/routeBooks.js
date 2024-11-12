const express = require("express");
const router = express.Router();

const { checkFields } = require("../middleWare/userMiddleWare.js");
const { createBook, getUserID } = require("../controllers/userController.js");

router.post("/create", checkFields, createBook);

router.get("/:id", getUserID);

module.exports = router;
