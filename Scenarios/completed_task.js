const Login = require("../PageObjects/Login");
const DashBoard = require("../PageObjects/Dashboard");
const test_data = require("./test_data.json")["completed_task"]

let loginpage, dashboardPage;
module.exports = {

    before: browser => {
        loginpage = new Login(browser);
        dashboardPage = new DashBoard(browser);
    },

    '1. Existing user successfully login into the systems': browser => {

        //Visit homepage and login using credentials
        loginpage
            .visitHomePage(test_data["region"])
            .enterCredentials(test_data["username"], test_data["password"])
            .submitCredentials();

        //Assert on successful login by checking searchbox & url value.
        let searchTextbox = "//input[@type='text' and @placeholder='Search Projects']";

        browser
            .waitForElementVisible(searchTextbox)
            .assert.urlContains('https://asia-enterprise.taskworld.com/test_workspace/#/projects');

    },

    '2. The user creates a new project.': browser => {
        //Create Project with Name & description. Perform multiple steps.
        dashboardPage.createProject(test_data["ProjectName"], test_data["ProjectDescription"]);

        //Assert that new Project is created.
        let ProjtitleSelector = "//div[@class='tw-project-header__title']/div/div";
        browser.assert.containsText(ProjtitleSelector, test_data["ProjectName"]);
    },

    '3. The user creates a new tasklist in the project.': browser => {
        //Create Tasklist
        dashboardPage.createTaskList(test_data["TaskList"]);

        //Assert that Tasklist is created
        let tasklistName = `//section[@data-tasklist-title='${test_data["TaskList"]}']//div[@class='tw-editable-text-field__text']`;
        browser.assert.containsText(tasklistName, test_data["TaskList"])
    },

    '4. The user adds a new task to the tasklist.': browser => {
        //Create Task
        dashboardPage.createTask(test_data["TaskName"]);

        //Assert [#1] : Task is created under Tasklist
        let taskNameSelector = `//section[@data-tasklist-title="${test_data["TaskList"]}"]//section[@data-task-title]`;
        browser.assert.containsText(taskNameSelector, test_data["TaskName"])

        //Assert[#2] : Task is created with detailed information
        dashboardPage.openTask(test_data["TaskList"], test_data["TaskName"]);

        let floatingBox = "//div[@class='tw-floating-panel-desktop__container']";
        let taskName2 = "//div[@class='tw-floating-panel-desktop__container']//div[@class='tw-task-properties-header__title-and-info']/div[1]";

        browser
            .waitForElementVisible(floatingBox)
            .assert.containsText(taskName2, test_data["TaskName"]);

        //Close floating box
        browser.click(floatingBox + "//div/i[contains(@class,'tw-icon-close')]")
    },

    '5 The user marks the task as completed.': browser => {
        //Complete task
        dashboardPage.completeTask(test_data["TaskName"]);

        //Assert the task is completed
        browser.assert.containsText(`//section[@data-task-title="${test_data["TaskName"]}"]//div[@class="tw-task-date"]`, 'Completed on ')
    },


    '6. The user opens the completed task to see its details.': browser => {
        //Complete task
        dashboardPage.openTask(test_data["TaskList"], test_data["TaskName"]);

        //Assert the task is completed
        browser.assert.containsText("//div[@class='tw-task-properties']//span[@class='tw-task-completed-stat__message-stat']", 'Completed Today')
        browser.assert.containsText("//div[@class='tw-task-properties']//div[@class='tw-editable-panel-title__text']", test_data["TaskName"]);
    }

};