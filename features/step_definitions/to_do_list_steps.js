const {Given,When,Then} = require("@cucumber/cucumber");
const checkElementTextDecoration = require('../support/check/checkElementTextDecoration')
const checkElementExist = require('../support/check/checkElementExist')
const checkElementText = require('../support/check/checkElementText')
const {url} = require("./commondata");
const puppeteer = require("puppeteer");



Given(/^Go to to do app url$/, async function () {
    this.browser = await puppeteer.launch({headless:true})
    this.page = await this.browser.newPage()
    await this.page.goto(url)
});


Given(/^I type "([^"]*)" input field$/, async function (input) {
    await this.page.waitForSelector("[id='input-area']")
    await this.page.click("[id='input-area']")
    await this.page.type("[id='input-area']",input)
    await this.page.waitForTimeout(1000)
});

When(/^I click Add button$/, async function () {
    await this.page.click("[id='add-button']")
    await this.page.waitForTimeout(1000)
});

Then(/^I should see "([^"]*)" task in to do list$/,async function (task) {
    //await this.page.waitForFunction(
    //    'document.getElementById("task").innerText.includes("Go to Gym")'
    //)
    //try {
    //    await this.page.waitForFunction(
    //        task => document.getElementById('task').innerText.includes(task),
    //        {},
    //        task
    //    );
    //} catch(e) {
    //    console.log(`The text "${text}" was not found on the page`);
    //}
    await checkElementText.call(this,"[id='task-0']",null,task)
    await this.browser.close()
});
Then(/^I should see "([^"]*)" task in to do list with buy some milk$/, async function (task) {
    await checkElementText.call(this,"[id='task-1']",null,task)
    await this.browser.close()
});
When(/^I click Status Button$/, async function () {
    await this.page.waitForSelector("[id='status-button-0']")
    await this.page.click("[id='status-button-0']")
    await this.page.waitForTimeout(1500)
});

Then(/^I should see buy some milk task in to do list marked as$/, async function () {
    await checkElementTextDecoration.call(this,"[id='task-0']",null,'line-through solid rgb(0, 0, 0)')
    await this.browser.close()
});
Then(/^I should see buy some milk task in to do list not marked as$/, async function () {
    await checkElementTextDecoration.call(this,"[id='task-0']",null,'none solid rgb(0, 0, 0)')
    await this.browser.close()
});
When(/^I click Delete button next to "([^"]*)"$/, async function () {
    await this.page.waitForSelector("[id='remove-button-0']")
    await this.page.click("[id='remove-button-0']")
});
Then(/^I should see empty list$/, async function () {
    await checkElementExist.call(this,"[id='task-0']",false)
    await this.browser.close()
});
Then(/^I should see "([^"]*)"$/, async function (task) {
    await checkElementText.call(this,"[id='task-0']",null,task)
    await this.browser.close()
});
When(/^I click Delete button next to rest for a while$/, async function () {
    await this.page.waitForSelector("[id='remove-button-0']")
    await this.page.click("[id='remove-button-0']")
});
