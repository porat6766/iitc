// const userValidator = (req, res, next) => {
//   const { username, email, password, age } = req.body;

//   if (!username || typeof username !== "string") {
//     return res
//       .status(400)
//       .send({ message: "Missing or invalid 'username' field" });
//   }
//   if (!email || typeof email !== "string" || !/.+\@.+\..+/.test(email)) {
//     return res
//       .status(400)
//       .send({ message: "Missing or invalid 'email' field" });
//   }
//   if (!password || typeof password !== "string" || password.length < 6) {
//     return res.status(400).send({
//       message:
//         "Missing or invalid 'password' field (must be at least 6 characters)",
//     });
//   }
//   if (age === undefined || typeof age !== "number" || age < 0) {
//     return res.status(400).send({
//       message: "Missing or invalid 'age' field (must be a non-negative number)",
//     });
//   }

//   next();
// };

// export default userValidator;
