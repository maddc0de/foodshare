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

};

module.exports = DonationsController;


