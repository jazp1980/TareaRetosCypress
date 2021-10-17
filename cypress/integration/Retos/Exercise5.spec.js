describe('Exercise 5', function(){
            
    it('Should Double Clic', function () {
          cy.visit('http://localhost:8080/challenges/actions');
          cy.get('[class="action-div"]').contains('Double click to edit').dblclick()
          cy.get('[class="action-input-hidden form-control"]').should('be.visible');  
        });

        
          
    })