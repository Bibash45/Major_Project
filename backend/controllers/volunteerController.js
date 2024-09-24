const Volunteer = require("../models/Volunteer");

exports.postVolunteer = async (req, res) => {
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
};
