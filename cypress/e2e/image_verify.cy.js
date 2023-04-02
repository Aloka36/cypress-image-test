describe('Image validation', () => {
  it('Checks all images in a page for validity', () => {
    cy.visit('http://the-internet.herokuapp.com/broken_images');
    cy.get('.example > img').each(($img) => {
      const src = $img.attr('src');
      cy.request({url: src, failOnStatusCode: false}).then((response) => {
        if (response.status === 200) {
          cy.wrap($img).should('be.visible');
          cy.log(`Image '${src}' is valid`);
        } else {
          cy.log(`Image '${src}' is broken (status code: ${response.status})`);
        }
      });
    });
  });
});
