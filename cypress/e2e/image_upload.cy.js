describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').selectFile('image.png', { action: 'drag-drop' })
    cy.wait(3000)
    cy.get('#file-submit').click()
    cy.get('h3').contains('File Uploaded!').and('be.visible')
  })
})