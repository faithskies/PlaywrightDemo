// @ts-check
import { test, expect } from '@playwright/test';

// import pages specific functions etc  
import { LoginPage } from '../pages/login'
import { MainNavigation } from '../pages/mainNav'
import { HelperFunctions } from '../pages/helperFunctions'
import { TaskBoard } from '../pages/taskBoard'



// important variables  - this could be moved to a separate page but, there arent many at this point
const valid_username = 'admin'
const valid_password = 'password123'

let resultFound
// setup for later expect.. This test is primarily checking to see if values exist. If the value is found it is true


// test.beforeEach(async ({ page }) => {
//   console.log('This runs once before all tests in this file.');

//    //------TODO: We assume that all tests start after being successfully logged in 
//   const Login = new LoginPage(page)
//   await Login.login(valid_username, valid_password)
//   // valid username/password is set above as a const. Passes the values to a function withint the LoginPage class in the login.js file

// });


test('Test Case 1 - WebApp - Implement user authentication - Confirm tags: "Feature" "High Priority”', async ({ page }) => {

  // setup for later expect.. This test is primarily checking to see if values exist. If the value is found it is true

  //------TODO: Successfully login 
  const Login = new LoginPage(page)
  await Login.login(valid_username, valid_password)
  // valid username/password is set above as a const. Passes the values to a function withint the LoginPage class in the login.js file


  //-----TODO: navigate to Web App page
  const mainNav = new MainNavigation(page)
  await mainNav.openWebApp()
  // Uses function to ensure we are on the right page.. This could be removed since it seems that the Web App is automatically the default page after login, or you can future proof it in case the order of options changes? 

  //----- TODO: Verify "Implement user authentication" is in the "To Do" column
  const taskBoard = new TaskBoard(page)
  const helperFunctions = new HelperFunctions()

  let allColumnDataByHeader = await taskBoard.columnByHeader(taskBoard.implementUserAuth_header)
  // we are passing the locator of the UserAuth header and then using that to up several directories to find all text that is within that column
  let searchvalue = 'To Do'
  resultFound = await helperFunctions.AllTextSearch(searchvalue, allColumnDataByHeader)
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchvalue + "'").toBe(true);
  //checks that the searchvalue 'To Do' was a value within that Column 


  //------ TODO: Confirm tags: "Feature" "High Priority”
  
  let allTileDataByHeader = await taskBoard.tileByHeader(taskBoard.implementUserAuth_header)
  // we are passing the locator of the UserAuth header to find all data within that specific tile
  

  const searchTileForValue = ['Feature', 'High Priority'];
  for (let i = 0; i < searchTileForValue.length; i++) {
        //console.log(searchTileForValue[i]); // Access element by index
        resultFound = await helperFunctions.AllTextSearch(searchTileForValue[i], allTileDataByHeader)
        await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchvalue + "'" ).toBe(true);
  
    } // checks if either 'Feature' or 'High Priority' is in the Tile data 

});

test('Test Case 2 - WebApp - Verify Fix Nav bug', async ({ page }) => {

  //------TODO: Successfully login 
  const Login = new LoginPage(page)
  await Login.login(valid_username, valid_password)
  // valid username/password is set above as a const. Passes the values to a function withint the LoginPage class in the login.js file

  //--------- TODO: navigate to Web App page
  const mainNav = new MainNavigation(page)
  await mainNav.openWebApp()
  // Uses function to ensure we are on the right page.. This could be removed since it seems that the Web App is automatically the default page after login, or you can future proof it in case the order of options changes? 

  await page.pause()

  //--------TODO: Verify "Fix navigation bug" is in the "To Do" column4

  const helperFunctions = new HelperFunctions()

  let allTextContents = await page.getByText('To Do (2)Implement user').allTextContents();
  // note this will likley break as soon as the order of the test data has changed. 
  let searchValue = 'Fix navigation bug'
  await helperFunctions.AllTextSearch(searchValue, allTextContents)


  //------TODO: Confirm tags: "Bug"
  allTextContents = await page.getByText('Fix navigation bugMenu does').allTextContents();
  searchValue = 'Bug'
  console.log(allTextContents);

  await helperFunctions.AllTextSearch(searchValue, allTextContents)
  // if the search value is not found then it fails the test 

});

test('Test Case 3 - WebApp - Verify Design System', async ({ page }) => {

  let resultFound

    //------TODO: Successfully login 
  const Login = new LoginPage(page)
  await Login.login(valid_username, valid_password)
  // valid username/password is set above as a const. Passes the values to a function withint the LoginPage class in the login.js file


  //------TODO: navigate to Web App page
  const mainNav = new MainNavigation(page)
  await mainNav.openWebApp()
  // Uses function to ensure we are on the right page.. This could be removed since it seems that the Web App is automatically the default page after login, or you can future proof it in case the order of options changes? 

  //------TODO: Verify "Design system updates" is in the "In Progress" column.

  const taskBoard = new TaskBoard(page)
  const helperFunctions = new HelperFunctions()

  let allColumnDataByHeader = await taskBoard.columnByHeader(taskBoard.DesignSys_header)
  // // we are passing the locator of the UserAuth header and then using that to up several directories to find all text that is within that column
  let searchvalue = 'In Progress'
  resultFound = await helperFunctions.AllTextSearch(searchvalue, allColumnDataByHeader)
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchvalue + "'" ).toBe(true);
  //checks that the searchvalue 'To Do' was a value within that Column 

  //------TODO: Confirm tags: "Design”
  let allTileDataByHeader = await taskBoard.tileByHeader(taskBoard.DesignSys_header)
  // we are passing the locator of the UserAuth header to find all data within that specific tile

  let searchValue = 'Design'
  resultFound = await helperFunctions.AllTextSearch(searchValue, allTileDataByHeader)
  console.log(resultFound);
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchvalue + "'" ).toBe(true);
  // // if the search value is not found then it fails the test

});



