exports.TaskBoard = class TaskBoard {

   constructor(page){
      this.page = page
      this.implementUserAuth_header = page.getByRole('heading', { name: 'Implement user authentication' })
   
   }
   
   async tileByHeader(headerValue){
      let all_tile_data_by_header = await headerValue.locator('..').allTextContents()
      //it climbs up the directory to the div above it {.locator('..')} from the specified header.. then grabs all values from that upper div wrapper [aka the whole tile]
      return all_tile_data_by_header;
   }

   async columnByHeader(headerValue){
        
      let all_column_data_by_header = await headerValue.locator('..').locator('..').locator('..').allTextContents();
      //it climbs three divs up the directory {.locator('..')} from the specified header.. then grabs all values from that upper div wrapper [aka the columb]
      return all_column_data_by_header;
   }


/*
   async gotoLoginPage(){
    await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
   }

   async login(username, password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()

   } */
}