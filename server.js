// required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// configure express application
var app = express();
var PORT = process.env.PORT || 8080;

// public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});