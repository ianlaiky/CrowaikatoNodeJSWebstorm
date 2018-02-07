// File Created by: Ian Lai Kheng Yan

var express = require('express');
var querystring = require('querystring');
var https = require('https');
var passport = require('passport');
var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);
var router = express.Router();

var recaptchaConfig = require('../config/googleCaptchaKey');

// Google captcha
var SECRET = recaptchaConfig.secret;
let clientSecretKey = recaptchaConfig.clientSideSecret;

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


// Post request for Contact us form
router.post("/contactUsSubmit", isLoggedout, (req, res, next) => {
    console.log("RUNNING contact us");

    // captha validation
    var captchaValidationResult = false;
    console.log("before" + captchaValidationResult);
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        captchaValidationResult = false;

    }
    verifyRecaptcha(req.body["g-recaptcha-response"], function (success) {

        if (success) {
            captchaValidationResult = true;
            console.log("aftwer Captcha " + captchaValidationResult)
        } else {
            captchaValidationResult = false;

        }

        // fields validation
        console.log("VALICDATION OF CAPTCHSA" + captchaValidationResult);
        console.log(req.body);

        req.check('name', "Please enter something").trim().notEmpty();
        req.check('name', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});

        req.check('email', "Please enter a valid email").trim().notEmpty().isEmail();
        req.check('email', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});

        req.check('phone', 'Invalid phone No').trim().matches(/^[+][\d]+$/, "i");
        req.check('phone', 'Reached Character Limit (Max: 200)').trim().notEmpty().isLength({max:200});


        req.check('message', 'Reached Character Limit (Max: 1000)').trim().notEmpty().isLength({max:1000});

        var errors = req.validationErrors();

        console.log("Captcha result" + captchaValidationResult);

        if (captchaValidationResult == false) {

            if (!errors) {

                errors = [];
                errors.push({"param": "captcha", "msg": "Please do the captcha"});
            } else {
                errors.push({"param": "captcha", "msg": "Please do the captcha"});
            }

        }

        console.log("Errors for contact us");
        console.log(errors);




        if (errors) {
            console.log("RUN 1");

            req.flash('errorContactUs', errors);

            res.redirect("/");


        }else{

            let name = req.body.name;
            let email = req.body.email;
            let phone = req.body.phone;
            let message = req.body.message;

            var insertQuery = "INSERT INTO contact_us ( name, email, phone, message, archive) values (?,?,?,?,?)";

            connection.query(insertQuery,[name,email,phone,message,"false"],(err,rows)=>{

                if (err) console.log(err);

                console.log("ROW inserted contact us");
                console.log(rows);


                req.flash('errorContactUsSuccess',"true");

                res.redirect("/");
            });


        }



    });

    // console.log(req.body);


});

/* GET home page. */
router.get('/', isLoggedout, function (req, res, next) {
    var cotactusSucessFin = false;

    var autoRedirect = false;
    var messages = req.flash('errorLogin');
    var messagesContactUs = req.flash('errorContactUs');
    var messagesContactUsSuccess = req.flash('errorContactUsSuccess');
    console.log(messages);
    console.log(messages.length);
    console.log(messages.length > 0);


    console.log("error contact us");
    console.log(messagesContactUs);
    console.log(messagesContactUsSuccess);

    if (messagesContactUsSuccess=="true"){
        cotactusSucessFin=true;
    }

    if (messagesContactUs.length>0||messagesContactUsSuccess=="true"){
        autoRedirect=true;
    }

    res.render('index', {layout: 'layout/layout', messages: messages, hasError: messages.length > 0,messageContactUs:messagesContactUs,contactHasError:messagesContactUs.length>0,contactUsSuccess:cotactusSucessFin,redirectContactUs:autoRedirect,captchaClientKey:clientSecretKey});
});



router.get('/error', function (req, res, next) {


    res.render('error', {layout: 'layout/layout'});

});


/* GET errorForApp page. */
router.get('/errors', function (req, res, next) {


    res.render('errorForApp', {layout: 'layout/layout'});

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
