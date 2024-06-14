const express = require("express");
const db = require("./db/config");
const route = require("./controllers/route");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5001;
require("dotenv").config();
const fs = require("fs");
const path = require("path");

//Setup Express App
const app = express();
// Middleware
app.use(bodyParser.json());
// Set up CORS
app.use(cors());
//API Routes
app.use("/api", route);

app.get("/", async (req, res) => {
  res.send("Welcome to my world...");
});

// Get port from environment and store in Express.

const server = app.listen(port, () => {
  const protocol =
    process.env.HTTPS === true || process.env.NODE_ENV === "production"
      ? "https"
      : "http";
  const { address, port } = server.address();
  const host = address === "::" ? "192.168.56.202" : address;
  console.log(`Express Server listening at ${protocol}://${host}:${port}/`);
  //   console.log(`Express Server listening on port ${port}`);
});

// Connect to MongoDB
const DATABASE_URL = process.env.DB_URL;
db(DATABASE_URL);
