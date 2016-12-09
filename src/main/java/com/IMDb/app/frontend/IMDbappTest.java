package com.IMDb.app.frontend;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@Cucumber.Options(
        features = "src/test/resources",
        glue = "com.IMDb.app.frontend",
        format = { "html:test-report/RunIMDbFrontEndTest", "rerun:failed-scenarios.txt" })

public class IMDbappTest {

}