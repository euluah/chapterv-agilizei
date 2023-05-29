import { ELEMENTS } from './elements'
const nomeArtigo = 'Nome do artigo' + new Date().getTime()
class Articles {
  acessarOFormulario () {
    cy.get(ELEMENTS.linkNovoArtigo).click()
  }

  preencherFormulario () {
    cy.get(ELEMENTS.inputTitle).type(nomeArtigo)
    cy.get(ELEMENTS.inputDescription).type('descricao do artigo')
    cy.get(ELEMENTS.inputBody).type('corpo do artigo')
    cy.get(ELEMENTS.inputTagFild).type('tag do artigo{enter}')
  }

  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  verificarArtigoCriado () {
    cy.get('h1').should('have.text', nomeArtigo)
  }
}

export default new Articles()
