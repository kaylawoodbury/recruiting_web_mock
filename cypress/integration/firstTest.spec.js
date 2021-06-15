describe('User can', () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it('successfully visit page', () => {
    cy.get("[data-cy='hello']").should("contain", "Hello World");
  });
});