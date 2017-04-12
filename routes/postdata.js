var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

var accountSid = 'ACd4c1346ddbdca54ebd8a4fc8a9f5b977';
var authToken = '67a3195d6e64eb4ca90c5e4bac05ee1f';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req, res, next) {
  res.render('postdata', {postdataE : 'Post Data'});
});

router.post('/', urlencodedParser, function(req, res, next) {
  client.messages.create({
      from: "+12165038260",
      to: "+18329516415",
      body: req.body.textMsg,
  }, function(err, message) {
      console.log(message.sid);
  });
  res.send('Welcome ' + req.body.textMsg);
});

module.exports = router;
