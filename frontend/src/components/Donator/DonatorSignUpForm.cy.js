import DonatorSignUpForm from "./DonatorSignUpForm";

describe("Signup up", () => {
  it("checks the fetch request and ensures that the page loads correctly", () => {
    cy.mount(<DonatorSignUpForm />);
    cy.intercept("GET", '/signup/donator', (req) => {
      req.reply({
      statusCode: 200,
      // Check that the background is the correct color as defined in index.css (a nice shade of green)
      // For reasons unknown, this test only works when here.
      });cy.get('#background').should('have.css', 'background-color', '#198754')
    }).then(() => {
      //Confirm that all static components of form load
      cy.get('#signupform').should('not.be.empty')
      cy.log('app.js loaded')
      cy.log('index.css loaded')
    });
  });
  
  it("new user signs up to be a food hero", () => {
    cy.mount(<DonatorSignUpForm />);

    cy.intercept('POST', '/signup/donator', { message: "OK" }).as("donatorSignUpForm");
    // Stub in these values into the form to ensure that each section takes the correct input
    cy.get('[id="inputName3"]').type("Dave");
    cy.get('[id="inputEmail4"]').type("dave@hotmail.com");
    cy.get('[id="inputPassword4"]').type("daveisgreat100");
    cy.get('[id="inputAddress"]').type("100 Great Food Street");
    cy.get('input[placeholder="City"]').type("London");
    cy.get('input[placeholder="Postcode"]').type("L10 UVN");
    cy.get('[id="inputDescription"]').type("A small artisan bakery");
    cy.get('*[class^="form-control btn btn-primary"]').click();
    });

  it("existing user logs in", () => {
    cy.mount(<DonatorSignUpForm />);

    cy.intercept('POST', '/signup/donator', { message: "OK" }).as("donatorsignUpform");

    cy.get('[id="inputName3"]').type("Dave");
    cy.get('[id="inputEmail4"]').type("dave@hotmail.com");
    cy.get('[id="inputPassword4"]').type("daveisgreat100");
    cy.get('[id="inputAddress"]').type("100 Great Food Street");
    cy.get('input[placeholder="City"]').type("London");
    cy.get('input[placeholder="Postcode"]').type("L10 UVN");
    cy.get('[id="inputDescription"]').type("A small artisan bakery");
    cy.get('*[class^="form-control btn btn-secondary"]').click();
  });
});

//Finished