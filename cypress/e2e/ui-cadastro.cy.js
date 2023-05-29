/// <reference types="cypress" />

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({

      // hostname: https://api.realworld.io  //https://api.realworld.io/api/users
      // url completa
      // path com query params
      // path sem query params
      method: 'POST',
      path: 'api/users'

    }, {
      statusCode: 200,
      fixture: 'cadastro-com-sucesso'
    }).as('postUsers')

    cy.visit('register')
    cy.get('input[placeholder=Username]').type('dramin')
    cy.get('input[placeholder=Email]').type('dramin@gmail.com')
    cy.get('input[placeholder=Password]').type('1234')
    cy.get('button.btn-primary').click()

    cy.contains('No articles are here... yet').should('be.visible')
  })

  it('Usuario existente', () => {
    cy.intercept({
      method: 'POST',
      path: 'api/users'
    }, {
      statusCode: 422,
      fixture: 'usuario-existente'
    }).as('postUsers')

    cy.visit('register')
    cy.get('input[placeholder=Username]').type('inoxidil')
    cy.get('input[placeholder=Email]').type('inoxidil@gmail.com')
    cy.get('input[placeholder=Password]').type('1234')
    cy.get('button.btn-primary').click()

    cy.contains('username has already been taken').should('be.visible')
  })

  it('email existente', () => {
    cy.intercept({
      method: 'POST',
      path: 'api/users'
    }, {
      statusCode: 422,
      fixture: 'email-existente'
    }).as('postUser')

    cy.visit('register')
    cy.get('input[placeholder=Username]').type('dramin')
    cy.get('input[placeholder=Email]').type('dramin@gmail.com')
    cy.get('input[placeholder=Password]').type('1234')
    cy.get('button.btn-primary').click()

    cy.contains('email has already been taken').should('be.visible')
  })
})
