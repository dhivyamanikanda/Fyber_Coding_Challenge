package com.IMDb.app.frontend.pages;

import org.openqa.selenium.By;

public class WesternPage extends ParentWebPage{

    private final By western= By.cssSelector(".lister-list > div:nth-of-type(1) > .lister-item-content > .lister-item-header > a");

    public boolean isWesternMovieAvailable() {
        return getWebDriver().findElement(western).isDisplayed();
    }
}
