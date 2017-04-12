var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/public', function(req, res) {
  res.render('public');
});

router.get('/help', function(req, res) {
  res.render('help');
});

router.get('/private', function(req, res) {
  res.render('private');
});

router.get('/account', function(req, res) {
  res.render('account');
});

router.get('/ack', function(req, res) {
  res.render('ack');
});

router.get('/error', function(req, res) {
  res.render('error');
});
module.exports = router;
