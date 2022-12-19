describe('Validasi data User' , () => {
    it('Validasi User name ditto', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('status').should('equal', 200)
        cy.get('@pokemon').its('body').should('include', {name:'ditto'})
        cy.get('@pokemon').should((response) => {
            expect(response).to.have.property('headers')
            expect(response.body.name).to.eq('ditto')
        })
    });
    it('Validasi username limber', () => {
        cy.request('https://pokeapi.co/api/v2/ability/7/').as('pokemon')
        cy.get('@pokemon').its('status').should('equal', 200)
        cy.get('@pokemon').should((response) => {
            expect(response).to.have.property('headers')
            expect(response.body.name).to.eq('limber')
        })
    });
})