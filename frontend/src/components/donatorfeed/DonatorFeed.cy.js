import DonatorFeed from "./DonatorFeed";

describe("donator feed page, which contains a list of donations and their status", () => {
  it("checks the get request to ensure that the page loads correctly", () => {
    cy.mount(<DonatorFeed />);
    let response = {result: [{id: 1}]}
    cy.intercept("GET", "/foodhero/:id", (req) => {
        req.reply({
            statusCode: 200,
            body: {
              name: 'Donation Feed',
              'background-color': '#198754',
              body: response,
            }
        });
    })
    cy.get("#DonatorFeed").should('not.be.empty')
    cy.log('app.js loaded')
    cy.log('index.css loaded')
  })
})