class Dashboard {
    constructor(_browser) {
        this.browser = _browser;
    }

    createProject(projName, projDesc) {

        this
            .clickNewProject()
            .setProjectDetails(projName, projDesc)
            .clickChooseTemplate()
            .clickCreateProject();
    }

    clickNewProject() {
        let openProjectDialog = "//div[@class='tw-new-project-button-box__text']";

        this.browser
            .waitForElementVisible(openProjectDialog)
            .click(openProjectDialog)

        return this;
    }

    setProjectDetails(projName, projDesc) {

        let projNameBox = "//input[@name='project-name']";
        let projDescBox = "//input[@name='description']";
        let randomNum = Math.round(Math.random() * (10000 - 1) + 1, 2);

        this.browser
            .waitForElementVisible(projNameBox)
            .setValue(projNameBox, `${projName} ${randomNum}`)
            .waitForElementVisible(projDescBox)
            .setValue(projDescBox, projDesc)

        return this;
    }

    clickChooseTemplate() {
        let clickTemplateButton = "//span[@data-l10n-message='Next: Choose a template']";

        this.browser
            .click(clickTemplateButton);

        return this;
    }

    clickCreateProject() {
        let createProjButton = "//div[text()='Create Project']";

        this.browser
            .waitForElementVisible(createProjButton)
            .click(createProjButton)

        return this;
    }

    createTaskList(tasklistName) {
        let tasklistTextbox = "//input[@type='text' and @placeholder='Tasklist title']";

        this.browser
            .setValue(tasklistTextbox, tasklistName)
            .keys("\uE007") // Press ENTER
            .keys("\uE00C") // Press ESCAPE

        return this;
    }

    createTask(taskName) {
        let clickPlus = "(//div[@class='tw-kanban-columns']//div[@role='button'])[1]";
        let taskNameArea = "//div[@class='tw-kanban-columns']//textarea";
        let createButton = "//div[@class='tw-kanban-columns']//span[@data-l10n-message='Create']";

        this.browser
            .waitForElementVisible(clickPlus)
            .click(clickPlus)
            .setValue(taskNameArea, taskName)
            .waitForElementVisible(createButton)
            .click(createButton)

        return this;
    }

    completeTask(taskName) {
        let taskCheckbox = `//section[@data-task-title="${taskName}"]//div[@class='tw-task-header__checkbox']/div`;

        this.browser
            .waitForElementVisible(taskCheckbox)
            .click(taskCheckbox)

        return this;
    }

    openTask(taskList, taskName) {
        let taskselector = `//section[@data-tasklist-title="${taskList}"]//section[@data-task-title="${taskName}"]`;

        this.browser
            .waitForElementVisible(taskselector)
            .click(taskselector)

        return this;
    }
}

module.exports = Dashboard