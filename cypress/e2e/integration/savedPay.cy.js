import PaySaved from '../pages/paySaved.page';
import loginPage from '../pages/login.page';
import data from '../../../config.json';

describe('Test pay saved payee', () => {
  before(function () {
    cy.visit(data.URL);
    loginPage.login('username', 'password');
    PaySaved.load();
  });

  it('New form payee', () => {
    PaySaved.NewPaySaved();
    cy.get('#alert_content')
      .should('be.visible')
      .and('contain', 'The payment was successfully submitted.');
  });
});
