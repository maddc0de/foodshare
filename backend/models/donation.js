const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  foodHeroId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  foodHeroName: { type: String },
  description: { type: String, required: true },
  expiryDate: { type: Date, required: true },
  status: { type: String, default: "available" },
  code: { type: String, default: generateCode, unique: true },
  foodRescuerName: { type: String },
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