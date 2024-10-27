const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  makeLogDate();
  res.send("api active");
});

const dateLog = `Client entry time: ${new Date().toLocaleTimeString()}\n`;

const makeLogDate = fs.appendFile("logs.txt", dateLog, (err) => {
  if (err) {
    console.error("Error writing to log file:", err);
    return;
  }
  console.log("Log entry added successfully.");
});

app.listen(3000, () => {
  console.log("the server on localost 3000");
});
