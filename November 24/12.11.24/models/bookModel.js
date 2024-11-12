const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual("full-data").get(function () {
  return `book name: ${this.bookName} price: ${this.price} year: ${this.year}`;
});

module.exports = mongoose.model("User", userSchema);