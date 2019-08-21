var mysql = require("mysql");
const config = require("./config.js");
// const faker = require("faker");

var connection = mysql.createConnection(config);

connection.connect(function(err) {
  if (err) throw err;
  console.log("MYSQL CONNECTED");
});

const getPreferances = (req, res) => {
  const query =
    // "select * from places inner join preferances on places.id = preferances.placeid inner join users on users.id = preferances.userid = 1;";
    "select * from places";
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};

const addPreferance = (req, res) => {
  const { input } = req.body;
  const query = "insert into `places`(name) values(Leopold Cafe & Bar)";
  connection.query(query, input, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send("Preferance added!");
    }
  });
};
module.exports = { getPreferances, addPreferance, connection };
