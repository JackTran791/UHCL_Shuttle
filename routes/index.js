var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var accountSid = 'ACd4c1346ddbdca54ebd8a4fc8a9f5b977';
var authToken = '67a3195d6e64eb4ca90c5e4bac05ee1f';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/admin', urlencodedParser, function(req, res, next) {
  client.messages.create({
      from: "+12165038260",
      to: "+18329516415",
      body: req.body.txtMsg,
  }, function(err, message) {
      console.log(message.sid);
      // console.log("Error!");
      console.log(req.body.txtMsg);
  });
  res.render('sendDataSuccess');
  // res.send('Welcome ' + req.body.txtMsg);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/schedule', function(req, res, next) {
  res.render('schedule', { title: 'Express' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Express' });
});

router.get('/admin1', function(req, res, next) {
  res.render('admin1', { title: 'Express' });
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

router.get('/404', function(req, res) {
  res.render('404');
});

router.get('/sendDataSuccess', function(req, res, next) {
  res.render('sendDataSuccess', { title: 'Express' });
});


module.exports = router;
