import LoginForm from './LoginForm'
const navigate = () => {}

describe("Logging in", () => {
  it('Should render login page', () => {
    cy.mount(<LoginForm navigate={navigate}/>)
    // cy.visit('/');

    // Assert that the desired React component is present on the page
    cy.get("#email").should("exist");
    cy.get("#password").should("exist");
  });
});
