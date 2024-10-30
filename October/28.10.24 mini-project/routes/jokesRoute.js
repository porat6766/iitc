import express from "express";
import fs from "fs";
import path from "path";
import jokes from "../DB/jokes.json" assert { type: "json" };

const router = express.Router();

router.get("/", (req, res) => {
  res.send("page-jokes");
});
//jokes app
router.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex].joke;
  console.log(randomJoke);

  res.send(randomJoke);
});

router.post("/create", (req, res) => {
  const newJoke = req.body;
  jokes.push(newJoke);
  res.send({ massege: "Joke added", joke: newJoke });
});

router.get("/:id", (req, res) => {
  const id = +req.params["id"];
  const resData = jokes.find((current) => {
    return current.id === id;
  });
  if (resData) {
    res.send(resData);
  } else {
    res.send({ error: "Error" });
  }
});

router.patch("/update/:id", (req, res) => {
  const newdata = req.body;
  const id = +req.params["id"];

  fs.readFile(path.join("DB", "jokes.json"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ error: "Failed to read the file" });
    }

    const jokes = JSON.parse(data);
    const indexData = jokes.findIndex((user) => user.id === id);

    if (indexData !== -1) {
      jokes[indexData] = { ...jokes[indexData], ...newdata };

      fs.writeFile(
        path.join("DB", "jokes.json"),
        JSON.stringify(jokes, null, 2),
        "utf8",
        (err) => {
          if (err) {
            console.log(err);
            return res
              .status(500)
              .send({ error: "Failed to write to the file" });
          }
          res.send(jokes[indexData]);
        }
      );
    } else {
      res.status(404).send({ error: "jokes not found" });
    }
  });
});

router.delete("/delete/:id", (req, res) => {
  // {
  //   "id": 10,
  //   "joke": "Did you hear about the restaurant on the moon? Great food, no atmosphere."
  // }
  const id = +req.params["id"];

  fs.readFile(path.join("DB", "jokes.json"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ error: "Failed to read the file" });
    }

    const jokes = JSON.parse(data);
    const updatedJokes = jokes.filter((joke) => joke.id !== id);

    if (updatedJokes.length === jokes.length) {
      return res.status(404).send({ error: "Joke not found" });
    }

    fs.writeFile(
      path.join("DB", "jokes.json"),
      JSON.stringify(updatedJokes, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send({ error: "Failed to write to the file" });
        }
        res.send({ message: "Joke deleted successfully" });
      }
    );
  });
});

export default router;
