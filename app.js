const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./configs/db");

const app = express();

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Set up your routes
app.use('/', require('./routes/packageRoute'));
app.use('/', require('./routes/hotelRoute'));
app.use('/', require('./routes/offerRoute'));

const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});