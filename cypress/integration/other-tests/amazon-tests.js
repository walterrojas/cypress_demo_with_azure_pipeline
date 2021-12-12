describe('Amazon tests', () => {
    //test case 1
    it('Ir a la pagina de Amazon y verificar que su logo esta visible', () => {
        // Paso 1: Ir a la pagina de Amazon
        cy.visit('https://www.amazon.com')

        // Paso 2: Verificar que el logo esta visible
        cy.get('#nav-logo-sprites').should('be.visible')
    })

    //test case 2
    it('Ir a la pagina de Amazon y verificar que su logo esta visible usando xpath', () => {
        // Paso 1: Ir a la pagina de Amazon
        cy.visit('https://www.amazon.com')

        // Paso 2:verificar que su logo esta visible usando XPath
        cy.xpath('//a[@id="nav-logo-sprites"]').should('be.visible')
    })
})

