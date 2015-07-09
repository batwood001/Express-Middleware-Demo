var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// **BEGIN**
router.post('/first/:id', function(req, res, next){
  console.log('second route reached');
  console.log('body:', req.body.name);
  res.end('second\n')
});

router.post('*', 
	function(req, res, next){
	  console.log('first route reached');
	  console.log('body:', req.body.name);
	  req.body.name += ' Atwood'
	  next()
	}, 
	function(req, res, next) {
		req.body.name += ' Kimball ';
		next()
	}
);


module.exports = router;
