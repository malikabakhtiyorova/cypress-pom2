import TransferFound from '../pages/transfer.page';
import loginPage from '../pages/login.page';
import data from '../../../config.json';

describe('Test pay saved payee', () => {
  before(function () {
   
    cy.visit(data.URL);
    loginPage.login('username', 'password');
    TransferFound.load();
  });

  it('New form payee', () => {
    TransferFound.NewTransferFound();
    cy.get('#alert_content')
      .should('be.visible')
      .and('contain', 'The payment was successfully submitted.');
  });
});
