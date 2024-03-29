const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {

        baseUrl: 'https://simple-books-api.glitch.me',
        //viewportHeight: 1080,
        //viewportWidth: 1920,
        retries: {
            runMode: 1,
            openMode: 0
        },

        // eslint-disable-next-line  
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
