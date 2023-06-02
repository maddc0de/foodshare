import SignUpFormDonor from "./SignUpFormDonor";

describe("Signing up for a donor", () => {
  it("calls the users endpoint", () => {
    cy.mount(<SignUpFormDonor />);

    cy.intercept('POST', '/donor', { message: "OK" }).as("SignUpFormDonor");

    cy.get("#name").type("name");
    cy.get("#email").type("someone@example.com");
    cy.get("#description").type("description");
    cy.get("#location").type("location");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.wait('@SignUpFormDonor').then(interception => {
      expect(interception.response.body.message).to.eq("OK");
    });
  });

  // it("checks the fetch request", () => {
  //   cy.request('POST', '/donators').as("signup");
  //   cy.get("@signup").should((response) => {
  //     expect(response).to.have.property("name");
  //   });
  // });
});