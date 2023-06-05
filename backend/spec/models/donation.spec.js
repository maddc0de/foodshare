const mongoose = require("mongoose");

require("../mongodb_helper");
const Donation = require("../../models/donation");

describe("Donation model", () => {
  it("has all the fields filled in", () => {
    const foodHeroesId = mongoose.Types.ObjectId();

    const donation = new Donation({
      food_heroes_id: foodHeroesId,
      description: 'food test',
      status: 'available'
    });

    expect(donation.food_heroes_id).toEqual(foodHeroesId);
    expect(donation.description).toEqual('food test');
    expect(donation.status).toEqual('available');
  });
})