const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  food_heroes_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  description: { type: String, required: true },
  status: { type: String, default: "available" },
});

const Donation = mongoose.model("Donation", DonationSchema);

module.exports = Donation;