test('Test Case 4 - Mobile Application - Verify Push Not', async ({ page }) => {

  let resultFound

    //------TODO: Successfully login 
  const Login = new LoginPage(page)
  await Login.login(valid_username, valid_password)
  // valid username/password is set above as a const. Passes the values to a function withint the LoginPage class in the login.js file


  //------TODO: navigate to WebApp page
  const MainNav = new MainNavigation(page)
  await MainNav.openMobileApp()
  //await expect(page.getByRole('banner').getByRole('heading', { name: 'Mobile Application' })).toBeVisible();
  //optional -- just ensures that the corrrect window was opened


  //------TODO: Verify "Push notification system" is in the "To Do" column.

  const taskBoard = new TaskBoard(page)
  const helperFunctions = new HelperFunctions()

  let allColumnDataByHeader = await taskBoard.columnByHeader(taskBoard.PushNot_header) // we are passing the locator of the UserAuth header and then using that to up several directories to find all text that is within that column
  let searchvalue = 'To Do'
  resultFound = await helperFunctions.AllTextSearch(searchvalue, allColumnDataByHeader)
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchvalue + "'" ).toBe(true);
  //checks that the searchvalue 'To Do' was a value within that Column 

  //------TODO: TODO: Confirm tags: "Feature”

  let allTileDataByHeader = await taskBoard.tileByHeader(taskBoard.PushNot_header) // we are passing the locator of the UserAuth header to find all data within that specific tile
  let searchValue = 'Feature'
  resultFound = await helperFunctions.AllTextSearch(searchValue, allTileDataByHeader)
  console.log(resultFound);
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchvalue + "'" ).toBe(true);
  // if the search value is not found then it fails the test


});

test('Test Case 5 - Mobile Application - Verify Offline', async ({ page }) => {

  //------TODO: Successfully login 
  const Login = new LoginPage(page)
  await Login.login(valid_username, valid_password)
  // valid username/password is set above as a const. Passes the values to a function withint the LoginPage class in the login.js file


  //------TODO: navigate to WebApp page
  const MainNav = new MainNavigation(page)
  await MainNav.openMobileApp()
  await expect(page.getByRole('banner').getByRole('heading', { name: 'Mobile Application' })).toBeVisible();
  //optional -- just ensures that the corrrect window was opened

  await page.pause()

  //------TODO: Verify "Offline mode" is in the "In Progress" column.

  const taskBoard = new TaskBoard(page)
  const helperFunctions = new HelperFunctions()

      await page.pause()

  let allColumnDataByHeader = await taskBoard.columnByHeader(taskBoard.offlinemode_header) // we are passing the locator of the UserAuth header and then using that to up several directories to find all text that is within that column
  let searchvalue = 'In Progress'
  resultFound = await helperFunctions.AllTextSearch(searchvalue, allColumnDataByHeader)
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchvalue + "'" ).toBe(true);
  //checks that the searchvalue 'To Do' was a value within that Column 
  

  //------TODO: Confirm tags: "Feature" & "High Priority”
  
    let allTileDataByHeader = await taskBoard.tileByHeader(taskBoard.offlinemode_header)
  // we are passing the locator of the UserAuth header to find all data within that specific tile
  
  const searchTileForValue = ['Feature', 'High Priority'];
  for (let i = 0; i < searchTileForValue.length; i++) {
        //console.log(searchTileForValue[i]); // Access element by index
        resultFound = await helperFunctions.AllTextSearch(searchTileForValue[i], allTileDataByHeader)
        await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchvalue + "'" ).toBe(true);
  
    } // checks if either 'Feature' or 'High Priority' is in the Tile data 



});

test('Test Case 6 - Mobile Application - Verify App icon', async ({ page }) => {

    //------TODO: Successfully login 
  const Login = new LoginPage(page)
  await Login.login(valid_username, valid_password)
  // valid username/password is set above as a const. Passes the values to a function withint the LoginPage class in the login.js file


  //------TODO:navigate to WebApp page
  const MainNav = new MainNavigation(page)
  await MainNav.openMobileApp()
  await expect(page.getByRole('banner').getByRole('heading', { name: 'Mobile Application' }), "Expect the Mobile App page opened succesfully based on heading" ).toBeVisible();
  //optional -- just ensures that the corrrect window was opened

  //------TODO: Verify "App icon design" is in the "Done" column.

  const taskBoard = new TaskBoard(page)
  const helperFunctions = new HelperFunctions()

  let allColumnDataByHeader = await taskBoard.columnByHeader(taskBoard.appIconDesign_header) // we are passing the locator of the UserAuth header and then using that to up several directories to find all text that is within that column
  let searchvalue = 'Done'
  resultFound = await helperFunctions.AllTextSearch(searchvalue, allColumnDataByHeader)
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchvalue + "'" ).toBe(true);
  //checks that the searchvalue 'To Do' was a value within that Column 


  //------TODO: Confirm tags: "Design”

  
  let allTileDataByHeader = await taskBoard.tileByHeader(taskBoard.appIconDesign_header) // we are passing the locator of the UserAuth header to find all data within that specific tile
  let searchValue = 'Design'
  resultFound = await helperFunctions.AllTextSearch(searchValue, allTileDataByHeader)
  console.log(resultFound);
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchvalue + "'" ).toBe(true);
  // if the search value is not found then it fails the test


});

