exports.MainNavigation = class MainNavigation {

   constructor(page){

    this.page = page
    this.WebApp_button = page.getByRole('button', { name: 'Web Application Main web' })
    this.MobileApp_button = page.getByRole('button', { name: 'Mobile Application Native' })
    this.MarketingCam_button = page.getByRole('button', { name: 'Marketing Campaign Q2' })
   }

   async openWebApp(){
    await this.WebApp_button.click()
    //Open the Web App page
   }

   async openMobileApp(){
    await this.MobileApp_button.click()
    //Open the MobileApp page
   }

   async openMarketingCam(){
    await this.MarketingCam_button.click()
    //Open the MarketingCampaign page
   }
}