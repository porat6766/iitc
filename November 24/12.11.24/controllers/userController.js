const User = require("../models/UserModel.js");

const createUser = (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
  });
  console.log(newUser);

  newUser
    .save()
    .then(() => {
      res.status(200).send({ message: "user create", user: newUser });
    })
    .catch((error) => {
      console.error("Error saving joke:", error);
      res.status(500).send("Internal Server Error");
    });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("Invalid ID");
  }

  User.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({ message: "User does not exist" });
      }
      res.status(200).send({ message: "Deleted successfully", data: result });
    })
    .catch((err) => {
      console.error("Error deleting user:", err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = { createUser, deleteUser };
