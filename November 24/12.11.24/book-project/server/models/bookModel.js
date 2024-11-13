const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

bookSchema.virtual("full-data").get(function () {
  return `book name: ${this.bookName} price: ${this.price} year: ${this.year}`;
});

module.exports = mongoose.model("Book", bookSchema);
