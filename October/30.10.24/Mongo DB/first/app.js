// Import the MongoClient from the mongodb package
import { MongoClient } from "mongodb";

// Function to check MongoDB connection
async function checkMongoDB() {
  const url = "mongodb://localhost:27017"; // Update the connection string if necessary
  const client = new MongoClient(url);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected successfully to MongoDB");

    // Attempt to list databases
    const databases = await client.db().admin().listDatabases();
    console.log("Databases:");
    databases.databases.forEach((db) => {
      console.log(` - ${db.name}`);
    });
  } catch (error) {
    console.error("Could not connect to MongoDB:", error.message);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Run the check
checkMongoDB();
