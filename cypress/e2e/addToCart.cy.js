import loginPage from "../page_objects/login.page";
import user from "../fixtures/user_credentials.json";

describe("Account Test", () => {
  beforeEach(() => {
    cy.intercept({ url: "**" }, { log: false });
    cy.visit("/");
  });

  it("Should add item to the cart", () => {
    cy.get(".icon-account").eq(1).click();
    loginPage.login(user.email, user.password);

    cy.get("#Search-In-Modal").type("Sofa Kendall{enter}");
    cy.get('[data-handle*="kendall-velvet-sofa"]')
      .filter(":visible")
      .first()
      .click();

    cy.get("h1").should("contain.text", "Kendall");

    cy.contains("Add to cart").click();
    cy.contains("VIEW CART", { timeout: 10000 }).click();

    cy.get("#CartDrawer-CartItems .cart-item__name", { timeout: 10000 })
      .should("contain.text", "Kendall")
      .and("contain.text", "Velvet Sofa");

    cy.get("#CartDrawer-CartItems .product-option").should(
      "contain.text",
      "Cream"
    );

    cy.get("#CartItem-1", { timeout: 10000 }).should("exist");

    cy.get("input#Quantity-1.quantity__input")
      .should("be.visible")
      .should("have.value", "1");
  });
});
