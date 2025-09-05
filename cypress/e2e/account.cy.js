import user from "../fixtures/user_credentials.json";
import loginPage from "../page_objects/login.page";
import accountPage from "../page_objects/account.page";

describe("Account Test", () => {
  beforeEach(() => {
    cy.intercept({ url: "**" }, { log: false });
    cy.visit("/");
  });

  it("Should log in with valid credentials", () => {
    cy.get(".icon-account").eq(1).click();

    loginPage.emailInput.type(user.email);
    loginPage.passwordInput.type(user.password);
    loginPage.SignInBtn.click();

    cy.url().should("include", "/account");
    accountPage.greetingMessage.should("contain.text", "Hi, Cypress!");
    accountPage.accountHeader.should("have.text", "My Account");
  });

  it("Should log out", () => {
    cy.get(".icon-account").eq(1).click();
    loginPage.login(user.email, user.password);
    accountPage.LogOut.click();
    cy.url().should("eq", Cypress.config().baseUrl);
  });
});
