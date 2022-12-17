describe('user login in username and password',() =>{
    it("Request login try website", () => {
        it('successfully logs in programmatically', () => {
            cy.loginViaAPI()
            cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
          })
        ;
    });
     
})