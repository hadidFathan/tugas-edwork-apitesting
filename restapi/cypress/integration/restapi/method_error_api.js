describe('checking Progresiv valid Negative Response' , () => {
    it("Checking code eror 404 status", () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode: false
          }).as('pokemon')
          cy.get('@pokemon').its('status').should('equal', 404)
 
    });

    it('Checking code error 200 status', () => {
       cy.request({
        method : 'GET',
        url : 'https://pokeapi.co/api/v2/pokemon/bulbasaur',
        failOnStatusCode: false
    }).as('pokemon')
    cy.get('@pokemon').its('status').should('equal', 200)
       }) 
    });
    
