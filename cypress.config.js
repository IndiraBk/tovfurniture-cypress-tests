const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://tovfurniture.com/',
    retries: {runMode: 2, openMode: 0 },
    viewportWidth: 1920,
    viewportHeight: 1080,
     chromeWebSecurity: false,
    setupNodeEvents(on, config) {
    },
  },
});
