# PlaywrightDemo
Example setup of Playwright with BDD / Behave for practice 


Installation : 
        pip install playwright
        pip install behave
      npm install -D @cucumber/cucumber@latest
      npm i -D @cucumber/cucumber@latest



# Given-when-then 

Given-when-then acceptance criteria is a type of syntax that is meant to define the context, action, and expected outcome in a specified scenario. In most cases, it breaks down in the following pattern:

- Given : This initial phase sets up the conditions for the test scenario. 
      - Example -  Given a new user is on the registration page
- When : To write this phase of the criteria, clearly and explicitly state the action being performed. Be sure to write the language of the test with the interaction or event that triggers the behavio
      - Example -  When the user submits valid registration information
- Then: The final phase of the given-when-then acceptance criteria covers the results or consequences of the test scenario.
      - Exmple - Then the user should receive a confirmation email

- And : combine multiple steps of the same type (Given, When, or Then) for better readability and structure within a scenario. 
      - Example -  Given: I have a cart  / And: The cart is empty / And: There is a product called "Prosecco Armani DOC" with a price of $20
      - Example - Then: The operation should be successful   / And: The cart should have been correctly updated / And: A confirmation message should be displayed