it('Add a new user', () => {
    var user = {
        "name": 'Jane',
        "job": 'Cypress'
    } 
    cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)
        expect(response.body).to.have.property('name', 'Jane')
        expect(response.body).to.have.property('job', 'Cypress')
    })
})