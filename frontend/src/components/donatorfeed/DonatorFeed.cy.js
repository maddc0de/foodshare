import DonatorFeed from "./DonatorFeed";

describe("donator feed page, which contains a list of donations and their status", () => {
  it("checks the get request to ensure that the page loads correctly", () => {
    cy.mount(<DonatorFeed />);
    cy.intercept("GET", "/foodhero/:id", (req) => {
        req.reply({
            statusCode: 200,
            body: response,
        });
    }).as("getDonationFeed");
    cy.get("").click();
    cy.wait("@getDonationFeed").then(() =>{
        cy.get("").should
    })
  })

})