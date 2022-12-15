it('Add a new user', () => {
    var user = {
        "name": 'Lord Empire',
        "job": 'Sunda EMpire'
    } 
    cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)
    })
})
