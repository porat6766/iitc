// import express from "express";
// import morgan from "morgan";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";

// import userRoutes from "./routes/userRoutes.js";
// import businessRoutes from "./routes/businessRoutes.js";

// dotenv.config();

// mongoose.connect(process.env.URI).then(() => {
//   console.log("Connected to MongoDB");
// });

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use(morgan("tiny"));
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// app.get("/api/status", (req, res) => {
//   res.send({ status: "S  erver is running" });
// });

// app.use("/api/user", userRoutes);
// app.use("/api/businesses", businessRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";

import userRoutes from "./routes/userRoutes.js";
import businessRoutes from "./routes/businessRoutes.js";

dotenv.config();

mongoose.connect(process.env.URI).then(() => {
  console.log("Connected to MongoDB");
});

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("tiny"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/api/status", (req, res) => {
  res.send({ status: "Server is running" });
});

app.use("/api/user", userRoutes);
app.use("/api/businesses", businessRoutes);

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("joinBusinessRoom", (businessId) => {
    socket.join(businessId);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
