Feature: Displaying party dashboard

  Scenario: Party Started
    When The current song is
      | song title | Welcome to the Jungle | 
      | artist     | Guns & Roses |
    Then I should see the following song
      | song title | Welcome to the Jungle | 
      | artist     | Guns & Roses |