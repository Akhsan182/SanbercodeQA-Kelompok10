describe('Place Order Scenario', () => {
    it('Purchase Successful', () => {
      cy.visit('https://www.demoblaze.com/cart.html');
  
      cy.contains('Place Order').click();
  
      cy.wait(3000); 
      cy.get('#name').type('Dian');
      cy.get('#country').type('Indonesia');
      cy.get('#city').type('Bandung');
      cy.get('#card').type('12123');
      cy.get('#month').type('7');
      cy.get('#year').type('2023');
  
      cy.contains('Purchase').click();
  
      cy.get('.confirm').click();
  
      cy.contains('.sweet-alert', 'Thank you for your purchase!').should('be.visible');
    });
  });
  
  