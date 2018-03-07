describe('Home page', function() {
  it('could create new Todo with CSRF Protected form', function() {
    cy.visit('/')
    cy.get('#csrf-protected input[name="name"]').type('Something')
    cy.get('#csrf-protected button').click()
    cy
      .get('.alert')
      .should('have.class', 'alert-success')
      .should('contain', 'Create item "Something" successfully!')
  })

  it('could NOT create new Todo with no CSRF Protected form', function() {
    cy.visit('/')
    cy.get('#no-csrf-protected input[name="name"]').type('Something')
    cy.get('#no-csrf-protected button').click()
    cy.get('pre').should('contain', 'ForbiddenError: invalid csrf token')
  })

  it('could NOT create new Todo with no CSRF Protected form', function() {
    cy.visit('/')
  })
})
