import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: true,
  },
  punchLine: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("jokes", postSchema);
