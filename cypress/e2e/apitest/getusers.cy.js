/// <reference types="cypress" />

describe('get api user test', () => {  

  let accessToken = 'da9ac1ce25e1087ce607017e130f8b21962223c0cecad4b10334cc8755c71274'

  it('get users', () => {
      cy.request({
          method : 'GET',
          url : 'https://gorest.co.in/public/v2/users',
          Headers : {
              'authorization': 'Bearer ' + accessToken
          }
      }).then((resp) => {
          expect(resp.status).to.eq(200)
          expect(resp.body).to.be.an('array')
      })
  })

  it('get users by id', () => {
    cy.request({
        method : 'GET',
        url : 'https://gorest.co.in/public/v2/users/7421508',
        Headers : {
            'authorization': 'Bearer ' + accessToken
        }
    }).then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.body.gender).to.eq('female')
    })
})
})