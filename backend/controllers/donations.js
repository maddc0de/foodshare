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
      const donations = await Donation.find({ foodHeroId: foodHeroId })
        .exec();
      const token = await TokenGenerator.jsonwebtoken(req.foodHeroId);
      donations.sort((a, b) => a.expiryDate - b.expiryDate); // sort donations to closest expiry date first
      res.status(200).json({ donations: donations, token: token });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  GetAllDonations: async (req, res) => {
    try {
      const donations = await Donation.find();
      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res.status(200).json({ donations });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  CollectDonation: async (req, res) => {
    try {
      const foodRescuerId = req.params.foodRescuerId;
      const update = req.body;
      const updatedDonation = await Donation.findOneAndUpdate({ _id: req.body.donationId }, { $set: update }, { new: true });
      const token = await TokenGenerator.jsonwebtoken(req.params.foodRescuerId);
      res.json({ token, updatedDonation })
    } catch (err) {
      res.status(500).json({error: "messed up again!"})
    }
  },
};

module.exports = DonationsController;
