// const productValidator = (req, res, next) => {
//   const { name, price, category, inStock, description } = req.body;

//   if (!name || typeof name !== "string") {
//     return res.status(400).send({ message: "Missing or invalid 'name' field" });
//   }
//   if (price === undefined || typeof price !== "number") {
//     return res
//       .status(400)
//       .send({ message: "Missing or invalid 'price' field" });
//   }
//   if (!category || typeof category !== "string") {
//     return res
//       .status(400)
//       .send({ message: "Missing or invalid 'category' field" });
//   }
//   if (inStock === undefined || typeof inStock !== "boolean") {
//     return res
//       .status(400)
//       .send({ message: "Missing or invalid 'inStock' field" });
//   }
//   if (!description || typeof description !== "string") {
//     return res
//       .status(400)
//       .send({ message: "Missing or invalid 'description' field" });
//   }

//   next();
// };

// export default productValidator;
