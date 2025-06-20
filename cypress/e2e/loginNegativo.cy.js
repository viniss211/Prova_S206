describe('Login inválido no SauceDemo', () => {
  it('Deve exibir mensagem de erro com senha incorreta', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('senha_errada');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('contain', 'Epic sadface');
  });
});
