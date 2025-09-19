// @ts-check
import { test, expect } from '@playwright/test';

// import pages specific functions etc  
import {LoginPage } from '../pages/login'
import {MainNavigation} from '../pages/mainNav'
//import {} from '../pages/webApp'

// important variables  - this could be moved to a separate page but, there arent many at this point
const valid_username = 'admin'
const valid_password = 'password123'

test('Test Case 1 - WebApp - Confirm tags: "Feature" "High Priority”', async ({ page }) => {

  //login 
  const Login = new LoginPage(page)
  await Login.login(valid_username, valid_password)
  // valid username/password is set above as a const. Passes the values to a function withint the LoginPage class in the login.js file

  //navigate to Web App page
  const mainNav = new MainNavigation(page)
  await mainNav.openWebApp()
  // Uses function to ensure we are on the right page.. This could be removed since it seems that the Web App is automatically the default page after login, or you can future proof it in case the order of options changes? 

  await page.pause()

  //TODO: Verify "Implement user authentication" is in the "To Do" column


  //TODO: Confirm tags: "Feature" "High Priority”

  
});

test('Test Case 2 - WebApp - Verify Fix Nav bug', async ({ page }) => {

  //login 
  const Login = new LoginPage(page)
  await Login.login(valid_username, valid_password)
  // valid username/password is set above as a const. Passes the values to a function withint the LoginPage class in the login.js file

  //navigate to Web App page
  const mainNav = new MainNavigation(page)
  await mainNav.openWebApp()
  // Uses function to ensure we are on the right page.. This could be removed since it seems that the Web App is automatically the default page after login, or you can future proof it in case the order of options changes? 

  await page.pause()

  //TODO: Verify "Fix navigation bug" is in the "To Do" column

  //TODO: Confirm tags: "Bug"
  
});

test('Test Case 3 - WebApp - Verify Design System', async ({ page }) => {

  //login 
  const Login = new LoginPage(page)
  await Login.login(valid_username, valid_password)
  // valid username/password is set above as a const. Passes the values to a function withint the LoginPage class in the login.js file

  //navigate to Web App page
  const mainNav = new MainNavigation(page)
  await mainNav.openWebApp()
  // Uses function to ensure we are on the right page.. This could be removed since it seems that the Web App is automatically the default page after login, or you can future proof it in case the order of options changes? 

  await page.pause()

  //TODO: Verify "Design system updates" is in the "In Progress" column.


  // TODO: Confirm tags: "Design”
  
});



test('Test Case 4 - Mobile Application - Verify Push Not', async ({ page }) => {
  
  //login 
  const Login = new LoginPage(page)
  await Login.login(valid_username, valid_password)
  await page.pause()

  //navigate to WebApp page
  const MainNav = new MainNavigation(page)
  await MainNav.openMobileApp() 
  await expect(page.getByRole('banner').getByRole('heading', { name: 'Mobile Application' })).toBeVisible();
    //optional -- just ensures that the corrrect window was opened

  // TODO: Verify "Push notification system" is in the "To Do" column.

  // TODO: Confirm tags: "Feature”


});

test('Test Case 5 - Mobile Application - Verify Offline', async ({ page }) => {
  
  //login 
  const Login = new LoginPage(page)
  await Login.login(valid_username, valid_password)
  await page.pause()

  //navigate to WebApp page
  const MainNav = new MainNavigation(page)
  await MainNav.openMobileApp() 
  await expect(page.getByRole('banner').getByRole('heading', { name: 'Mobile Application' })).toBeVisible();
    //optional -- just ensures that the corrrect window was opened

  // TODO: Verify "Offline mode" is in the "In Progress" column.

  // TODO: Confirm tags: "Feature" & "High Priority”


});

test('Test Case 6 - Mobile Application - Verify App icon', async ({ page }) => {
  
  //login 
  const Login = new LoginPage(page)
  await Login.login(valid_username, valid_password)
  await page.pause()

  //navigate to WebApp page
  const MainNav = new MainNavigation(page)
  await MainNav.openMobileApp() 
  await expect(page.getByRole('banner').getByRole('heading', { name: 'Mobile Application' })).toBeVisible();
    //optional -- just ensures that the corrrect window was opened

  // TODO: Verify "App icon design" is in the "Done" column.

  // TODO: Confirm tags: "Design”


});



test('login page launches sucessfully', async ({ page }) => {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await expect(page).toHaveTitle("Vite + React + TS");
  // Expects page to have a heading with the name of Project Board Login
  await expect(page.getByRole('heading', { name: 'Project Board Login' })).toBeVisible();
});


test('login succesfull', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.login(valid_username, valid_password)
  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
});

test('login - failed due to invalid password', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.login(valid_username, 'wrongpass')
  await expect(page.getByText('Invalid username or password')).toBeVisible();

});

test('login - failed due to invalid username', async ({ page }) => {
  const Login = new LoginPage(page)
  //await Login.gotoLoginPage()
  await Login.login('addddddmmmmin', valid_password)
  await expect(page.getByText('Invalid username or password')).toBeVisible();

});

// Here are additional notes/ tests I made along the way. Leaving them to show my open note progress

/*
test('get started link', async ({ page }) => {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.pause()
}); */

test('super simple logging in without page object model', async ({ page }) => {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('password123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.pause()
  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  await page.pause()
});

test('Open Marketing Campaign window - Example', async ({ page }) => {
  
  //login 
  const Login = new LoginPage(page)
  //await Login.gotoLoginPage()
  await Login.login(valid_username, valid_password)
  //await page.pause()

  //navigate to WebApp page
  const MainNav = new MainNavigation(page)
  await MainNav.openMarketingCam() 
  //await page.pause()
  await expect(page.getByRole('banner').getByRole('heading', { name: 'Marketing Campaign' })).toBeVisible();
});

