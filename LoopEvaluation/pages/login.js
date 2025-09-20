exports.LoginPage = class LoginPage {

   constructor(page){
    // important variables  - this could be moved to a separate page but, there arent many at this point

    this.page = page
    this.username_textbox = page.getByRole('textbox', { name: 'Username' })
    this.password_textbox = page.getByRole('textbox', { name: 'Password' })
    this.login_button = page.getByRole('button', { name: 'Sign in' })
   }

   async gotoLoginPage(){
    await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    // note this is not currently used.. but you could use this for a simple test case of login elemements 
   }


   async login(username, password){
        await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()

   }

    async succesfulLogin(){
        const valid_username = 'admin'
        const valid_password = 'password123'
        await this.login(valid_username, valid_password)

   }

}