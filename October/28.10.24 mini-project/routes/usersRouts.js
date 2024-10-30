import express from "express";
import fs from "fs";
import path from "path";
import users from "../DB/users.json" assert { type: "json" };

const router = express.Router();

router.get("/", (req, res) => {
  res.send("page-users");
});

router.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * users.length);
  const randomUsers = users[randomIndex].name;
  res.send(randomUsers);
});

router.post("/create", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  fs.writeFile(
    path.join("DB", "users.json"),
    JSON.stringify(users, null, 2),
    "utf8",
    (err) => {
      if (err) {
        return res.status(500).send({ error: "Failed to write to the file" });
      }
      res.send({ message: "user added", user: newUser });
    }
  );
});

router.get("/:id", (req, res) => {
  const id = +req.params["id"];
  const resData = users.find((current) => current.id === id);
  if (resData) {
    res.send(resData);
  } else {
    res.send({ error: "Error" });
  }
});

router.patch("/update/:id", (req, res) => {
  const newdata = req.body;
  const id = +req.params["id"];

  fs.readFile(path.join("DB", "users.json"), "utf8", (err, data) => {
    if (err) {
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

router.delete("/delete/:id", (req, res) => {
  const id = +req.params["id"];

  fs.readFile(path.join("DB", "users.json"), "utf8", (err, data) => {
    if (err) {
      return res.status(500).send({ error: "Failed to read the file" });
    }

    const users = JSON.parse(data);
    const updateUsers = users.filter((user) => user.id !== id);

    if (updateUsers.length === users.length) {
      return res.status(404).send({ error: "user not found" });
    }

    fs.writeFile(
      path.join("DB", "users.json"),
      JSON.stringify(updateUsers, null, 2),
      "utf8",
      (err) => {
        if (err) {
          return res.status(500).send({ error: "Failed to write to the file" });
        }
        res.send({ message: "user deleted successfully" });
      }
    );
  });
});

export default router;

// import express from "express"
// import fs from "fs"
// import users from "../DB/users.json" with { type: "json" }

// const router = express.Router();

// //user app
// router.get("/api/user/random", (req, res) => {
//   const randomIndex = Math.floor(Math.random() * users.length);
//   const randomUsers = users[randomIndex].name;

//   res.send(randomUsers);
// });

// router.post("/api/users/create", (req, res) => {
//   const newUser = req.body;
//   jokes.push(newUser);
//   res.send({ massege: "user added", user: newUser });
// });

// router.get("/api/users/:id", (req, res) => {
//   const id = +req.params["id"];
//   const resData = users.find((current) => {
//     return current.id === id;
//   });
//   if (resData) {
//     res.send(resData);
//   } else {
//     res.send({ error: "Error" });
//   }
// });

// router.patch("/api/users/:id", (req, res) => {
//   const newdata = req.body;
//   const id = +req.params["id"];

//   fs.readFile(path.join("DB", "users.json"), "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send({ error: "Failed to read the file" });
//     }

//     const users = JSON.parse(data);
//     const indexData = users.findIndex((user) => user.id === id);

//     if (indexData !== -1) {
//       users[indexData] = { ...users[indexData], ...newdata };

//       fs.writeFile(
//         path.join("DB", "users.json"),
//         JSON.stringify(users, null, 2),
//         "utf8",
//         (err) => {
//           if (err) {
//             console.log(err);
//             return res
//               .status(500)
//               .send({ error: "Failed to write to the file" });
//           }
//           res.send(users[indexData]);
//         }
//       );
//     } else {
//       res.status(404).send({ error: "user not found" });
//     }
//   });
// });

// router.delete("/api/users/:id", (req, res) => {
//   // {
//   //   "id": 10,
//   //   "name": "Lea Kaplan",
//   //   "email": "lea@example.com",
//   //   "age": 31
//   // }

//   const id = +req.params["id"];

//   fs.readFile(path.join("DB", "users.json"), "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send({ error: "Failed to read the file" });
//     }

//     const users = JSON.parse(data);
//     console.log(users);
//     const updateUsers = users.filter((user) => user.id !== id);
//     console.log(updateUsers);

//     if (updateUsers.length === users.length) {
//       return res.status(404).send({ error: "user not found" });
//     }

//     fs.writeFile(
//       path.join("DB", "users.json"),
//       JSON.stringify(updateUsers, null, 2),
//       "utf8",
//       (err) => {
//         if (err) {
//           console.log(err);
//           return res.status(500).send({ error: "Failed to write to the file" });
//         }
//         res.send({ message: "user deleted successfully" });
//       }
//     );
//   });
// });

// export default router;
