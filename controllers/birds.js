//requires
var express = require('express');

//declare a new router
var router = express.Router();

//get authorization helper function
var loggedIn = require('../middleware/loggedIn');

//require the database
var db = require('../models')

//define routes
router.get('/', loggedIn, function(req, res){
	db.bird.findAll({
		where: { userId: req.user.id }
	}).then(function(birds){
		res.render('birds/index', { birds: birds });
	}).catch(function(err){
		res.send('oops')
	})
});

module.exports = router;