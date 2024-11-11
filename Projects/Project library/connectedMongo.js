import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDB = () => {
  const uri = process.env.DB_ULI;
  mongoose
    .connect(uri)
    .then(() => {
      console.log("connected to mongoDB server");
    })
    .catch((error) => {
      console.error("Connection error:", error);
    });
};

export default connectToDB;
