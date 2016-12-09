package com.IMDb.app.frontend.pages;

import com.IMDb.app.frontend.common.data.InputParameters;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.safari.SafariOptions;

import java.util.concurrent.TimeUnit;

public class ParentWebPage {

    private static WebDriver webDriver;
    private static boolean active = false;
    private static final String homePageURL="http://www.imdb.com/";

    private static String browser;
    private final String DEFAULT_BROWSER = "firefox";

    private InputParameters inputParameters;

    public ParentWebPage() {
        inputParameters = new InputParameters();
    }

    public WebDriver getWebDriver() {
        if (!active) initWebDriver();
        return webDriver;
    }

    public void initWebDriver() {
        parseInputParameters();
        launchBrowser();
    }

    public void launchBrowser(){
        if (!active) {
            if (browser.equalsIgnoreCase("firefox")) {
                webDriver = new FirefoxDriver();
            } else if (browser.equalsIgnoreCase("chrome")) {
                System.setProperty("webdriver.chrome.driver", "src/test/resources/selenium-drivers/chromedriver");
                webDriver = new ChromeDriver();
            } else if (browser.equalsIgnoreCase("iexplorer")) {
                System.setProperty("webdriver.ie.driver", "src/test/resources/selenium-drivers/IEDriverServer.exe");
                webDriver = new InternetExplorerDriver();
            } else if (browser.equalsIgnoreCase("safari")) {
                System.setProperty("webdriver.safari.driver", "src/test/resources/selenium-drivers/SafariDriver.safariextz");
                DesiredCapabilities browserCapabilities = DesiredCapabilities.safari();
                browserCapabilities.setPlatform(Platform.MAC);
                SafariOptions safariOptions = new SafariOptions();
                safariOptions.setUseCleanSession(true);
                browserCapabilities.setCapability(SafariOptions.CAPABILITY, safariOptions);
                webDriver = new SafariDriver(browserCapabilities);
            }
            active = true;
            webDriver.manage().window().maximize();
            webDriver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        }
    }

    public void parseInputParameters(){
        if(System.getProperty("browser")!=null) browser = System.getProperty("browser");
        if (!inputParameters.isValidBrowser(browser)) browser = DEFAULT_BROWSER;
    }

    public String getHomePageURL() {
        return homePageURL;
    }

    public void setActiveStatus(boolean status) {
        active = status;
    }

    public String getBrowser(){ return browser;}
}
