// const mongoose = require("mongoose");

// require("../mongodb_helper");
// const Donation = require("../../models/donation");

// describe("Donation model", () => {
//   beforeEach((done) => {
//     mongoose.connection.collections.Donations.drop(() => {
//       done();
//     });
//   });

//   it("has a message", () => {
//     var Donation = new Donation({ message: "some message" });
//     expect(Donation.message).toEqual("some message");
//   });

//   it("can list all donations", (done) => {
//     Donation.find((err, Donations) => {
//       expect(err).toBeNull();
//       expect(Donations).toEqual([]);
//       done();
//     });
//   });

//   it("can save a Donation", (done) => {
//     var Donation = new Donation({ message: "some message" });

//     Donation.save((err) => {
//       expect(err).toBeNull();

//       Donation.find((err, Donations) => {
//         expect(err).toBeNull();

//         expect(Donations[0]).toMatchObject({ message: "some message" });
//         done();
//       });
//     });
//   });
// });