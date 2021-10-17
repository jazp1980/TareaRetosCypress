describe('Exercise 1', function(){
            
    it('Should Type Email', function () {
          cy.visit('http://localhost:8080/challenges/actions');
          cy.get('#email1').type('fake@email.com');
          cy.contains('fake@email.com');
       });
    
   it('Should delete Email', function () {
        cy.get('#email1').type('{selectall}{backspace}');
        cy.get('#email1').should('be.empty')
     });


})
