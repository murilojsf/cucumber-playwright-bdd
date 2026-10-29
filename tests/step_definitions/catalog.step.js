const { Given, When, Then} = require('@cucumber/cucumber')
const { chromium, expect } = require('@playwright/test')

Then('o cliente sera redirecionado para a tela de catalogos', async function(){
    const catalogPageLabel = await this.page.locator("[data-test='title']")
    await expect(catalogPageLabel).toContainText('Products')
})