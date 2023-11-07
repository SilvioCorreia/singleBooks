describe('Test API', () => {

    context('Validate status', () => {

        it('Validate status', () => {

            cy.api({
                url:'/status',
                method: 'GET',
                
            }).then(({ status, duration }) => {
                expect(status).to.eq(200)
                expect(duration).to.be.lessThan(1000)
            })
        })        
    })

    context('List of books', () => {

        it('List of books', () => {

            cy.api({
                url: '/books',
                method: 'GET',
                
            }).then(({ status, duration }) => {
                expect(status).to.eq(200)
                expect(duration).to.be.lessThan(1000)
           
            })
        })      
        
    })
    
    context('Get a single book', () => {
        
        it('Get a single book', () => {

            cy.api({
                url: '/books/4',
                method: 'GET'
                
            }).then(({ status, body, duration }) => {
                expect(status).to.eq(200)
                expect(body.name).to.eq('The Midnight Library')
                expect(body.type).to.eq('fiction')
                expect(duration).to.be.lessThan(1000)
           
            })
        }) 
    })

    context('Submit an order', () => {
        
        it.only('Order', () => {

        
            cy.api({
                method: 'POST',
                url: 'api-clients',
                
                body: {
                    clientName: 'Rebas',
                    customerName: 'exemple@gmail.com'
                }
            }).then(({ status, body, Authorization }) => {
                expect(status).to.eq(201)
                expect(body.customerName).to.eq('Diego')
                expect(Authorization, '752cfb87c5b5b950f26deb468531214bd12339815e18e383c838e5d124868736')
    
            }) 
                    
        }) 
    });

    context('Submit an order', () => {
        
        it('Order', () => {

        
            cy.api({
                method: 'POST',
                url: '/orders',
                Authorization: '5bf25ba0448f33ca6a0ce88dfb59ba36f7eeaeb171fe82af34c850427d4f7bb6',
                body: {
                    bookId: '4',
                    customerName: 'Diego'
                }
            }).then(({ status, body }) => {
                expect(status).to.eq(201)
                expect(body.customerName).to.eq('Diego')
    
            }) 
                    
        }) 
    });


})