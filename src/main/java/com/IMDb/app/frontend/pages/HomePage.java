package com.IMDb.app.frontend.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

public class HomePage extends ParentWebPage {

    private final static String TOP_PAGE_URL = "chart/top";
    private final By sortByDropdown= By.name("sort");
    private final By western= By.cssSelector(".quicklinks > li:nth-of-type(21) > a");

    public void launchHomePage() {
        getWebDriver().navigate().to(getHomePageURL() + TOP_PAGE_URL);
    }

    public boolean isMovieAvailable(){
        return getWebDriver().findElement(By.cssSelector(".lister-list > tr:nth-of-type(1) > .titleColumn")).isDisplayed();
    }

    public void sortByItem(final String sortByList) {
        Select sortBy = new Select(getWebDriver().findElement(sortByDropdown));
        sortBy.selectByVisibleText(sortByList);
    }

    public void selectWestern() {
        getWebDriver().findElement(western).click();
    }
}
