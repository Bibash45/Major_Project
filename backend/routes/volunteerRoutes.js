const express = require("express");
const { postVolunteer } = require("../controllers/volunteerController");

const router = express.Router();

// Submit Volunteer
router.post("/volunteer", postVolunteer);

module.exports = router;
