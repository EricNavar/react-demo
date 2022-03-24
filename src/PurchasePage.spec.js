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
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('localhost:3000/purchase')
  })

  it('displays three items by default', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('#item-container div').should('have.length', 3)

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.get('#item-container div').first().should('contain.text', 'carrot')
    cy.get('#item-container div').last().should('contain.text', 'Sword')
  })

  it('can filter by name', () => {
    // We'll store our item text in a variable so we can reuse it
    const newItem = 'carrot'

    // Let's get the input element and use the `type` command to
    // input our new list item. After typing the content of our item,
    // we need to type the enter key as well in order to submit the input.
    // This input has a data-test attribute so we'll use that to select the
    // element in accordance with best practices:
    // https://on.cypress.io/selecting-elements
    cy.get('#search-field').type(`${newItem}{enter}`)

    // Now that we've typed our new item, let's check that it actually was added to the list.
    // Since it's the newest item, it should exist as the last element in the list.
    // In addition, with the two default items, we should have a total of 3 elements in the list.
    // Since assertions yield the element that was asserted on,
    // we can chain both of these assertions together into a single statement.
    cy.get('#item-container div')
      .should('have.length', 1)
      .last()
      .should('contain.text', newItem)
  })

  context('filtering out sold', () => {
    beforeEach(() => {
      // We'll take the command we used above to check off an element
      // Since we want to perform multiple tests that start with checking
      // one element, we put it in the beforeEach hook
      // so that it runs at the start of every test.
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

      // After filtering, we can assert that there is only the one
      // incomplete item in the list.
      cy.get('#item-container div')
        .should('have.length', 1)
        .first()
        .should('contain.text', 'House')
  
      // For good measure, let's also assert that the task we checked off
      // does not exist on the page.
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
