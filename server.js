// var path = require("path");
var express = require("express");

var app = express();

// var path = path();

var PORT = process.env.PORT || 8080;

//handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//require the routes
require('./app/routing/apiRoutes.js')(app);
require("./app/routing/htmlRoutes")(app);


//show that the server is listening
app.listen(PORT,function(){
    console.log('App is listening on Port: '+ PORT);
})