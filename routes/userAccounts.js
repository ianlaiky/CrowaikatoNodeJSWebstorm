
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var querystring = require('querystring');
var https = require('https');

var router = express.Router();


var SECRET = "6LdwBzwUAAAAAKavgcoL75Y4lF7QUQPKQyt_e6Qk";
// POST request to google recaptcha
function verifyRecaptcha(key, callback) {
    console.log("RESPONSE IS: " + key)
    //declare above var querystring = require('querystring') on top
    var post_data = querystring.stringify({
        'secret': SECRET,
        'response': key
    });

    var post_options = {
        host: 'www.google.com',
        port: '443',
        method: 'POST',
        path: '/recaptcha/api/siteverify',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(post_data)
        }
    };
    var req = https.request(post_options, function (res) {
        var data = "";
        res.on('data', function (chunk) {
            data += chunk.toString();
        });
        res.on('end', function () {
            try {
                var parsedData = JSON.parse(data);
                console.log("PARSED data "+data)
                console.log("PARSED data "+parsedData)
                callback(parsedData.success);
            } catch (e) {
                callback(false);
            }
        });
    });
    req.write(post_data);
    req.end();
    req.on('error', function (err) {
        console.error(err);
    });
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/register', function(req, res, next) {
    res.render('registeration',{layout: 'layout/layout'});
})


// response

router.post('/loginBackend', function (req, res) {
    console.log(req.body);


    //https://codeforgeek.com/2016/03/google-recaptcha-node-js-tutorial/
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.json({"responseCode": 1, "responseDesc": "Please select captcha"});
    }

    // Put your secret key here.


    // Hitting GET request to the URL, Google will respond with success or error scenario.


    verifyRecaptcha(req.body["g-recaptcha-response"], function (success) {
        if (success) {
            res.json({"responseCode": 0, "responseDesc": "Sucess"});
        } else {
            res.json({"responseCode": 1, "responseDesc": "Failed captcha verification"});
        }
    });


    // res.sendStatus(200);
    // res.render
    // res.render('index',{layout: 'layout/layout'});
});

module.exports = router;
