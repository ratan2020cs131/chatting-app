import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 40,
  },
  countryCode: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 5,
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 40,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 128,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
