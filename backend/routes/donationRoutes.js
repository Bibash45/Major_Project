const express = require("express");
const { postDonation } = require("../controllers/donationController");

const router = express.Router();

// Submit Donation
router.post("/donations", postDonation);

module.exports = router;
