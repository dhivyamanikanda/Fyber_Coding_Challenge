package com.IMDb.app.frontend.steps;

import com.IMDb.app.frontend.pages.WesternPage;
import cucumber.api.java.en.Then;

import static junit.framework.Assert.assertTrue;

public class WesternPageStep {
    private final WesternPage westernPage;

    public WesternPageStep(){
        westernPage = new WesternPage();
    }

    @Then("^the user is able to see atleast one movie in the western page$")
    public void userVisitsWesternPage() {
        Boolean value=westernPage.isWesternMovieAvailable();
        assertTrue(value);
    }
}
