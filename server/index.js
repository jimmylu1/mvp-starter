var express = require("express");
var bodyParser = require("body-parser");
var {
  getPreferances,
  addPreferance,
  connection
} = require("../database-mysql");
const config = require("./apikey.js");
const Zomato = require("zomato.js");
const z = new Zomato("965609cb9c7ceea410a5afb69408a0c6");
const request = require("request");
const zomato = require("zomato");
const axios = require("axios");

var client = zomato.createClient({
  userKey: "API 965609cb9c7ceea410a5afb69408a0c6"
});

var app = express();

app.use(express.static(__dirname + "/../react-client/dist"));

app.get("/listing", getPreferances);
// app.post("/listing", addPreferance);

app.get("/listing", function(req, res) {
  if (!req.params.id) {
    res.status(500).send("no id");
  }
  console.log("getting");
  z.restaurant({
    res_id: 34383
  })
    .then(function(data) {
      // console.log(
      //   data.name,
      //   data.location.address,
      //   data.thumb,
      //   data.all_reviews_count
      // );
      connection.query(
        `insert into places (name, img, location, price) values('${
          data.name
        }', '${data.thumb}', '${data.location.address}', '${
          data.all_reviews_count
        }')`
      );
    })
    .catch(function(err) {
      console.error(err);
    });
});

// app.get("/listing", async (req, res) => {
//   try {
//     const { data } = await client.search({
//       q: "Cafe",
//       count: "5"
//     });
//     res.status(200).send(data);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

app.post("/listing", (req, res) => {
  console.log("req", req.params);
});

app.listen(3001, function() {
  console.log("listening on port 3001!");
});
