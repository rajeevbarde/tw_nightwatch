class Login {
    constructor(_browser) {
        this.browser = _browser
    }

    visitHomePage(region) {
        let homeUrl = "https://enterprise.taskworld.com";

        if (region == "asia")
            homeUrl = "https://asia-enterprise.taskworld.com";
        else if (region == "europe")
            homeUrl = "https://europe-enterprise.taskworld.com";

        this.browser
            .url(homeUrl)
            .waitForElementVisible('//body')

        return this; //for chaining
    }

    enterCredentials(username, password) {
        let userSelector = "//input[@name='email']";
        let passwordSelector = "//input[@name='password']";

        this.browser
            .waitForElementVisible(userSelector)
            .setValue(userSelector, username)
            .waitForElementVisible(passwordSelector)
            .setValue(passwordSelector, password)

        return this;
    }

    submitCredentials() {
        let submitSelector = "//form[@class='tw-form']//button";

        this.browser
            .click(submitSelector)

        return this;
    }
}

module.exports = Login;