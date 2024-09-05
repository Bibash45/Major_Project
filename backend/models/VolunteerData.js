import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  phone: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Volunteer = mongoose.model("Volunteer", VolunteerSchema);

export default Volunteer;
