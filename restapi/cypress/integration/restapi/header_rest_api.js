describe('Header Test Valid', () => {
    it('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include' , 'application/json; charset=utf-8')
        cy.get('@pokemon').its('status').should('equal', 200)
        cy.get('@pokemon').should((response) => {
            expect(response).to.have.property('headers')
            expect(response.body).has.property('name')
            
        })
        cy.get('@pokemon').should((response => {
            expect(response.body).to.have.property('name', 'ditto')
            expect(response.body).to.have.property('base_experience', 101)
        }))
    });
    it('Validate body pokemon', () => {
        cy.request('https://pokeapi.co/api/v2/version/7/').as('pokemon')
        cy.get('@pokemon').its('headers').its('connection').should('include' , 'keep-alive')
        cy.get('@pokemon').its('body').should('include', {name:'ruby'})
        
    });
})