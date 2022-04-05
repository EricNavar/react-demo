/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Minecraft marketplace', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/purchase')
  })

  cy.checkA11y()

  it('displays three items by default', () => {
    //Assert that there are 3 items in the store
    cy.get('#item-container div').should('have.length', 3)

    //Specify the first and last items
    cy.get('#item-container div').first().should('contain.text', 'carrot')
    cy.get('#item-container div').last().should('contain.text', 'Sword')
  })

  it('can filter by name', () => {
    const newItem = 'carrot'

    //find the search field element and type "carrot" into it and type the Enter key
    cy.get('#search-field').type(`${newItem}{enter}`)

    //find the item bu its class name. Ensure there is only one and verify its name.
    cy.get('#item-container div')
      .should('have.length', 1)
      .last()
      .should('contain.text', newItem)
  })

  context('filtering out sold', () => {
    beforeEach(() => {
      // We want multiple tests where sold items are filtered out, so we can define that as
      // a context where we check the box at the start of each test.
      cy.get('input[type=checkbox]')
        .check()
    })

    it('can filter for sold items', () => {
      cy.get('#item-container div')
        .should('have.length', 2)
        .first()
        .should('contain.text', 'carrot')

      cy.contains('house').should('not.exist')
    })

    it('can filter unsold by name', () => {
      const newItem = 'House';
      cy.get('#search-field').type(`${newItem}{enter}`)

      // After filtering, we can assert that there is only the one item in the list.
      cy.get('#item-container div')
        .should('have.length', 1)
        .first()
        .should('contain.text', 'House')
  
      // As an additional check, let's also assert that the sword does not exist on the page.
      cy.contains('Sword').should('not.exist')
    })

    it('returns nothing when searching sold items', () => {
      const newItem = 'Sword';
      cy.get('#search-field').type(`${newItem}{enter}`)
      // After filtering, we can assert that there is only the one
      // incomplete item in the list.
      cy.get('#item-container div').should('not.exist')
    })
  })
})
