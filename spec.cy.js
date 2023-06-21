describe('Autotest ekreative', () => {
  it('should search for "ekreative" and verify the first link', () => {
    cy.visit('https://www.google.com');
    cy.get('.SDkEP').type('ekreative{enter}');
    cy.get('div#search div.g a').first().invoke('text').should('contain', 'ekreative.com');
    cy.get('div#search div.g a').first().click();

    cy.url().should('eq', 'https://www.ekreative.com/').wait(3000).then(() => {
         cy.get('#site-nav > .sandwich').click();
         cy.get('#popup-menu > .menu-main-menu-container > #main-menu > .menu-item-has-children > .sub-menu__wrapper > .dropdown-menu > .tultip-btn > .dropdown-item')
         .contains('We’re hiring')
         .should('be.visible');
    });
  })
});