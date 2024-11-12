const express = require("express");
const { createUser, deleteUser } = require("../controllers/UserController.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("user root");
});

router.post("/create", createUser);

router.delete("/delete/:id", deleteUser);

module.exports = router;
