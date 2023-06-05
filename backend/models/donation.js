const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  food_heroes_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  description: { type: String, required: true },
  status: { type: String, default: "available" },
  code: { type: String, default: generateCode, unique: true }
});

function generateCode() {
  const digits = "0123456789";
  let code = "";
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    code += digits[randomIndex];
  }
  return code;
}

const Donation = mongoose.model("Donation", DonationSchema);

module.exports = Donation;