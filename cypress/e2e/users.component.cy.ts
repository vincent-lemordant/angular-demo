describe('Users page', () => {
  it('Should display users data', () => {
    // Arrange/Act
    cy.visit('/');
    cy.intercept('GET', 'https://gorest.co.in/public/v2/users').as(
      'fetchUsers'
    );
    cy.get('[id=fetch]').click();
    // Load users
    cy.wait('@fetchUsers').its('request.method').should('eq', 'GET');
    cy.get('[id=navigate]').click();

    // Assert
    // Table should have 11 rows (header + users)
    cy.get('tr').should('have.length.greaterThan', 10);
  });

  it('Should display info', () => {
    // Arrange
    // Load fixture data
    cy.visit('/');
    cy.intercept('GET', 'https://gorest.co.in/public/v2/users', {
      fixture: 'users.json',
    }).as('fetchUsers');
    cy.get('[id=fetch]').click();
    cy.wait('@fetchUsers').its('request.method').should('eq', 'GET');
    // Navigate to users
    cy.get('[id=navigate]').click();

    // Act
    // Sort by name (asc)
    cy.get('[sortable="name"]').click();

    // Assert
    // First user should be Amb. Giri Asan
    cy.get('tr').eq(1).contains('Amb. Giri Asan');

    // Act
    // Sort by name (desc)
    cy.get('[sortable="name"]').click();

    // Assert
    // First user should be Suryakantam Asani
    cy.get('tr').eq(1).contains('Suryakantam Asani');
  });
});
