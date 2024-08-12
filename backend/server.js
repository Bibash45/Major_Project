import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/userRoutes.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// connect to MongoDB
connectDB();

app.use(express.json());
app.use(cors()); // Allow all origins by default
app.use(
  cors({
    origin: "http://localhost:5173", //Frontend URL
  })
);
// Allow cross-origin requests

// Use the user routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
