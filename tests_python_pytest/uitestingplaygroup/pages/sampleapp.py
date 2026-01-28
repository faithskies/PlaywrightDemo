from playwright.sync_api import Page, Locator, sync_playwright  

class SampleApp: # This class is meant to store any values & methods in regards to the login page
    def __init__(self, page: Page):
        self.page = page
        # Define locators for elements on the page.
        self.testwebsite = 'http://uitestingplayground.com/sampleapp'
        self.username_textbox = page.getByRole('textbox', { name: 'UserName' })
        self.password_textbox = page.getByRole('textbox', { name: 'Password' })
        self.login_button = page.getByText('Log In')
        self.heading = page.get_by_role("heading", name="Sample App")


#TBD turn javascript to python
     # # use this method if you want to pass different [aka invalid] values for some negative tests.. or if you need to sign in as a different user 
     # async def login(username, password):
     #      await this.page.goto(this.testWebsite)
     #      await this.username_textbox.fill(username)
     #      await this.password_textbox.fill(password)
     #      await this.login_button.click()
                       
#      constructor(page) {
#           this.page = page
#           this.testWebsite = 'http://uitestingplayground.com/sampleapp'
#           this.username_textbox = page.getByRole('textbox', { name: 'Username' })
#           this.password_textbox = page.getByRole('textbox', { name: 'Password' })
#           this.login_button = page.getByRole('button', { name: 'Sign in' })
#      }

#      // use this method if the end goal is being logged in without having to pass any values
#      async succesfulLogin() {
#           const valid_username = 'admin'
#           const valid_password = 'password123'
#           await this.login(valid_username, valid_password)
#      }

