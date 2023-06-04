const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  food_heroes_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  description: { type: String, required: true },
  status: { type: String, default: "available" },
  food_hero_location: { type: String, required: true },
  expire: { type: String, required: true },
  code: { type: String, required: true },
});

const Donation = mongoose.model("Donation", DonationSchema);

module.exports = Donation;