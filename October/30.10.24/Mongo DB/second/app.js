import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/login", (req, res) => {
  res.send("login page");
});

app.get("/data", (req, res) => {
  res.send("data page");
});

app.listen(PORT, () => {
  console.log(`you run on port${PORT}`);
});
