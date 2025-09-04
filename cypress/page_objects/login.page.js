
class LoginPage{
get emailInput() { return cy.get('#CustomerEmail')};
get passwordInput() { return cy.get('#CustomerPassword')};
get SignInBtn() {return cy.get('.login-submit-btn')}
login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.SignInBtn.click();
}
}
export default new LoginPage()