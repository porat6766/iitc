const { log } = require("console");
const fs = require("fs");

const dataInput = fs.readFile("input.text", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);

  fs.writeFile("get-info.text", data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file create");
  });

  fs.appendFile("get-info.text", "\n plese under", "utf8", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("the change sucssed");
  });
});
