import addPayee from '../pages/addPayment.page';
import loginPage from '../pages/login.page';
import data from '../../../config.json';

describe('Testing a new payee', () => {
  before(function () {
    cy.visit(data.URL);
    loginPage.login('username', 'password');
    addPayee.load();
  });
  it('Testing form payee', () => {
    addPayee.formNewPayee();
    cy.get('#alert_content')
      .should('be.visible')
      .and('contain', 'The new payee Sample was successfully created.');
  });
});
