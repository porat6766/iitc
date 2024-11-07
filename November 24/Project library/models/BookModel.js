import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  publishedDate: { type: Date },
  genre: { type: String },
  averageRating: { type: Number },
});

bookSchema.virtual("fullKeysAuthor").get(function () {
  return `${this.title} by ${this.author}`;
});

bookSchema.virtual("reviewCount", {
  ref: "Review",
  localField: "_id",
  foreignField: "book",
  count: true,
});

bookSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "book",
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
