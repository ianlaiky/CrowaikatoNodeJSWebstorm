var express = require('express');
var querystring = require('querystring');
var https = require('https');
var passport = require('passport');

var router = express.Router();


// Google captcha
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


router.post("/contactUsSubmit", isLoggedout, (req, res, next) => {


    var captchaValidationResult = false;
    console.log("before" + captchaValidationResult);
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        captchaValidationResult = false;

    }
    verifyRecaptcha(req.body["g-recaptcha-response"], function (success) {

        if (success) {
            captchaValidationResult = true;
            console.log("aftwer Captcha " + captchaValidationResult)
            // return res.json({"responseCode": 0, "responseDesc": "Sucess"});
        } else {
            captchaValidationResult = false;
            // return res.json({"responseCode": 1, "responseDesc": "Failed captcha verification"});
        }


        console.log("VALICDATION OF CAPTCHSA" + captchaValidationResult);
        console.log(req.body);

        req.check('name', "Please enter something").trim().notEmpty();
        req.check('name', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});

        req.check('email', "Please enter a valid email").trim().notEmpty().isEmail();
        req.check('email', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});

        req.check('phone', 'Invalid phone No').trim().matches(/^[+][\d]+$/, "i");
        req.check('phone', 'Reached Character Limit (Max: 200)').trim().notEmpty().isLength({max:200});


        req.check('message', 'Reached Character Limit (Max: 200)').trim().notEmpty().isLength({max:200});




    });

    // console.log(req.body);


});

/* GET home page. */
router.get('/', isLoggedout, function (req, res, next) {

    var messages = req.flash('errorLogin');
    console.log(messages);
    console.log(messages.length);
    console.log(messages.length > 0);
    res.render('index', {layout: 'layout/layout', messages: messages, hasError: messages.length > 0});
});
// router.get('/artest', function (req, res, next) {
//
//
//     res.render('artest');
// });

/* GET home page. */
router.get('/error', function (req, res, next) {


    res.render('error', {layout: 'layout/layout'});

});


router.get('/errorSession', function (req, res, next) {


    res.render('errorSession', {layout: 'layout/layout'});
});
//last

router.get('*', function (req, res) {
    res.redirect("/page/home")
});


function isLoggedout(req, res, next) {

    if (!req.isAuthenticated()) {

        return next();
    }
    res.redirect("/page/home")


}

module.exports = router;
