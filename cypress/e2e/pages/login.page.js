import BasePage from './base.page';

export default class LoginPage extends BasePage {
  static login(username, password) {
    cy.login(username, password);
  }

  static clickForgotPasswordLink() {
    cy.contains('Forgot your password?').click();
  }
}
