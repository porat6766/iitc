import express from "express";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import jokes from "./DB/jokes.json" assert { type: "json" };
import users from "./DB/users.json" assert { type: "json" };
import products from "./DB/products.json" assert { type: "json" };

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(morgan("short"));

const getRandomItem = (type) => {
  const items = type === "joke" ? jokes : users;
  const randomIndex = Math.floor(Math.random() * items.length);
  return type === "joke" ? items[randomIndex].joke : items[randomIndex].name;
};

//general check status
app.get("/api/status", (req, res) => {
  res.send({ status: "server is running" });
});

//jokes app
app.get("/api/jokes/random", (req, res) => {
  res.send(`JOKE: ${getRandomItem("joke")}`);
});

app.post("/api/jokes/create", (req, res) => {
  const newJoke = req.body;
  jokes.push(newJoke);
  res.send({ massege: "Joke added", joke: newJoke });
});

app.get("/api/jokes/:id", (req, res) => {
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

app.patch("/api/jokes/:id", (req, res) => {
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
        JSON.stringify(users, null, 2),
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

//user app
app.get("/api/user/random", (req, res) => {
  res.send(`USER: ${getRandomItem("user")}`);
});

app.post("/api/users/create", (req, res) => {
  const newUser = req.body;
  jokes.push(newUser);
  res.send({ massege: "user added", user: newUser });
});

app.get("/api/users/:id", (req, res) => {
  const id = +req.params["id"];
  const resData = users.find((current) => {
    return current.id === id;
  });
  if (resData) {
    res.send(resData);
  } else {
    res.send({ error: "Error" });
  }
});

app.patch("/api/users/:id", (req, res) => {
  const newdata = req.body;
  const id = +req.params["id"];

  fs.readFile(path.join("DB", "users.json"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ error: "Failed to read the file" });
    }

    const users = JSON.parse(data);
    const indexData = users.findIndex((user) => user.id === id);

    if (indexData !== -1) {
      users[indexData] = { ...users[indexData], ...newdata };

      fs.writeFile(
        path.join("DB", "users.json"),
        JSON.stringify(users, null, 2),
        "utf8",
        (err) => {
          if (err) {
            console.log(err);
            return res
              .status(500)
              .send({ error: "Failed to write to the file" });
          }
          res.send(users[indexData]);
        }
      );
    } else {
      res.status(404).send({ error: "user not found" });
    }
  });
});

//product app
app.get("/api/products/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * products.length);
  const randomProduct = products[randomIndex].name;

  res.send(randomProduct);
});

app.post("/api/products/create", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.send({ massege: "product added", user: newProduct });
});

app.get("/api/products/:id", (req, res) => {
  const id = +req.params["id"];
  const resData = products.find((current) => {
    return current.id === id;
  });
  if (resData) {
    res.send(resData);
  } else {
    res.send({ error: "Error" });
  }
});

app.patch("/api/products/:id", (req, res) => {
  const newdata = req.body;
  const id = +req.params["id"];

  fs.readFile(path.join("DB", "products.json"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ error: "Failed to read the file" });
    }

    const products = JSON.parse(data);
    const indexData = products.findIndex((product) => product.id === id);

    if (indexData !== -1) {
      products[indexData] = { ...products[indexData], ...newdata };

      fs.writeFile(
        path.join("DB", "products.json"),
        JSON.stringify(products, null, 2),
        "utf8",
        (err) => {
          if (err) {
            console.log(err);
            return res
              .status(500)
              .send({ error: "Failed to write to the file" });
          }
          res.send(products[indexData]);
        }
      );
    } else {
      res.status(404).send({ error: "Product not found" });
    }
  });
});

//

//liseten
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
