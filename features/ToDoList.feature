Feature: To Do App

  Background: Go to Url
    Given Go to to do app url

  Scenario: Add button is working
    Given I type "buy some milk" input field
    When I click Add button
    Then I should see "buy some milk" task in to do list

  Scenario:
    Given I type "buy some milk" input field
    Given I click Add button
    When I type "enjoy the assignment" input field
    Given I click Add button
    Then I should see "enjoy the assignment" task in to do list with buy some milk

  Scenario:
    Given I type "buy some milk" input field
    Given I click Add button
    When I click Status Button
    Then I should see buy some milk task in to do list marked as

  Scenario:
    Given I type "buy some milk" input field
    Given I click Add button
    Given I click Status Button
    When I click Status Button
    Then I should see buy some milk task in to do list not marked as

  Scenario:
    Given I type "rest for a while" input field
    Given I click Add button
    When I click Delete button next to rest for a while
    Then I should see empty list
  @work
  Scenario:
    Given I type "rest for a while" input field
    Given I click Add button
    Given I type "drink water" input field
    Given I click Add button
    When I click Delete button next to rest for a while
    Then I should see "drink water"
