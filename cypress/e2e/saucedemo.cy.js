 describe('Login no SauceDemo', () => {
  it('Deve acessar a página de login e verificar o título', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.title().should('include', 'Swag Labs');
  });
});
