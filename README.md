# PlaywrightDemo
Example setup of Playwright for personal training

If this is for evaluation you can find the relevant test data under the LoopEvaluation folder https://github.com/faithskies/PlaywrightDemo/tree/testbranch/LoopEvaluation

I plan to add additional folders for tests of other sites. 

----------------------------------------------

# Useful references: 
This tutorial was very helpful in getting me started since I havn't used PlayWright before. https://youtu.be/4_m3HsaNwOE?si=DzMALOKUangdOmib

Playwrights Documentation. https://playwright.dev/docs/intro
Particularly useful pages for these tests: 
* Every test needs locators.. So far I primarily found locators via the Visual Studio Playwright extension 'identifiers'. It's in the above tutorial. For feference https://playwright.dev/docs/locators
* assertions aka where you expect a result and then verify if that result was met. https://playwright.dev/docs/test-assertions
* how to create a fixture https://playwright.dev/docs/test-fixtures#creating-a-fixture
* how to do an action.. for example clicks. https://playwright.dev/docs/input
* how to run the tests in Visual Studio https://github.com/faithskies/PlaywrightDemo/blob/testbranch/tests-examples/Notes.txt


otherwise example code that is useful for reference:
* await page.pause()  - great for debugging
* const texts = await page.getByRole('link').allTextContents(); https://playwright.dev/docs/api/class-locator#locator-all-text-contents
* await page.pause(); great when running dev tools