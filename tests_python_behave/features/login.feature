Feature: Verify Login

  Scenario: Verify user is able to login with valid credentials
    Given I navigate to login page
    When I enter a valid username and a valid password
    Then I should verify that it displays Welcome
