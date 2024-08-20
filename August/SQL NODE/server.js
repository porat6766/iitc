// const express = require("express");
// const sql = require("mssql");
// require("dotenv").config();

// const app = express();
// const port = 3000;

// // Database configuration
// const dbConfig = {
//   server: process.env.DB_SERVER,
//   database: process.env.DB_DATABASE,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000,
//   },
//   options: {
//     trustServerCertificate: true, // Bypass SSL certificate validation
//     trustedConnection: true,
//     connectTimeout: 30000, // Increase connection timeout to 30 seconds
//   },
// };

// // Route to get data
// app.get("/data", async (req, res) => {
//   try {
//     sql
//       .connect(dbConfig)
//       .then(() => {
//         console.log("Connected successfully!");
//       })
//       .catch((err) => {
//         console.error("Connection failed:", err);
//       });

//     // Query the database
//     const result = await sql.query("SELECT * FROM ExOrders");

//     // Send the results as JSON
//     res.json(result.recordset);
//   } catch (err) {
//     console.error("SQL error", err);
//     res.status(500).send("Server Error");
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const express = require("express");
const sql = require("mssql");
require("dotenv").config();

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Database configuration
const dbConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT, 10), // Make sure to parse the port as an integer
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    trustServerCertificate: true, // Bypass SSL certificate validation
    trustedConnection: false, // Use SQL Server authentication
    connectTimeout: 30000, // Increase connection timeout to 30 seconds
  },
};

// Route to get data
app.post("/data", async (req, res) => {
  const { input_code } = req.body; // Extract input_code from the request body

  try {
    // Connect to the database
    await sql.connect(dbConfig);

    // Query the database using a stored procedure
    const result = await sql
      .request()
      .input("input_code", sql.Int, input_code) // Pass input_code as an integer parameter
      .execute("allDetailsPerCodeItem"); // Call the stored procedure

    // Send the results as JSON
    res.json(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
    res.status(500).send("Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
