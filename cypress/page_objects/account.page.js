
class AccountPage {
    get greetingMessage() {return cy.get('h2')};
    get accountHeader() {return cy.get('h4')}
    get LogOut() { return cy.contains('Log out')};
}
export default new AccountPage()