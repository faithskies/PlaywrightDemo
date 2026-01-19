// @ts-check
import { test, expect } from '@playwright/test';

// import pages specific functions etc  
import { LoginPage } from '../LoopEvaluation/pages/login'
import { MainNavigation } from '../LoopEvaluation/pages/mainNav'
import { HelperFunctions } from '../LoopEvaluation/pages/helperFunctions'
import { TaskBoard } from '../LoopEvaluation/pages/taskBoard'

// setup for later expect assertions.. This test is primarily checking to see if the search values exist. If the value is found it is true.
let resultFound


test('Test Case 1 - WebApp - Implement user authentication - Confirm tags: "Feature" "High Priority”', async ({ page }) => {
  const Login = new LoginPage(page);
  const mainNav = new MainNavigation(page);
  const taskBoard = new TaskBoard(page)
  const helperFunctions = new HelperFunctions()

  //------ Successfully login  & naviagte to correct page 
  await Login.succesfulLogin();
  await mainNav.openWebApp()
  await expect(mainNav.webApp_bannerheader).toBeVisible() //optional test -- just ensures that the corrrect window was opened

  //-----  Verify "Implement user authentication" is in the "To Do" column
  // passes the locator of the specified header and then using that to go up several directories to find all text that is within that column
  let allColumnDataByHeader = await taskBoard.columnByHeader(taskBoard.implementUserAuth_header)
  let searchValueColumn = 'To Do'
  // checks on whether the 'To Do' is anywhere within the column that the 'Implement user authentication'
  resultFound = await helperFunctions.AllTextSearch(searchValueColumn, allColumnDataByHeader)
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchValueColumn + "'").toBe(true);

  //------  Confirm tags: "Feature" "High Priority” are in the tile
  // we are passing the locator of the UserAuth header and then using that to up several directories to find all text that is within that tile
  let allTileDataByHeader = await taskBoard.tileByHeader(taskBoard.implementUserAuth_header)
  let searchForValues = ['Feature', 'High Priority'];
  resultFound = await helperFunctions.multipleSearchTerms(searchForValues, allTileDataByHeader); // we call on multipleSearchTerms since we are passing an array
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValues: '" + searchForValues + "'").toBe(true);


});

test('Test Case 2 - WebApp - Verify Fix Nav bug', async ({ page }) => {
  const Login = new LoginPage(page);
  const mainNav = new MainNavigation(page);
  const taskBoard = new TaskBoard(page)
  const helperFunctions = new HelperFunctions()

  //------ Successfully login 
  await Login.succesfulLogin()

  //---------  navigate to Web App page
  await mainNav.openWebApp()

  //--------- Verify "Fix navigation bug" is in the "To Do" column
  // we are passing the locator of the specified header and then using that to go up several directories to find all text that is within that column
  let allColumnDataByHeader = await taskBoard.columnByHeader(taskBoard.fixNavigationBug_header)
  let searchValueColumn = 'To Do'
  resultFound = await helperFunctions.AllTextSearch(searchValueColumn, allColumnDataByHeader)
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchValueColumn + "'").toBe(true);

  //------ Confirm tags: "Bug" in tile 
  // we are passing the locator of the UserAuth header and then using that to up several directories to find all text that is within that tile
  let allTileDataByHeader = await taskBoard.tileByHeader(taskBoard.fixNavigationBug_header)
  let searchValueTile = 'Bug'
  resultFound = await helperFunctions.AllTextSearch(searchValueTile, allTileDataByHeader)
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchValueTile + "'").toBe(true);

});

test('Test Case 3 - WebApp - Verify Design System', async ({ page }) => {
  const Login = new LoginPage(page);
  const mainNav = new MainNavigation(page);
  const taskBoard = new TaskBoard(page)
  const helperFunctions = new HelperFunctions()

  //------ Successfully login 
  await Login.succesfulLogin()

  //------ navigate to Web App page
  await mainNav.openWebApp()

  //------ Verify "Design system updates" is in the "In Progress" column.
  // we are passing the locator of the specified header and then using that to go up several directories to find all text that is within that column
  let allColumnDataByHeader = await taskBoard.columnByHeader(taskBoard.DesignSys_header)
  let searchValueColumn = 'In Progress'
  resultFound = await helperFunctions.AllTextSearch(searchValueColumn, allColumnDataByHeader)
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchValueColumn + "'").toBe(true);

  //------ Confirm tags: "Design” is in the tile
  // we are passing the locator of the UserAuth header and then using that to up several directories to find all text that is within that tile
  let allTileDataByHeader = await taskBoard.tileByHeader(taskBoard.DesignSys_header)
  // sets up an array of values to search for. Note, this one techncially only has one value so it could be a variable instead and pass it striaght to AllTextSearch however if we wanted to reuse this for multiple tests, setting it an array could be consistent if there are more often several variables
  let searchTileForValues = ['Design'];
  resultFound = await helperFunctions.multipleSearchTerms(searchTileForValues, allTileDataByHeader);
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchTileForValues + "'").toBe(true);
});



