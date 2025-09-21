exports.MainNavigation = class MainNavigation {
   //------- This class is used to store values and methods in regards to navigating the main navigation bar
   
   constructor(page) {

      this.page = page

      // the navigation buttons on the left menu
      this.WebApp_button = page.getByRole('button', { name: 'Web Application Main web' })
      this.MobileApp_button = page.getByRole('button', { name: 'Mobile Application Native' })
      this.MarketingCam_button = page.getByRole('button', { name: 'Marketing Campaign Q2' })

      //page banner heading along top center of page.. useful to check if Im on the correct page
      this.webApp_bannerheader = page.page.getByRole('banner').getByRole('heading', { name: 'Web Application' })
      this.mobApp_bannerheader = page.page.getByRole('banner').getByRole('heading', { name: 'Mobile Application' })
      this.MarketingCam_bannerheader = page.page.getByRole('banner').getByRole('heading', { name: 'Marketing Campaign' })

   }

   // Opens the Web App page
   async openWebApp() {
      await this.WebApp_button.click()
   }

   // Opens the Mobile App page
   async openMobileApp() {
      await this.MobileApp_button.click()
   }

   //Opens the Marketing Campaign page
   async openMarketingCam() {
      await this.MarketingCam_button.click()
   }
}