# PlaywrightDemo
Example setup of Playwright for personal training

Some notes: 

- This tutorial very helpful in getting started since I havnt used PlayWright before. https://youtu.be/4_m3HsaNwOE?si=DzMALOKUangdOmib

- playwrights own website. Key info to keep at hand

-- Every test needs locators.. So far I primarily found locators via the Visual Studio Playwright extension 'identifiers'. It's in the above tutorial. For feference https://playwright.dev/docs/locators

-- assertions aka where you expect a result and then verify if that result was met. https://playwright.dev/docs/test-assertions

-- how to create a fixture https://playwright.dev/docs/test-fixtures#creating-a-fixture

-- how to do an action.. for example clicks. https://playwright.dev/docs/input


otherwise example code that is useful for reference: 

- const texts = await page.getByRole('link').allTextContents();
https://playwright.dev/docs/api/class-locator#locator-all-text-contents


- await page.pause();  great when running dev tools 




