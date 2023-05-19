/// <reference types="cypress" />

describe("Artigo", () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })
    it("Cadastro de novo arquivo com sucesso", () => {

        cy.get('a[href*=editor]').click()

        const nomeArtigo = 'Nome do artigo' + new Date().getTime()
        cy.get('[ng-model$=title]').type(nomeArtigo)
        cy.get('[ng-model$=description]').type('descricao do artigo')
        cy.get('[ng-model$=body]').type('corpo do artigo')
        cy.get('[ng-model$=tagField]').type('tag do artigo{enter}')

        cy.contains('button','Publish Article').click();

        cy.get('h1').should('have.text', nomeArtigo)
         
    })
})

