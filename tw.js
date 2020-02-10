module.exports = {
    'LOGIN': (browser) => {
        browser
            .url('https://asia-enterprise.taskworld.com/')
            .waitForElementVisible('//body')
            .waitForElementVisible("//input[@name='email']")
            .setValue("//input[@name='email']", "rajeevv67@yahoo.com")
            .waitForElementVisible("//input[@name='password']")
            .setValue("//input[@name='password']", "abcd1234")
            .pause(2000)
            .click("//form[@class='tw-form']//button")
    },

    'create new project': (browser) => {
        browser
            .waitForElementVisible("//div[@class='tw-new-project-button-box__text']")
            .click("//div[@class='tw-new-project-button-box__text']")
            .waitForElementVisible("//input[@name='project-name']")
            .setValue("//input[@name='project-name']", "my project" + Math.random())
            .waitForElementVisible("//input[@name='description']")
            .setValue("//input[@name='description']", "my prject descrtion")
            .click("//span[@data-l10n-message='Next: Choose a template']")
            .waitForElementVisible("//div[text()='Create Project']")
            .click("//div[text()='Create Project']")
    },

    'crates & check new tasklist': (browser) => {
        browser
            .setValue("//input[@type='text' and @placeholder='Tasklist title']", "my tasklist")
            .keys("\uE007")
            .keys("\uE00C")
            .click("(//div[@class='tw-kanban-columns']//div[@role='button'])[1]")
            .setValue("//div[@class='tw-kanban-columns']//textarea", "set descropt")
            .click("//div[@class='tw-kanban-columns']//span[@data-l10n-message='Create']")
            .click("//span[text()='set descropt']")
            .waitForElementVisible("//div/i[contains(@class,'tw-icon-close')]")
            .pause(2000)
            .click("//div/i[contains(@class,'tw-icon-close')]")
    },

    'mark task as complete': browser => {
        browser
            .waitForElementVisible("//div[@class='tw-task-header__checkbox']/div")
            .click("//div[@class='tw-task-header__checkbox']/div")
            .pause(6000)
            .click("//span[text()='set descropt']")

    }
};