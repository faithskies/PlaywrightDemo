# PlaywrightDemo

This folder is specifically for evaluation based on the 6 proposed tests. 

For reference, I have used JavaScript quite a bit for API testing but this is my first time ever using Playwright. Its been about two days since I started this project. I know there are probably better ways to go about this and Id love to get the opportunity to learn further and adopt your preferred formats. 

I set up a GitHub project with a main and testbranch branch 
When I made some significant progress I pushed my tests to the  testbranch and when it was stable I pulled those changes to my main branch.

You can find the relevant test data under the LoopEvaluation folder. 
* In the requirements folder are the requirements and screenshots of the example demo page
* In the tests directory you have find two test files with multiple tests within them. 
    * the postLogin.spec contains the 6 specific tests you requested.   
    * the pre-Login.spec.js contains all of my learning/troubleshooting as I learned how to set up tests with an online tutorial on login pages. Its there if you want to see my progress but can be otherwise ignored. Mostly kept it to show my work and for simple examples.  
* In the pages directory I have three Page Object Classes I set up for major components along with a general helper class for other methods I reused. 
