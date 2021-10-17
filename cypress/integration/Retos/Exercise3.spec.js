describe('Exercise 3', function(){
            
    it('Should Type Cupon Code', function () {
          cy.visit('http://localhost:8080/challenges/actions');
          cy.get('#couponCode1').type('micodigo');
          cy.get('#couponCode1').type('{enter}');
          cy.contains('Your form has been submitted!');
    });
    
   
})