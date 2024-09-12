import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String, default: "Images/default.jpg" },  // Stores the URL of the profile image
  bio: { type: String, default: "" },           // Stores a short biography of the user
});

const User = mongoose.model('User', userSchema);
export default User;
