//imports to folders and js
import { math } from "./Utils/math.js";
import express from "express";
import fs from "fs";
//set app
const app = express();

//function to print time log
const makeLogDate = () => {
  const dateLog = `Client entry time: ${new Date().toLocaleTimeString()}\n`;
  console.log(math.add(2, 3));
  fs.appendFile("logs.txt", dateLog, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
      return;
    }
    console.log("Log entry added successfully.");
  });
};

//req get
app.get("/", (req, res) => {
  makeLogDate();
  res.send("api active");
});

//the listen url to PORT
app.listen(3000, () => {
  console.log("the server on localost 3000");
});
