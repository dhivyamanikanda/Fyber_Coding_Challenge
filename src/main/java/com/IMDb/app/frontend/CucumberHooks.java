package com.IMDb.app.frontend;

import com.IMDb.app.frontend.pages.ParentWebPage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

public class CucumberHooks extends ParentWebPage {

    @Before
    public void beforeScenario() {
        initWebDriver();
    }

    @After
    public void tearDown(Scenario scenario) {
        try {
            if (scenario.isFailed()) {
                final byte[] screenshot = ((TakesScreenshot) getWebDriver())
                        .getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            }
            getWebDriver().quit();
            setActiveStatus(false);
        }catch (WebDriverException exception) {exception.getMessage();}
    }
}
