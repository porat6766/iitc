const bcrypt = require("bcrypt");

const hashKey = "dfghjkl45678yutdfguy8fghjkl78654rtghj";

async function hashPassword(password) {
  try {
    const hash = await bcrypt.hash(password + hashKey, 10);
    console.log("Hashed Password:", hash);
    return hash;
  } catch (err) {
    console.error("Error hashing password:", err);
  }
}

module.exports = { hashPassword };
