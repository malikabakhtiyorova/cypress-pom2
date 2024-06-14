export default class Navbar {
  static clickOnLogo() {
    cy.get('.brand').click();
  }

  static search(text) {
    cy.get('#search').type(`${text} {enter}`);
  }

  static clickSignIn() {
    cy.get('.btn').click();
  }
}
