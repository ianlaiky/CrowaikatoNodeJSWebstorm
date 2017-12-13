var express = require('express');
var querystring = require('querystring');
var https = require('https');
var passport = require('passport')

var router = express.Router();


var SECRET = "6LdwBzwUAAAAAKavgcoL75Y4lF7QUQPKQyt_e6Qk";

// POST request to google recaptcha
function verifyRecaptcha(key, callback) {
    console.log("RESPONSE IS: " + key);
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
                console.log("PARSED data " + data);
                console.log("PARSED data " + parsedData);
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


/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.render('index', {layout: 'layout/layout'});
});


router.get('/register', function (req, res, next) {
    // res.render('index', { title: 'Express' });


    var messages = req.flash('error');
    console.log(messages);
    console.log(messages.length);
    console.log(messages.length>0);


    res.render('registration', {layout: 'layout/layout',messages:messages,hasError:messages.length>0,success: req.session.success});
    req.session.errors = null;
});

router.post("/registerForm", passport.authenticate('local.signup',{

    successRedirect : '/register', // redirect to the secure profile section
    failureRedirect : '/register', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));


module.exports = router;
