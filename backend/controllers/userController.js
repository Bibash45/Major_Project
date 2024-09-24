const User = require("../models/User");

const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// Nodemailer transporter configuration (using Mailtrap for testing)
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "5202a2556f256c", // Replace with your actual Mailtrap username
    pass: "53994e16a07dd0", // Replace with your actual Mailtrap password
  },
});

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return res.status(400).json({
        error: "Email is taken",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { name, email, password },
      process.env.JWT_ACCOUNT_ACTIVATION,
      { expiresIn: "7d" }
    );

    // Email data
    const mailOptions = {
      from: "bibashcdry46@gmail.com",
      to: email,
      subject: "Account activation link ✔",
      text: "Hello world?",
      html: `
        <h1>Please use the following link to activate your account</h1>
        <a href="${process.env.CLIENT_URL}/activate/${token}">${process.env.CLIENT_URL}/activate/${token}</a>
        <hr />
        <p>This email may contain sensitive information</p>
        <p>${process.env.CLIENT_URL}</p>
      `,
    };

    // Send email using Nodemailer
    await transporter.sendMail(mailOptions);

    return res.json({
      message: `Email has been sent to ${email}. Follow the instructions to activate your account`,
    });
  } catch (err) {
    console.log("SIGNUP EMAIL ERROR", err);
    return res.status(400).json({
      message: err.message,
    });
  }
};

// signin
exports.signin = async (req, res) => {
  const { email, password } = req.body;
  // check if user exist
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      error: "User not found",
    });
  }
  // authenticate
  if (!user.authenticate(password)) {
    return res.status(400).json({
      error: "Email and password do not match",
    });
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return res.json({
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
};

// activation account
exports.accountActivation = async (req, res) => {
  const { token } = req.body;

  if (token) {
    try {
      const decoded = await new Promise((resolve, reject) => {
        jwt.verify(
          token,
          process.env.JWT_ACCOUNT_ACTIVATION,
          (err, decoded) => {
            if (err) reject(err);
            else resolve(decoded);
          }
        );
      });

      const { name, email, password } = decoded;
      const user = new User({ name, email, password });

      await user.save();

      // Generate a new JWT for the user (for future actions)
      const newToken = jwt.sign(
        { _id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" } // Token valid for 7 days
      );

      return res.json({
        message: "Signup success. Please signin.",
        token: newToken, // Return the new token
        user: { name: user.name, email: user.email }, // Return user data
      });
    } catch (err) {
      console.log("JWT VERIFY IN ACCOUNT ACTIVATION ERROR", err);
      return res.status(401).json({
        error: "Expired link. Signup again",
      });
    }
  } else {
    return res.json({
      message: "Something went wrong. Try again.",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Prepare updated user data
    const updatedUserData = {
      name: req.body.name,
      email: req.body.email,
      bio: req.body.bio,
    };

    // Only add profileImage if it exists
    if (req.file) {
      updatedUserData.profileImage = req.file.path;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating profile:", error); // Log the error for debugging
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// forgot password controller
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  console.log(email);

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        error: "User with this email does not exist",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { _id: user._id, name: user.name },
      process.env.JWT_RESET_PASSWORD,
      {
        expiresIn: "10m",
      }
    );

    await user.updateOne({ resetPasswordLink: token });

    // Email data
    const mailOptions = {
      from: "bibashcdry46@gmail.com",
      to: email,
      subject: "Reset your password ✔",
      text: `Hello world? --- ${token}`,
      html: `
        <h1>Please use the following link to reset your password</h1>
        <a href="${process.env.CLIENT_URL}/reset/${token}">${process.env.CLIENT_URL}/reset/${token}</a>
        <hr />
        <p>This email may contain sensitive information</p>
        <p>${process.env.CLIENT_URL}</p>
      `,
    };

    // Send email using Nodemailer
    await transporter.sendMail(mailOptions);

    return res.json({
      message: `Email has been sent to ${email}. Follow the instructions to reset your password.`,
    });
  } catch (err) {
    console.log("FORGOT PASSWORD ERROR", err);
    return res.status(400).json({
      error: "An error occurred while processing your request.",
    });
  }
};

// reset password controller
exports.resetPassword = async (req, res) => {
  console.log(req.body);

  const { resetPasswordLink, newPassword } = req.body;

  if (resetPasswordLink) {
    try {
      const decoded = jwt.verify(
        resetPasswordLink,
        process.env.JWT_RESET_PASSWORD
      );
      if (!decoded) {
        return res.status(400).json({
          error: "Invalid reset password link",
        });
      }

      let user = await User.findOne({ resetPasswordLink });
      if (!user) {
        return res.status(400).json({
          error: "Invalid link",
        });
      }

      user.password = newPassword;
      user.resetPasswordLink = "";
      await user.save();

      return res.json({
        message: "Password has been updated",
      });
    } catch (err) {
      console.log("RESET PASSWORD ERROR", err);
      return res.status(400).json({
        error: "Expired link. Try again",
      });
    }
  } else {
    return res.status(400).json({
      error: "No link provided",
    });
  }
};
