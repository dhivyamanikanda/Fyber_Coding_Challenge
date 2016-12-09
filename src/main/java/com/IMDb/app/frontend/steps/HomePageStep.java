package com.IMDb.app.frontend.steps;

import com.IMDb.app.frontend.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

import static junit.framework.Assert.assertTrue;

public class HomePageStep {

    private final HomePage homePage;

    public HomePageStep(){
        homePage = new HomePage();
    }

    @Given("^the user visits the home page$")
    public void userVisitsHomePage() {
        homePage.launchHomePage();
    }

    @And("^the user is able to see atleast one movie$")
    public void userSuccessfullySeeMovieList() {
        Boolean value=homePage.isMovieAvailable();
        assertTrue(value);
    }

    @When("^the user sort by \"(.*?)\"$")
    public void userSortByList(String sortBy) {
        homePage.sortByItem(sortBy);
    }

    @When("^the user select western Genre$")
    public void userSelectWesternGenres() {
        homePage.selectWestern();
    }
}
