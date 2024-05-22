var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });  
});
router.get('/add', function(req, res, next) {
  res.render('add');  
});

router.post('/add', function(req, res, next) {
  let x = parseInt(req.body.x);
  let y = parseInt(req.body.y);
  res.send(`${x}+${y}=${x+y}`);  
});


module.exports = router;
