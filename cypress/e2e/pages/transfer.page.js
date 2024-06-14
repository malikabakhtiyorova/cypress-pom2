import basePage from './base.page';

export default class TransferFound extends basePage {
  static load() {
    cy.visit('http://zero.webappsecurity.com/bank/transfer-funds.html');
  }

  static NewTransferFound() {
    cy.get('#pay_bills_tab').click();
    cy.contains('Pay Saved Payee').click();
    cy.get('#sp_payee').select('sprint');
    cy.get('#sp_account').select('1');
    cy.get('#sp_amount').type('100');
    cy.get('#sp_date').type('2024-04-30 {enter}');
    cy.get('#sp_description').type('example description');
    cy.get('#pay_saved_payees').click();
  }
}
