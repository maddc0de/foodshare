const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const User = require('../../models/user')

describe("/users 1", () => {
  beforeEach( async () => {
    await User.deleteMany({});
  });

  afterAll( async () => {
    await User.deleteMany({});
  })

  describe("POST, when all fields are provided", () => {
    test("the response code is 201", async () => {
      let response = await request(app)
        .post("/users")
        .send({name:'testHeroName',email: "someone@example.com", password: "password", usertype: "Hero",location: "London",description: "HI"})
      expect(response.statusCode).toBe(201)
    })

    test("a user is created", async () => {
      await request(app)
        .post("/users")
        .send({name:'testHeroName',email: "someone@example.com", password: "password", usertype: "Hero",location: "London",description: "HI"})
      let users = await User.find()
      let newUser = users[users.length - 1]
      expect(newUser.email).toEqual("someone@example.com")
    })
  })

  describe("POST, when password is missing", () => {
    test("response code is 400", async () => {
      let response = await request(app)
        .post("/users")
        .send({name:'testHeroName',email: "someone@example.com", usertype: "Hero"})
      expect(response.statusCode).toBe(400)
    });

    test("does not create a user", async () => {
      await request(app)
        .post("/users")
        .send({name:'testHeroName',email: "someone@example.com", usertype: "Hero"})
        let users = await User.find()
        expect(users.length).toEqual(0)
    });
  })
  
  describe("POST, when email is missing", () => {
    test("response code is 400", async () => {
      let response = await request(app)
        .post("/users")
        .send({ name:'testHeroName', password: "password", usertype: "Hero" });
      expect(response.statusCode).toBe(400);
    });
  
    test("does not create a user", async () => {
      await request(app)
        .post("/users")
        .send({ name:'testHeroName', password: "password", usertype: "Hero" });
      let users = await User.find();
      expect(users.length).toEqual(0);
    });
  
    test("returns a 409 if email already exists in the database", async () => {
      const user = {
        name: "Tesco",
        email: "tesco@email.com",
        password: "password",
        usertype: "Hero",
      };

      const existingUser = new User(user);
      await existingUser.save();
      
      let response = await request(app)
        .post("/users")
        .send(user);
      expect(response.statusCode).toBe(409);
      expect(response.body).toEqual({ message: "Email address already in use" });
    });
    
  });
});
  