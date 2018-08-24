//require .env file's variable
require('dotenv').config();

//add your requires modules
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');
var flash = require('connect-flash');
var passport = require('./config/passportConfig');
var session = require('express-session');

//declare app variable
var app = express();

//set and use statements
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//custom middleware - fun!!
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.alerts = req.flash();
	next();
});

//include controllers
app.use('/auth', require('./controllers/auth'));
app.use('/profile', require('./controllers/profile'));
app.use('/birds', require('./controllers/birds'))

//define routes
app.get ('/', function(req, res){
	res.render('home');
});

//listen of port 300
app.listen(3000);