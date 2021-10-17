describe('Exercise 4', function(){
            
    it('Should Clic Button', function () {
          cy.visit('http://localhost:8080/challenges/actions');
          cy.get('[class="btn btn-lg btn-danger action-btn"]').click();
          cy.get('[class="popover-title"]').should('be.visible');
          
        });

        
        it('Should Clic Multiple Button', function () {
            cy.visit('http://localhost:8080/challenges/actions');
            cy.get('[data-content="clicked"]').click({ multiple: true });
            cy.get('[class="popover-content"]').should('be.visible');            
          });
   
    })