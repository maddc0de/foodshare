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
      console.log(foodRescuerId)
      const update = req.body;
      console.log(update)
      const updatedDonation = await Donation.findOneAndUpdate({ _id: donationId }, { $set: update }, { new: true });
      console.log(updatedDonation);
      const token = await TokenGenerator.jsonwebtoken(foodRescuerId);
      res.json({ token, updatedDonation })
    } catch (err) {
      res.status(500).json({error: "messed up again!"})
    }
  },

  // CollectDonation: async (req, res) => {
  //   try {
  //     const { donationId } = req.params;
  //     // // const donation = new Donation(req.body);
  //     const donation = Donation//.find({_id: donationId});

  //     await donation.findOneAndUpdate(
  //       { _id: donationId},
  //          req.body,
  //           function(err, result){
  //           res.status(200).json(
  //               (err === null) ? {donation} : {msg: err}
  //           );
  //          });

  //     // res.status(200).json({ donation });
  //   } catch (err) {
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
  // },
};

module.exports = DonationsController;
