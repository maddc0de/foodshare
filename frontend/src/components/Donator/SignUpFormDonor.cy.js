import SignUpFormDonor from "./SignUpFormDonor";
describe("Signing up for a donor", () => {
  it("makes a post request to the sign up donor page and lets the user complete the form", () => {
    cy.mount(< SignUpFormDonor />);
    let response = {result: [{name: "Dave"}]};
    cy.intercept("POST", "http://localhost:3000/signupdonor", (req) => {
      req.reply({
        statusCode: 200,
        body: response,
      }).as("submitForm");

    cy.get('input[id="name"]').click().type("Dave");
    cy.get('input[id="email"]').click().type("dave@example.com");
  
    cy.get('input[type="submit"]').click();
  
    cy.wait("@submitForm").then(() => {
      cy.get('input[id="name"]').invoke("val").should("contain", "Dave");
      });
    })
  })

it("when the user clicks on the donor sign up option, they are redirected to the sign up donor page", () => {
  cy.request("GET", "http://localhost:3000/signupdonor").then((response) =>{
    expect(response.headers).to.have.property('contain.text', "Welcome Food Heroes!");
    })
  })
})