exports.TaskBoard = class TaskBoard {
   //-- this class is set up to store any values or methods in regards to the taskboards [with the 'ToDo', 'In Progress' etc ]
   //-- These taskboards are a significant component that appear on several pages such as WebApp and MobileApp  

   constructor(page){
      this.page = page

      //these are all individual tile headings.
      this.implementUserAuth_header = page.getByRole('heading', { name: 'Implement user authentication' })
      this.DesignSys_header = page.getByRole('heading', { name: 'Design system updates' })
      this.PushNot_header = page.getByRole('heading', { name: 'Push notification system' })
      this.fixNavigationBug_header = page.getByRole('heading', { name: 'Fix navigation bug' })
      this.offlinemode_header = page.getByRole('heading', { name: 'Offline mode' })
      this.appIconDesign_header = page.getByRole('heading', { name: 'App icon design' })
   
   }
   
   // If you have the tile header, this pulls allTextContents from the whole tile.. it simply moves up the div directory
   async tileByHeader(headerValue){
      let all_tile_data_by_header = await headerValue.locator('..').allTextContents()
      return all_tile_data_by_header;
   }

   // If you have the tile header,this pulls allTextContents from the whole column.. it simply moves further up the div directory
   async columnByHeader(headerValue){
      let all_column_data_by_header = await headerValue.locator('..').locator('..').locator('..').allTextContents();
      return all_column_data_by_header;
   }

}