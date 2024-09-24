const Donation = require("../models/Donation");

exports.postDonation = async (req, res) => {
  try {
    const newDonation = new Donation(req.body);
    await newDonation.save();
    res
      .status(201)
      .json({
        message: "Donation submitted successfully!",
        donation: newDonation,
      });
  } catch (error) {
    res
      .status(400)
      .send({ error: "Error submitting donation. Please try again." });
  }
};
