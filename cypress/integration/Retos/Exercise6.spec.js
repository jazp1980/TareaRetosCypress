describe('Exercise 6', function(){
            
    it('Should Right Clic', function () {
          cy.visit('http://localhost:8080/challenges/actions');
          cy.get('[class="rightclick-action-div"]').contains('Right click to edit').rightclick();
          cy.get('[class="rightclick-action-input-hidden form-control"]').should('be.visible');  
        });

                 
    })