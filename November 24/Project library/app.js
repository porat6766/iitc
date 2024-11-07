import express from "express";
import morgan from "morgan";
import connectToDB from "./connectedMongo.js";
import dotenv from "dotenv";
import Book from "./models/BookModel.js";
import Author from "./models/AuthorModel.js";
import review from "./models/ReviewModel.js";
import { books, authors, reviews } from "./seedData.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB();

app.use(morgan("short"));
app.use(express.json());

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.DB_ULI);

    await Author.insertMany(authors);
    const authorDocs = await Author.find();

    books.forEach((book) => {
      const author = authorDocs.find((a) => a.name === book.author);
      book.author = author._id;
    });

    const bookDocs = await Book.insertMany(books);
    console.log("Books seeded successfully!");

    const reviewsWithBookIds = reviews.map((review) => {
      const book = bookDocs.find((b) => b.title === review.book);
      return {
        ...review,
        book: book._id,
      };
    });

    await review.insertMany(reviewsWithBookIds);
    console.log("Reviews seeded successfully!");

    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seedDatabase();

// const reviews = [
//   {
//     rating: 5,
//     comment: "A masterpiece! Highly recommend.",
//     book: "64b6a7a56c1e2568cdb8e05d",
//   },
// ];

// const createReviews = async () => {
//   try {
//     await connectToDB();
//     await review.insertMany(reviews);
//     console.log("Reviews added successfully!");
//   } catch (error) {
//     console.error("Error adding reviews:", error);
//   } finally {
//     // שים כאן את החיבור לסגירה רק לאחר כל הפעולות
//   }
// };
// createReviews();

const foundBook = await Book.findOne({ title: `The Great Gatsby` });
console.log(foundBook.fullKeysAuthor);

// const booksO = await Book.find().populate("review");
// console.log(booksO);

app.get("/", (req, res) => {
  res.send("Home-page-library");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
