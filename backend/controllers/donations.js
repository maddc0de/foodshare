const Donation = require("../models/donation");
const TokenGenerator = require("../models/token_generator");

const DonationsController = {  
  Create: (req, res) => {
    const donation = new Donation(req.body);
    donation.save(async (err) => {
      if (err) {
        throw err;
      }

      const token = TokenGenerator.jsonwebtoken(req.user_id);
      res.status(201).json({ message: "OK", token: token });
    });
  },

  GetDonationsByDonator: async (req, res) => {
    try {
      const { foodHeroId } = req.params;
      const donations = await Donation.find({ food_heroes_id: foodHeroId })
        .sort({ dateCreated: -1 })
        .exec();
      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res.status(200).json({ donations: donations, token: token });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  GetAllDonations: async (req, res) => {
  try {
    const donations = await Donation.find().exec();
    const token = await TokenGenerator.jsonwebtoken(req.user_id);
    res.status(200).json({ donations });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
},

};

module.exports = DonationsController;


