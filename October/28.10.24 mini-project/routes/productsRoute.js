import express from "express";
import fs from "fs";
import path from "path";
import products from "../DB/products.json" assert { type: "json" };

const router = express.Router();

router.get("/", (req, res) => {
  res.send("page-product");
});

//product app
router.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * products.length);
  const randomProduct = products[randomIndex].name;

  res.send(randomProduct);
});
router.post("/create", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.send({ massege: "product added", user: newProduct });
});

router.get("/:id", (req, res) => {
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

router.patch("/update/:id", (req, res) => {
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

router.delete("/delete/:id", (req, res) => {
  // {
  //   "id": 10,
  //   "name": "Air Purifier",
  //   "price": 199.99,
  //   "category": "Home Appliances",
  //   "inStock": true
  // }
  const id = +req.params["id"];

  fs.readFile(path.join("DB", "products.json"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ error: "Failed to read the file" });
    }

    const products = JSON.parse(data);
    const updateProducts = products.filter((product) => product.id !== id);

    if (updateProducts.length === products.length) {
      return res.status(404).send({ error: "Product not found" });
    }

    fs.writeFile(
      path.join("DB", "products.json"),
      JSON.stringify(updateProducts, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send({ error: "Failed to write to the file" });
        }
        res.send({ message: "Product deleted successfully" });
      }
    );
  });
});

export default router;
