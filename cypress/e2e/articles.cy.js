/// <reference types="cypress" />
import articles from '../support/pages/articles'

describe('Artigo', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })
  it('Cadastro de novo arquivo com sucesso', () => {
    articles.acessarOFormulario()
    articles.preencherFormulario()
    articles.submeterFormulario()
    articles.verificarArtigoCriado()
  })
})
