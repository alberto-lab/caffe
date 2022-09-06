var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');

});

router.get('/about', function(req, res, next) {
  res.render('about');

});

router.get('/roasting', function(req, res, next) {
  res.render('roasting');

});


router.get('/cours', function(req, res, next) {
  res.render('cours');

});

 
router.get('/contact', function(req, res, next) {
  res.render('contact');

});


module.exports = router;
