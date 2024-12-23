const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const Message = require("./messageModel.js");

const app = express();
const server = http.createServer(app);
const PORT = 3000;

app.use(express.json());
app.use(cors());

const io = socketIO(server, {
  cors: { origin: "http://localhost:5173" },
});

mongoose
  .connect(process.env.DB_MONGO_KEY)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

app.post("/add", async (req, res) => {
  try {
    const { room, username, message } = req.body;
    const newMessage = new Message({
      room,
      username,
      message,
    });
    const savedMessage = await newMessage.save();
    console.log(savedMessage);
    res.status(201).send({
      message: "Message added successfully",
      data: savedMessage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Failed to add message",
      error: error.message,
    });
  }
});

app.get("/messages/:room", async (req, res) => {
  const room = req.params.room;
  try {
    const messages = await Message.find({ room: room });
    res.status(200).send({
      message: "Messages retrieved successfully",
      data: messages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Failed to retrieve messages",
      error: error.message,
    });
  }
});

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);

  socket.on("join_chat", (username, room) => {
    socket.username = username;
    socket.join(room);
    socket.to(room).emit("message", {
      username: "system",
      message: `${socket.username} has joined the chat`,
    });
  });

  socket.on("send_message", (newMessage) => {
    const { room } = newMessage;
    socket.to(room).emit("message", newMessage);
  });

  socket.on("user_write", (username, room) => {
    socket.to(room).emit("user_write", username);
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });

  socket.emit("welcome", { message: "Welcome to the chat server!" });
});

app.get("/", (req, res) => {
  res.send("Hello");
});

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
