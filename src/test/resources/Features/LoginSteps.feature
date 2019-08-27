Feature: Validate the demo automation site

  Scenario: Validate registration details
    Given User is on demo site
    When User enters the details
      | archana | subbian | chennai | archana.sk95@gmail.com | 9003261856 | Archana$123 | Archana$123 |
    Then Verify url contains WebTable
