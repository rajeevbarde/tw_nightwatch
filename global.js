module.exports = {

    throwOnMultipleElementsReturned: false,
    waitForConditionTimeout: 15000,

    before: async function (done) {
        done();
    },

    after: async function (done) {
        done();
    },

    beforeEach: function (browser, done) {

        browser.windowMaximize();
        done();
    },

    afterEach: function (browser, done) {
        done();
    },
};