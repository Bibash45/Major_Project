const express = require("express");
const {
  updateUser,
  getUserData,
  signin,
  signup,
  accountActivation,
  resetPassword,
  forgotPassword,
} = require("../controllers/userController");
const upload = require("../middleware/fileUpload");
const {
  userSignupValidator,
  userSigninValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../validators/auth");
const { runValidation } = require("../validators/index");

const router = express.Router();
const JWT_SECRET = "your_jwt_secret_key"; // Replace with your actual secret key

// Register
router.post("/register", userSignupValidator, runValidation, signup);

// Login
router.post("/login", userSigninValidator, runValidation, signin);

// activate account
router.post("/account-activation", accountActivation);
2;

// updating user
router.put("/users/:id", upload.single("profileImage"), updateUser);

// Route to get user profile
router.get("/users/:id", getUserData);

// forget  password
router.put(
  "/forgot-password",
  forgotPasswordValidator,
  runValidation,
  forgotPassword
);

// reset password
router.put(
  "/reset-password",
  resetPasswordValidator,
  runValidation,
  resetPassword
),
  // Export router
  (module.exports = router);
