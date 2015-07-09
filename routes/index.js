var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// **BEGIN DEMO**

// See what happens when you swap the order of the two following handlers:

router.post('/name', function(req, res, next){
  res.end(req.body.name)
});

router.post('*', 
  function(req, res, next){
    req.body.name += ' Kimball'
	  next()
  }, 
  function(req, res, next) {
    req.body.name += ' Atwood';
    next()
  }
);


module.exports = router;
