// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

// cypress.config.js
export default (on, config) => {
  if (config.env.ngrokUrl) {
    config.baseUrl = config.env.ngrokUrl;
  }

  // other Cypress configuration options

  return config;
};
