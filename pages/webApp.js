exports.LoginPage = class LoginPage {

   constructor(page){

    this.page = page
    this.username_textbox = page.getByRole('textbox', { name: 'Username' })
    this.password_textbox = page.getByRole('textbox', { name: 'Password' })
    this.login_button = page.getByRole('button', { name: 'Sign in' })
   }

   async gotoLoginPage(){
    await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
   }

   async login(username, password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()

   }

}