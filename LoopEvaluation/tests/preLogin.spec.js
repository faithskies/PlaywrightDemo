// @ts-check
import { test, expect } from '@playwright/test';

// import pages specific functions etc  
import { LoginPage } from '../pages/login'
import { MainNavigation } from '../pages/mainNav'
import { HelperFunctions } from '../pages/helperFunctions'
import { TaskBoard } from '../pages/taskBoard'

// ------------------------------
//  These examples are early practice attempts for playwright
//-------------------------------


// important variables  - this could be moved to a separate page but, there arent many at this point
const valid_username = 'admin'
const valid_password = 'password123'

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

