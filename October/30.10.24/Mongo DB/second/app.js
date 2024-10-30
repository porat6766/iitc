import express from "express";
import { secret } from "./secret.js";
import mongoose from "mongoose";
import jokeToMongo from "./models/jokes.js";
const PORT = 3000;

const app = express();

const uri = `mongodb+srv://porat850:${secret.mongodb_key}@cluster0.osyms.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
app.use(express.json());

//////////////short wat to connect mong
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected mongoDBserver");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });

//////////////long wat to connect mong

// import { MongoClient, ServerApiVersion } from "mongodb";
// const uri =
//   "mongodb+srv://porat850:Sb3ui09nZKORljrt@cluster0.osyms.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

//////////////

app.get("/", (req, res) => {
  res.send({
    massege: "Home page",
  });
});

app.get("/login", (req, res) => {
  res.send("login page");
});

app.get("/data", (req, res) => {
  res.send("data page");
});

app.post("/api/joke/create", (req, res) => {
  const newJoke = new jokeToMongo({
    title: req.body.title,
    content: req.body.content,
  });

  newJoke
    .save()
    .then(() => res.send("Good job!!!"))
    .catch((error) => {
      console.error("Error saving joke:", error);
      res.status(500).send("Internal Server Error");
    });
});

app.get("/api/jokes", (req, res) => {
  jokeToMongo
    .find()
    .then((jokes) => {
      res.json(jokes);
    })
    .catch(() => {
      console.error("Error retrieving jokes:", error);
      res.status(500).send("Internal Server Error");
    });
});

app.get("/api/joke/:id", (req, res) => {
  const id = req.params.id;
  jokeToMongo.findById(id).then((joke) => {
    if (!joke) {
      return res.status(404).send("Joke not found");
    } else {
      res.json(joke);
    }
  });
});

app.listen(PORT, () => {
  console.log(`you run on port${PORT}`);
});
