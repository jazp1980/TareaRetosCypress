describe('Exercise 2', function(){
            
    it('Should Focus Password', function () {
          cy.visit('http://localhost:8080/challenges/actions');
          cy.get('#password1').focus();
          cy.get('#password1').should('have.css','color');
       });
    
    it('Should Focus Fullname', function () {
       cy.get('#fullName1').focus();
       cy.get('#password1').focus(); //lost focus Fullname
       cy.get('#fullName1').should('have.css','color');
     });


})