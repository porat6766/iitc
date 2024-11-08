import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./userModel.js";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = 3000;

mongoose.connect(process.env.mongoDB_key).then(() => {
  console.log("connected to mongo successfult");
});

app.get("/", (req, res) => {
  res.send("WELCOME TO OUR API");
});

const recordsRecieve = (req, res, next) => {
  const log = `
    act time: ${new Date().toLocaleString()}
    path params received: ${JSON.stringify(req.params || {})}
    query params received: ${JSON.stringify(req.query || {})}
    request body: ${JSON.stringify(req.body || {})}
    Status Code: ${res.statusCode} \n
  `;
  console.log(log);
  res;
  next();
};

const validValues = (req, res, next) => {
  if (!req.body || !req.body.age || !req.body.email || !req.body.name) {
    return res.status(400).send({
      message: "Missing required fields: age, email, or name.",
    });
  }
  next();
};

app.post("/create", validValues, async (req, res) => {
  try {
    const newUser = new User({
      age: req.body.age,
      email: req.body.email,
      name: req.body.name,
    });
    console.log(newUser);

    await newUser.save();
    res.status(201).send({
      message: "User created successfully!",
      id: newUser._id,
    });
    console.log("created");
  } catch (error) {
    res.status(500).send({
      message: "Error!",
      error,
    });
  }
});

app.post("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, email } = req.body;

    const fieldsToUpdate = {};

    if (name) {
      fieldsToUpdate.name = name;
    }

    if (email) {
      fieldsToUpdate.email = email;
    }

    if (typeof age === "number") {
      fieldsToUpdate.age = age;
    }

    const updatedUser = await User.findByIdAndUpdate(id, fieldsToUpdate, {
      new: true,
    });
    res.status(200).send(updatedUser);

    console.log("update");
  } catch (error) {
    res.status(500).send({
      message: "Error!",
      error,
    });
  }
});

app.get("/getuser/:id", recordsRecieve, async (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = await User.findById(id);
    res.status(200).send({
      foundUser,
    });
    console.log(foundUser);
  } catch (error) {
    error;
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    if (deleteUser) {
      res.status(200).send("user deltes");
      console.log(foundUser);
    }
  } catch (error) {
    error;
  }
});

app.listen(PORT, () => {
  console.log("HELLO WORLD");
});
