Feature: Vacancy search
  As a visitor of the GloPros review application
  I want to search for vacancies
  So that I can view relevant opportunities

  @happy-path
  Scenario: Search vacancies by main job title
    Given the visitor opens the GloPros review homepage
    When the visitor opens Vacancy search
    And enters "Software Engineer" in Main job title
    And leaves location and dates empty
    And keeps the default distance of 100 km
    And submits the vacancy search using the search-icon button
    Then the URL contains "type=vacancies"
    And the URL contains "main_job_title[0]=Software Engineer"
    And a non-zero match count is shown
    And at least one vacancy result shows a title, location, and match percentage

  # The following scenarios are deliberately not automated yet. The assignment
  # does not define their product outcomes, so those outcomes must be confirmed
  # before assertions are introduced.

  @documented @pending
  Scenario: Search without a main job title
    Given the visitor is on Vacancy search
    When the visitor submits the search with an empty Main job title
    Then the product behaviour is confirmed before this scenario is automated

  @documented @pending
  Scenario: Search with a location filter
    Given the visitor is on Vacancy search
    When the visitor enters a main job title and selects a location
    Then the product behaviour is confirmed before this scenario is automated

  @documented @pending
  Scenario: Search with a date range
    Given the visitor is on Vacancy search
    When the visitor enters a main job title and selects start and end dates
    Then the product behaviour is confirmed before this scenario is automated

  @documented @pending
  Scenario: Search with a non-default distance
    Given the visitor is on Vacancy search
    When the visitor enters a main job title and changes the distance
    Then the product behaviour is confirmed before this scenario is automated

  @documented @pending
  Scenario: Search returns no matches
    Given the visitor is on Vacancy search
    When the visitor searches with criteria that return no matches
    Then the product behaviour is confirmed before this scenario is automated
