//loga na aplicação via API
Cypress.Commands.add('login', (clientName, clientEmail, Authorization) => {

    cy.session([clientName, clientEmail, Authorization], () => {
        cy.api({
            method: 'POST',
            url: '/api-clients',
            Authorization: '752cfb87c5b5b950f26deb468531214bd12339815e18e383c838e5d124868736',

            body: {
                clientName: 'Rebas',
                clientEmail: 'exemple@gmail.com'
                
            }
        })

    }, {cacheAcrossSpecs: true }) 
    

})