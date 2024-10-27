const fs = require("fs");

fs.readFile("input.TEXT", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  fs.writeFile("out-put.text", data, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("the file has been created");

    fs.appendFile("out-put.text", "\n you are update", (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("the file has been updated");
    });
  });
});
