import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/userRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// connect to MongoDB
connectDB();

/// static rendering
// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
  })
);

// Use the user routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
