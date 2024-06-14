import Purchase from '../pages/purchase.page';
import loginPage from '../pages/login.page';
import data from '../../../config.json';

describe('Test pay saved payee', () => {
  before(function () {
    cy.visit(data.URL);
    loginPage.login('username', 'password');
    Purchase.load();
  });

  it('should add new form payee', () => {
    Purchase.formPurchase();
    cy.get('#pc_conversion_amount')
      .should('be.visible')
      .and('contain', '206.59');
  });
});
