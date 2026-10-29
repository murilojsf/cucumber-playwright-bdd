class LoginPage {
    constructor(page){
        this.page=page;
    }
    async visitPage(){
        await this.page.goto('https://www.saucedemo.com/')
    }
    async fillLogin(username,password){
       await this.page.locator("[data-test='username']").fill(username)
       await this.page.locator("[data-test='password']").fill(password)
    }
    async loginClick(){
       await this.page.locator("[data-test='login-button']").click()
    }
}
module.exports = LoginPage