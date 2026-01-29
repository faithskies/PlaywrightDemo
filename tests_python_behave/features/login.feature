Feature: Verify Login

  Scenario: Verify user is able to login with valid credentials
    Given I navigate to login page
    And I enter a VALID username and a valid password
    When I click on the login button 
    Then I should verify that login was successful

  Scenario: Verify that a user will fail to login with invalid credentials 
    Given I navigate to login page
    And I enter an INVALID username and a valid password
    When I click on the login button
    Then I should verify that login failed with Invalid username password error 