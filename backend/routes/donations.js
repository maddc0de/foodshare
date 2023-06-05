const express = require("express");
const router = express.Router();

const DonationsController = require("../controllers/donations");

router.post("/", DonationsController.Create);
router.get("/:foodHeroId", DonationsController.GetDonationsByDonator);
router.get("/", DonationsController.GetAllDonations);



module.exports = router;

