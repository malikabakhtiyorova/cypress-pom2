const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  watchForFileChanges: false,
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  waitForAnimation: true,
  animationDistanceTreshold: 20,
  defaultCommandTimeout: 6000,
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 1000,
  responseTimeout: 1000,
  video: true,
  failOnStatusCode: false
});
