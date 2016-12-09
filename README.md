# Overview:

The tests will confirm the following,

1. The Top 250 (http://www.imdb.com/chart/top) page returns at least 1 movie​, in the list.

2. The previous should be true, for each of the sorting options.

3. The previous should also be true, when navigating to the Western​genre.

### Tech Stack
- Selenium Webdriver 
- Cucumber 
- Java 8
- Maven

### Pre-requisites
- Apache Maven 3.0.5
- Java version: 1.8.0_65
- Install Apache Maven and Java 1.8.0.
- Clone/download the project to the folder of your choice.
- Cd into the root folder
- Run the tests using maven - `mvn clean test -Dbrowser=browername`
    - Browser Name can be firefox and chrome
    - Tests also can be run with tags and other Cucumber options
      `mvn clean test -Dbrowser=firefox -Dcucumber.options=" --tags @Western"`

### Features
- Cross Browser testing: Test will run on the below browsers.
    - Chrome
    - Firefox version 46.0.1
- Reports: Html reports with screen-shots(for failed cases) will be available under test-report folder
- Running specific scenario is possible with the help of tags