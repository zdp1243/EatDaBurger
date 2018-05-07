//Require Dependencies
var express = require("express");
var bodyparser = require("body-parser");
var exphbs = require("express-handlebars");

var db = require("./models");

//Set up PORT
var PORT = process.env.PORT || 3000;

var app = express();

// Serve static app content from "public" directory
app.use(express.static(process.cwd() + "/public"));

// Parse app/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse app/json
app.use(bodyParser.json());

//Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Start server to begin listening for client requests
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
