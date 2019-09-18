$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/LoginSteps.feature");
formatter.feature({
  "name": "Validate the demo automation site",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate registration details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on demo site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.user_is_on_demo_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the details",
  "rows": [
    {
      "cells": [
        "archana",
        "subbian",
        "chennai",
        "archana.sk95@gmail.com",
        "9003261856",
        "Archana$123",
        "Archana$123"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.user_enters_the_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify url contains WebTable",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.verify_url_contains_WebTable()"
});
formatter.result({
  "status": "passed"
});
});