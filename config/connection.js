//Set up MySQL connection
var mysql = require("mysql");
var bodyparser = require("body-parser");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "HyacinthusDionysus7219!!",
  database: "burgers_db"
});

//Make connection

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id" + connection.threadId);
});

//Export connection for ORM use
module.exports = connection;
