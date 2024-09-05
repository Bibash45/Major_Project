import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Donation from "../models/DonationData.js";
import Volunteer from "../models/VolunteerData.js";
import multer from "multer";
const upload = multer({ dest: 'uploads/' })
const router = express.Router();
const JWT_SECRET = "your_jwt_secret_key"; // Replace with your actual secret key

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ name, email, password: hashedPassword });

    // Save the user to the database
    await user.save();

    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ error: "Name and password are required" });
  }

  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid name or password" });
    }

    // Generate a token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route for editing user profile
router.put("/users/:id",upload.single('profileImage'), async (req, res) => {
  try {
    // console.log(req.file, req.body)
    const userId = req.params.id;
    const { name, email, bio, profileImage } = req.body;

    // Find the user by ID and update their profile
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, bio, profileImage },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Submit Donation
router.post("/donations", async (req, res) => {
  try {
    const newDonation = new Donation(req.body);
    await newDonation.save();
    res.status(201).send({ message: "Donation submitted successfully!" });
  } catch (error) {
    res
      .status(400)
      .send({ error: "Error submitting donation. Please try again." });
  }
});

// Submit Volunteer
router.post("/volunteer", async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email already exists
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(400).send({ message: "Email already exists" });
    }

    // Create a new volunteer if the email is unique
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();

    res.status(201).send({ message: "Volunteer submitted successfully!" });
  } catch (error) {
    res.status(500).send({
      message: "Error submitting volunteer. Please try again.",
    });
  }
});


// Export router
export default router;
