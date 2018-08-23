//requires
var express = require('express');

//declare a new router
var router = express.Router();

//define routes
router.get('/', function(req, res){
	res.send('profile page');
});

module.exports = router;