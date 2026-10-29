const { Given, When, Then} = require('@cucumber/cucumber')
const { chromium, expect } = require('@playwright/test')


Given('que o cliente está na tela de login', async function (){
    await this.loginPage.visitPage()
})

When('preenche o usuario {string} e uma senha {string}', async function(username,password){
    await this.loginPage.fillLogin(username,password)
})

When('clica no botão Entrar', async function(){
    await this.loginPage.loginClick()
})

Then('uma mensagem de erro deve ser exibida', async function () {
  const loginErrorLabel = await this.page.locator("[data-test='error']")
  await expect(loginErrorLabel).toContainText('Epic sadface: Username and password do not match any user in this service')
});

