const express = require("express");
const {
  getRandonUser,
  homePage,
  createUser,
  getUserByID,
  updateAPartUser,
  updateAllUser,
  deleteUserByID,
  getAllUser,
} = require("../controllers/UserController.js");

const router = express.Router();

router.get("/", homePage);

router.get("/all", getAllUser);

router.get("/random", getRandonUser);

router.post("/create", createUser);

router.get("/:id", getUserByID);

router.patch("/update/part/:id", updateAPartUser);

router.put("/update/:id", updateAllUser);

router.delete("/delete/:id", deleteUserByID);

module.exports = router;
