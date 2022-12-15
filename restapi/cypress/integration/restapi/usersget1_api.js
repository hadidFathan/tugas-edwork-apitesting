describe('Get Users', () => {
    it('Verify the list users will displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/?page=2&per_page=6&id=1',
          }).as('users')
          cy.get('@users').its('status').should('equal', 200)
    });
 });
 