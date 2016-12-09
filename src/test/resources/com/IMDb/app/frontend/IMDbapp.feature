Feature: IMDb app validation

  Scenario: User visit the home page and validate atleast one movie is available
    Given the user visits the home page
    Then the user is able to see atleast one movie

  @Western
  Scenario: User visit the home page and selects western Genre and see atleast one movie is available
    Given the user visits the home page
    When the user select western Genre
    Then the user is able to see atleast one movie in the western page

  @SortBy
  Scenario Outline: User visit the home page and validate for each sort atleast one movie is available
    Given the user visits the home page
    When the user sort by "<LIST>"
    Then the user is able to see atleast one movie

  Examples:
    |LIST             |
    |Ranking          |
    |IMDb Rating      |
    |Release Date     |
    |Number of Ratings|
    |Your Rating      |
