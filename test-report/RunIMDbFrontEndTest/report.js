$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/IMDb/app/frontend/IMDbapp.feature");
formatter.feature({
  "line": 1,
  "name": "IMDb app validation",
  "description": "",
  "id": "imdb-app-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1983511089,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User visit the home page and validate atleast one movie is available",
  "description": "",
  "id": "imdb-app-validation;user-visit-the-home-page-and-validate-atleast-one-movie-is-available",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the user visits the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user is able to see atleast one movie",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.userVisitsHomePage()"
});
formatter.result({
  "duration": 6827693891,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.userSuccessfullySeeMovieList()"
});
formatter.result({
  "duration": 43983708,
  "status": "passed"
});
formatter.after({
  "duration": 75817448,
  "status": "passed"
});
formatter.before({
  "duration": 1720187230,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User visit the home page and selects western Genre and see atleast one movie is available",
  "description": "",
  "id": "imdb-app-validation;user-visit-the-home-page-and-selects-western-genre-and-see-atleast-one-movie-is-available",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Western"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the user visits the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the user select western Genre",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the user is able to see atleast one movie in the western page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.userVisitsHomePage()"
});
formatter.result({
  "duration": 4476753130,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.userSelectWesternGenres()"
});
formatter.result({
  "duration": 5074673458,
  "status": "passed"
});
formatter.match({
  "location": "WesternPageStep.userVisitsWesternPage()"
});
formatter.result({
  "duration": 66615325,
  "status": "passed"
});
formatter.after({
  "duration": 82212834,
  "status": "passed"
});
formatter.before({
  "duration": 1387158002,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User visit the home page and validate for each sort atleast one movie is available",
  "description": "",
  "id": "imdb-app-validation;user-visit-the-home-page-and-validate-for-each-sort-atleast-one-movie-is-available;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SortBy"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "the user visits the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user sort by \"Ranking\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the user is able to see atleast one movie",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.userVisitsHomePage()"
});
formatter.result({
  "duration": 6582336405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ranking",
      "offset": 18
    }
  ],
  "location": "HomePageStep.userSortByList(String)"
});
formatter.result({
  "duration": 74172253,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.userSuccessfullySeeMovieList()"
});
formatter.result({
  "duration": 29960209,
  "status": "passed"
});
formatter.after({
  "duration": 77950101,
  "status": "passed"
});
formatter.before({
  "duration": 1512814398,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User visit the home page and validate for each sort atleast one movie is available",
  "description": "",
  "id": "imdb-app-validation;user-visit-the-home-page-and-validate-for-each-sort-atleast-one-movie-is-available;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SortBy"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "the user visits the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user sort by \"IMDb Rating\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the user is able to see atleast one movie",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.userVisitsHomePage()"
});
formatter.result({
  "duration": 5903490158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IMDb Rating",
      "offset": 18
    }
  ],
  "location": "HomePageStep.userSortByList(String)"
});
formatter.result({
  "duration": 616386078,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.userSuccessfullySeeMovieList()"
});
formatter.result({
  "duration": 62591482,
  "status": "passed"
});
formatter.after({
  "duration": 71956470,
  "status": "passed"
});
formatter.before({
  "duration": 1376157447,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User visit the home page and validate for each sort atleast one movie is available",
  "description": "",
  "id": "imdb-app-validation;user-visit-the-home-page-and-validate-for-each-sort-atleast-one-movie-is-available;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SortBy"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "the user visits the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user sort by \"Release Date\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the user is able to see atleast one movie",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.userVisitsHomePage()"
});
formatter.result({
  "duration": 5274400291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Release Date",
      "offset": 18
    }
  ],
  "location": "HomePageStep.userSortByList(String)"
});
formatter.result({
  "duration": 499262224,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.userSuccessfullySeeMovieList()"
});
formatter.result({
  "duration": 90118234,
  "status": "passed"
});
formatter.after({
  "duration": 81436561,
  "status": "passed"
});
formatter.before({
  "duration": 1703983153,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User visit the home page and validate for each sort atleast one movie is available",
  "description": "",
  "id": "imdb-app-validation;user-visit-the-home-page-and-validate-for-each-sort-atleast-one-movie-is-available;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SortBy"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "the user visits the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user sort by \"Number of Ratings\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the user is able to see atleast one movie",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.userVisitsHomePage()"
});
formatter.result({
  "duration": 5194877247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number of Ratings",
      "offset": 18
    }
  ],
  "location": "HomePageStep.userSortByList(String)"
});
formatter.result({
  "duration": 512026020,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.userSuccessfullySeeMovieList()"
});
formatter.result({
  "duration": 98123385,
  "status": "passed"
});
formatter.after({
  "duration": 76939664,
  "status": "passed"
});
formatter.before({
  "duration": 1458750915,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User visit the home page and validate for each sort atleast one movie is available",
  "description": "",
  "id": "imdb-app-validation;user-visit-the-home-page-and-validate-for-each-sort-atleast-one-movie-is-available;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@SortBy"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "the user visits the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user sort by \"Your Rating\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the user is able to see atleast one movie",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.userVisitsHomePage()"
});
formatter.result({
  "duration": 5658716496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Rating",
      "offset": 18
    }
  ],
  "location": "HomePageStep.userSortByList(String)"
});
formatter.result({
  "duration": 536040527,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.userSuccessfullySeeMovieList()"
});
formatter.result({
  "duration": 74267648,
  "status": "passed"
});
formatter.after({
  "duration": 75571764,
  "status": "passed"
});
});