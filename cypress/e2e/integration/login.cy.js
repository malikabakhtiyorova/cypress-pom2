import Navbar from '../components/Navbar.component';
import LoginPage from '../pages/login.page';
import data from '../../../config.json'

describe('Login Fail', () => {
  before(function () {
    cy.visit(data.URL);
    Navbar.clickSignIn();
  });

  it('should check login with invalid credentials', () => {
    LoginPage.login('invalid username', 'invalid password');
  });
});
