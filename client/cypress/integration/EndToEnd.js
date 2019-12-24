describe('End to end tests', () => {
  it('Types a name --> Joins the chat --> Sends a message', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[id="Name"]')
      .type('Axel')
    cy.get('#joinChatButton')
      .click()

    cy.get('input[id="Message"]')
      .type('Test Message!')
    cy.get('#sendMessageButton')
      .click()
    cy.get('p').contains('Test Message!')
  })
})
