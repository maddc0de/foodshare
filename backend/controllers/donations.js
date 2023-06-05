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

<<<<<<< HEAD
=======
  GetDonationsByDonator: async (req, res) => {
    try {
      const { foodHeroId } = req.params;
      const donations = await Donation.find({ food_heroes_id: foodHeroId })
        .sort({ dateCreated: -1 })
        .exec();
      const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res.status(200).json({ donations });
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

>>>>>>> 161ec99abe8454488bfd9e0bab9d212094b23792
};

module.exports = DonationsController;


