describe('Home page', () => {
  it('Should display info', () => {
    // Act
    cy.visit('/');

    // Assert
    cy.contains('Angular App');
    cy.contains('Vincent Lemordant');
  });

  it('Should call API', () => {
    // Arrange
    cy.visit('/');
    cy.intercept('GET', 'https://gorest.co.in/public/v2/users').as(
      'fetchUsers'
    );

    // Act
    cy.get('[id=fetch]').click();

    // Assert
    cy.wait('@fetchUsers').its('request.method').should('eq', 'GET');
  });

  it('Should navigate', () => {
    // Arrange
    cy.visit('/');

    // Act
    cy.get('[id=navigate]').click();

    // Assert
    cy.url().should('include', '/users');
  });
});
