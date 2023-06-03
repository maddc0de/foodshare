const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const Donation = require('../../models/donation');
const User = require('../../models/user');
const JWT = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

let token;
let user;

describe("/donations", () => {
  beforeAll(async () => {
    user = new User({
      name: 'testHeroName',
      email: "someone@example.com",
      password: "password",
      usertype: "Hero",
      location: "London",
      description: "HI"
    });
    await user.save();

    token = JWT.sign({
      user_id: user.id,
      // Backdate this token of 5 minutes
      iat: Math.floor(Date.now() / 1000) - (5 * 60),
      // Set the JWT token to expire in 10 minutes
      exp: Math.floor(Date.now() / 1000) + (10 * 60)
    }, secret);
  });

  beforeEach(async () => {
    await Donation.deleteMany({});
  })

  afterAll( async () => {
    await User.deleteMany({});
    await Donation.deleteMany({});
  })

  describe("POST, when token is present", () => {
    test("responds with a 201", async () => {
      let response = await request(app)
        .post("/donations")
        .set("Authorization", `Bearer ${token}`)
        .send({ food_heroes_id: user.id, description: "food test", token: token });
      expect(response.status).toEqual(201);
    });

    test("creates a new donation", async () => {
      await request(app)
        .post("/donations")
        .set("Authorization", `Bearer ${token}`)
        .send({ food_heroes_id: user.id, description: "food test", token: token });
      let donations = await Donation.find();
      expect(donations.length).toEqual(1);
      expect(donations[0].description).toEqual("food test");
    });

    test("returns a new token", async () => {
      let response = await request(app)
        .post("/donations")
        .set("Authorization", `Bearer ${token}`)
        .send({ food_heroes_id: user.id, description: "food test", token: token })
      let newPayload = JWT.decode(response.body.token, process.env.JWT_SECRET);
      let originalPayload = JWT.decode(token, process.env.JWT_SECRET);
      expect(newPayload.iat > originalPayload.iat).toEqual(true);
    });
  });

});
