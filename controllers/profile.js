//requires
var express = require('express');

//declare a new router
var router = express.Router();

//define routes
router.get('/', function(req, res){
	res.render('profile/profile');
});

module.exports = router;