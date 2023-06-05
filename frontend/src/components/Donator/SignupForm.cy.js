import DonatorSignUpForm from "./SignupForm";

describe("Signup up", () => {
  it("calls the users endpoint", () => {
    cy.mount(<SignUpForm />);

    cy.intercept('POST', '/donators', { message: "OK" }).as("signUpform");

    cy.get("#name").type("name");
    cy.get("#email").type("someone@example.com");
    cy.get("#description").type("description");
    cy.get("#location").type("location");
    cy.get("#username").type("username");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.wait('@signUpform').then(interception => {
      expect(interception.response.body.message).to.eq("OK");
    });
  });

  it("checks the fetch request", () => {
    cy.request('POST', '/donators').as("signup");
    cy.get("@signup").should((response) => {
      expect(response).to.have.property("name");
    });
  });
});