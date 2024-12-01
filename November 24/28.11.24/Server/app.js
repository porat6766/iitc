const express = require("express");
const login = require("./login.js");
const { hashPassword } = require("./login.js");
const bcrypt = require("bcrypt");
const { error } = require("console");
const cors = require("cors");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const DammyUser = {};

app.get("/", (req, res) => {
  res.status(202).send({
    message: "Hello",
  });
  console.log("Home-Page");
});

app.post("/sign-up", async (req, res) => {
  try {
    const { userPassword, email } = req.body;

    const haseUser = await hashPassword(userPassword);
    DammyUser.email = email;
    DammyUser.userPassword = haseUser;
    res.send({ data: DammyUser });
  } catch (error) {
    console.error(error);
  }
});

const hashKey = "dfghjkl45678yutdfguy8fghjkl78654rtghj";

app.post("/login", async (req, res) => {
  console.log(DammyUser);

  try {
    const { userPassword, email } = req.body;

    if (DammyUser.email !== email) {
      return res.status(401).send({
        message: "No such user",
      });
    }

    const isItCorrectPassword = await bcrypt.compare(
      userPassword + hashKey,
      DammyUser.userPassword
    );

    console.log(isItCorrectPassword);

    if (isItCorrectPassword) {
      return res.status(200).send({
        status: "success",
      });
    } else {
      return res.status(401).send({
        message: "Invalid password",
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({
      message: "An error occurred during login",
    });
  }
});

app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
});
