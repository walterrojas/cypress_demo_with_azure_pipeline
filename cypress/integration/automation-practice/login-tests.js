describe('Automation Practice - Login Tests', () => {
    it('Login con email y password validos', () => {
        cy.visit('?controller=authentication&back=my-account')

        cy.get('#email').type(Cypress.env('user_email'))
        cy.get('#passwd').type(Cypress.env('user_password'))
        cy.get('#SubmitLogin').click()
    })
})