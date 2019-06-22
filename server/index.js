var express = require("express");
var bodyParser = require("body-parser");
var { getPreferances } = require("../database-mysql");

var app = express();

app.use(express.static(__dirname + "/../react-client/dist"));

app.get("/listing", getPreferances);

app.listen(3001, function() {
  console.log("listening on port 3001!");
});
