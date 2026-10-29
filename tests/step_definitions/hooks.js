const {Before, After} = require('@cucumber/cucumber')
const { chromium } = require('@playwright/test')
const LoginPage = require('../pages/loginPage')

Before(async function () {
    this.browser = await chromium.launch({headless: false});
    this.context= await this.browser.newContext();
    this.page = await this.context.newPage();

    this.loginPage= new LoginPage(this.page)
    })
After(async function () {
    await this.page.close();
    await this.context.close() ;
    await this.browser.close();
})