Feature: Newspaper edition download

    As a user, I want to be able to download an edition in the newspaper, so that I can read it.

    Scenario: Verify the Newspaper edition is downloadable
        Given I launch the app
        And I navigate to issues home page
        When I scroll to "Recent issues" in Issues carousel page
        And I scroll right to "SEE MORE" in Recent Issues and tap on it in Issues carousel page
        And I scroll and tap on "6 January 2024" edition in Archive tab
        And I "Sign in" with valid credentials on the paywall carousel
        Then I should wait for "Saturday, 6 January" edition download to complete on Front page tab

    Scenario: Verify the Gallery Section in the downloaded edition
        Given I am on the "Saturday, 6 January" on "Front page" tab
        When I scroll to page 3 of the news page
        And I tap on the article image on the news "3 of 232" page
        And I tap on the image to open full screen on "The squeaky-clean mouse" ALB story "5 of 216" page
        And I scroll through all gallery images
        And I click on close button on the last image
        Then I should return to "The squeaky-clean mouse" ALB story "5 of 216" page