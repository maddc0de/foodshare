const mongoose = require("mongoose");

require("../mongodb_helper");
const User = require("../../models/user");

describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  describe('signing up as a Hero', () => {
    it("has all the fields filled in", () => {
      const user = new User({
        name: 'testHeroName',
        email: "someone@example.com",
        password: "password",
        usertype: "Hero",
        location: "London",
        description: "HI"
      });

      expect(user.name).toEqual("testHeroName");
      expect(user.email).toEqual("someone@example.com");
      expect(user.password).toEqual("password");
      expect(user.usertype).toEqual("Hero");
      expect(user.location).toEqual("London");
      expect(user.description).toEqual("HI");
    });

  })

  describe('signing up as a Rescuer', () => {
    it("has all the fields filled in", () => {
      const user = new User({
        name: 'testRescuerName',
        email: "someone2@example.com",
        password: "password",
        usertype: "Rescuer",
      });

      expect(user.name).toEqual("testRescuerName");
      expect(user.email).toEqual("someone2@example.com");
      expect(user.password).toEqual("password");
      expect(user.usertype).toEqual("Rescuer");
    });

  })

});

