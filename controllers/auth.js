//requires
var express = require('express');
var passport = require('../config/passportConfig');


//include models
var db = require('../models')

//declare a new router
var router = express.Router();

//define routes
router.get('/login', function(req, res){
	res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
	successRedirect: '/profile',
	successFlash: 'Successfully logged in!',
	failureRedirect: '/auth/login',
	failureFlash: 'Invalid Username or Password!'
}));

router.get('/signup', function(req, res){
	res.render('auth/signup');
});

router.post('/signup', function(req, res){
	console.log(req.body)
	req.body.admin = false;
	db.user.findOrCreate({
		where: { email: req.body.email },
		defaults: req.body
	}).spread(function(user, wasCreated){
		console.log("inside spread function!");
		if(wasCreated){ //this is expected behavior
			//automatically log user in
			passport.authenticate('local', {
				successRedirect: '/profile',
				successFlash: 'Successfully logged in!',
				failureRedirect: '/',
				failureFlash: 'Oh no!'
			})(req, res);
			console.log('created', wasCreated)
			res.redirect('/profile')
		} else { //user messed up, they already have a login
			//TODO: send user an error message!
			console.log('NOT WORKING', wasCreated)
			res.redirect('/auth/login');

		}
	}).catch(function(err){
		res.send(err);
	});
});

router.get('/logout', function(req, res){
	res.send('logout page')
})

module.exports = router;