const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    usertype: { type: String, required: true },
    location: { type: String },
    description: { type: String }
  },
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
