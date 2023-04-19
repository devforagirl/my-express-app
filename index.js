const express = require("express");
const mongoose = require("mongoose");

// Replace the MongoDB URI with your own
const MONGODB_URI =
  "mongodb+srv://dowoyo:sdhfsdfhksdasd@clusterasdasdfds.asdasd.mongodb.net/Clusterfdsfsdfsdf?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Create an Express app
const app = express();

// Define a route
app.get("/", (req, res) => {
  console.log('req.query:', req.query);
  res.send("Hello, world!");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
