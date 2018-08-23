//add your requires modules
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');
var passport = require('passport');
var session = require('express-session');

//declare app variable
var app = express();

//set and use statements
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: false }));

//define routes
app.get ('/', function(req, res){
	res.send('hi from home route');
});

//listen of port 300
app.listen(3000);