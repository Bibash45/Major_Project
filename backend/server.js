const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const path = require("path");
const dotenv = require("dotenv");

// importing routes
const userRoutes = require("./routes/userRoutes");
const donationRoutes = require("./routes/donationRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// connect to MongoDB
connectDB();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
  })
);

// Use  routes
app.use("/api", userRoutes);
app.use("/api", donationRoutes);
app.use("/api", volunteerRoutes);

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
