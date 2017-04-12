var express = require('express');
var router = express.Router();
var firebase = require('firebase');


var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });



// router.get('/', function(req, res, next) {
//   res.render('admin');
// });

router.get('/index', function(req, res) {
  res.render('index');
});

router.get('/login', function(req, res) {
  res.render('login');
});

module.exports = router;
