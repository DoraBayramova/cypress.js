describe('Проверка на покупку аватара', function () {                           
  it('e2e тест на покупку нового аватара для тренера', function () {
       cy.visit('https://pokemonbattle.me/');
       cy.get('input[type="email"]').type('USER_LOGIN');
       cy.get('input[type="password"]').type('USER_PASSWORD');
       cy.get('button[type="submit"]').click();
       cy.get('.header__btns > [href="/shop"]').click();
       cy.get('.available > button').first().click();
       cy.get('.credit').type('4373923902744410');
       cy.get('.k_input_ccv').type('125');
       cy.get('.k_input_date').type('1225');
       cy.get('.k_input_name').type('USER_NAME'); 
       cy.get('.k_input_name').blur(); 
       // cy.get('.pay-btn').should('not.be.disabled');  
       // cy.get('.pay-btn').focused();
       cy.get('.pay-btn').click();
       cy.get('#cardnumber').type('56456');
       cy.get('.payment__submit-button').click();
       cy.contains('Покупка прошла успешно').should('be.visible');
   });
});