test('Test Case 4 - Mobile Application - Verify Push Not', async ({ page }) => {
  const Login = new LoginPage(page);
  const mainNav = new MainNavigation(page);
  const taskBoard = new TaskBoard(page)
  const helperFunctions = new HelperFunctions()

  //------ Successfully login 
  await Login.succesfulLogin()

  //------ navigate to WebApp page
  await mainNav.openMobileApp()

  //------ Verify "Push notification system" is in the "To Do" column.
  // we are passing the locator of the specified header and then using that to go up several directories to find all text that is within that column
  let allColumnDataByHeader = await taskBoard.columnByHeader(taskBoard.PushNot_header)

  let searchValueColumn = 'To Do'
  // checks on whether the 'To Do' is anywhere within the column that the 'Implement user authentication'
  resultFound = await helperFunctions.AllTextSearch(searchValueColumn, allColumnDataByHeader)
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchValueColumn + "'").toBe(true);

  //------  Confirm tags: "Feature” exists in the tile
  // we are passing the locator of the UserAuth header and then using that to up several directories to find all text that is within that tile
  let allTileDataByHeader = await taskBoard.tileByHeader(taskBoard.PushNot_header)
  let searchValueTile = 'Feature'
  resultFound = await helperFunctions.AllTextSearch(searchValueTile, allTileDataByHeader)
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchValueTile + "'").toBe(true);

});

test('Test Case 5 - Mobile Application - Verify Offline', async ({ page }) => {
  const Login = new LoginPage(page);
  const mainNav = new MainNavigation(page);
  const taskBoard = new TaskBoard(page)
  const helperFunctions = new HelperFunctions()

  //------ Successfully login 
  await Login.succesfulLogin()

  //------ navigate to WebApp page
  await mainNav.openMobileApp()

  //------ Verify "Offline mode" is in the "In Progress" column.
  // we are passing the locator of the specified header and then using that to go up several directories to find all text that is within that column
  let allColumnDataByHeader = await taskBoard.columnByHeader(taskBoard.offlinemode_header)
  let searchValueColumn = 'In Progress'
  resultFound = await helperFunctions.AllTextSearch(searchValueColumn, allColumnDataByHeader)
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchValueColumn + "'").toBe(true);

  //------ Confirm tags: "Feature" & "High Priority” are in the tile
  // we are passing the locator of the UserAuth header and then using that to up several directories to find all text that is within that tile
  let allTileDataByHeader = await taskBoard.tileByHeader(taskBoard.offlinemode_header)
  let searchForValues = ['Feature', 'High Priority'];
  resultFound = await helperFunctions.multipleSearchTerms(searchForValues, allTileDataByHeader);
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchForValues + "'").toBe(true);

});

test('Test Case 6 - Mobile Application - Verify App icon', async ({ page }) => {
  const Login = new LoginPage(page);
  const mainNav = new MainNavigation(page);
  const taskBoard = new TaskBoard(page)
  const helperFunctions = new HelperFunctions()

  //------ Successfully login 
  await Login.succesfulLogin()

  //------ navigate to WebApp page
  await mainNav.openMobileApp()

  //------ Verify "App icon design" is in the "Done" column.
  // we are passing the locator of the specified header and then using that to go up several directories to find all text that is within that column
  let allColumnDataByHeader = await taskBoard.columnByHeader(taskBoard.appIconDesign_header) // we are passing the locator of the UserAuth header and then using that to up several directories to find all text that is within that column
  let searchValueColumn = 'Done'
  resultFound = await helperFunctions.AllTextSearch(searchValueColumn, allColumnDataByHeader)
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchValueColumn + "'").toBe(true);
  //checks that the searchvalue 'To Do' was a value within that Column 

  //------ Confirm tags: "Design” exists in tile
  // we are passing the locator of the specified header and then using that to up several directories to find all text that is within that tile
  let allTileDataByHeader = await taskBoard.tileByHeader(taskBoard.appIconDesign_header) // we are passing the locator of the UserAuth header to find all data within that specific tile
  let searchValueTile = 'Design'
  resultFound = await helperFunctions.AllTextSearch(searchValueTile, allTileDataByHeader)
  console.log(resultFound);
  await expect(resultFound, "Expect search value to exist in the list, if it does not it fails. searchValue: '" + searchValueTile + "'").toBe(true);
});

