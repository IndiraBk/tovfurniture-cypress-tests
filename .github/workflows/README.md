<div align="center">
  <h1>TOV-AUTOMATION</h1>
</div>

This project contains **Cypress automated tests** for the TOV Furniture website.

---

## 📂 Project Structure

TOV-AUTOMATION
├── .github/workflows/cypress.yaml # GitHub Actions workflow
├── cypress
│ ├── e2e # Test specs
│ │ ├── account.cy.js
│ │ └── addToCart.cy.js
│ ├── fixtures # Test data
│ │ └── user_credentials.json
│ ├── page_objects # Page Object files
│ │ ├── account.page.js
│ │ └── login.page.js
│ └── support # Cypress support files
│ ├── commands.js
│ └── e2e.js
├── cypress.config.js # Cypress configuration
├── package.json # Project dependencies and scripts
├── package-lock.json
└── .gitignore

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/TOV-AUTOMATION.git
cd TOV-AUTOMATION

### 2. Install dependencies

```bash
npm install

### 3. Run tests locally:
```bash
npx cypress open   # for interactive mode
npx cypress run    # for headless mode

## Tests Included

### Login Test – Validates that a user can log in using test credentials from cypress/fixtures/user_credentials.json.

### Add to Cart Test – Verifies that products can be added to the cart and that prices display correctly.

### ⚠️ The credentials used in this project are not personal and can be used for demonstration purposes.

## GitHub Actions

### The repository includes a workflow (.github/workflows/cypress.yaml) to automatically run Cypress tests on every push and can also be triggered manually using workflow_dispatch.

---


## 🙋‍♀️ Author

**Indira Biyakhmetova**
Quality Assurance Engineer — Manual & Automation