const express = require("express");
const router = express.Router();

const DonationsController = require("../controllers/donations");

router.post("/", DonationsController.Create);
<<<<<<< HEAD
=======
router.get("/:foodHeroId", DonationsController.GetDonationsByDonator);
>>>>>>> 161ec99abe8454488bfd9e0bab9d212094b23792

module.exports = router;
