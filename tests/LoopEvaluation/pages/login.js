exports.LoginPage = class LoginPage {
     //---- This class is meant to store any values & methods in regards to the login page

     constructor(page) {
          this.page = page
          this.testWebsite = 'https://animated-gingersnap-8cf7f2.netlify.app/'
          this.username_textbox = page.getByRole('textbox', { name: 'Username' })
          this.password_textbox = page.getByRole('textbox', { name: 'Password' })
          this.login_button = page.getByRole('button', { name: 'Sign in' })
     }

     // use this method if you want to pass different [aka invalid] values for some negative tests.. or if you need to sign in as a different user 
     async login(username, password) {
          await this.page.goto(this.testWebsite);
          await this.username_textbox.fill(username)
          await this.password_textbox.fill(password)
          await this.login_button.click()
     }

     // use this method if the end goal is being logged in without having to pass any values
     async succesfulLogin() {
          const valid_username = 'admin'
          const valid_password = 'password123'
          await this.login(valid_username, valid_password)
     }

}