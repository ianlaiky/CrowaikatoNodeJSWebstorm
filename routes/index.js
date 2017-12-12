var express = require('express');
var querystring = require('querystring');
var https = require('https');

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
    res.render('registration', {layout: 'layout/layout', success: req.session.success, errors: req.session.errors});
    req.session.errors = null;
});

router.post("/registerForm", function (req, res, next) {
    //uncomment this ltr**

    var captchaValidationResult=false;
    console.log("before"+captchaValidationResult)
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        captchaValidationResult = false;
        // return res.json({"responseCode": 1, "responseDesc": "Please select captcha"});
    }

    // Put your secret key here.


    // Hitting GET request to the URL, Google will respond with success or error scenario.


    verifyRecaptcha(req.body["g-recaptcha-response"], function (success) {
        if (success) {
            captchaValidationResult = true;
            console.log("aftwer"+captchaValidationResult)
            // return res.json({"responseCode": 0, "responseDesc": "Sucess"});
        } else {
            captchaValidationResult = false;
            // return res.json({"responseCode": 1, "responseDesc": "Failed captcha verification"});
        }
    });

    //end

    console.log("VALICDATION OF CAPTCHSA"+captchaValidationResult)
    console.log(req.body);
    req.check('emailAddress', "Please enter a valid email").notEmpty().isEmail();
    req.check('password', 'Password should contain lower and uppercase with numbers').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
    req.check('password', "Password is empty or do not match").equals(req.body.password_cfm);



    req.check('firstName', "Please enter something").notEmpty();
    req.check('lastName', "Please enter something").notEmpty();

    req.check('jobtitle', "Please enter something").notEmpty();
    req.check('institution', "Please enter something").notEmpty();

    req.check('country', "Please select something").notEmpty();
    req.check('state', "Please select something").notEmpty();
    req.check('city', "Please select something").notEmpty();
    req.check('zipcode', "Please select something").notEmpty();
    req.check('inputAddress', "Please select something").notEmpty();

    req.check('phoneNumber', 'Invalid phone No').matches(/^[+][\d]+$/, "i");
    req.check('faxNumber', 'Invalid fax No').matches(/^[+][\d]+$/, "i");

    req.check('workSector', "Please select something").notEmpty();
    req.check('jobFunction', "Please select something").notEmpty();

    req.check('exampleRadios',"Please select a option").notEmpty();


    //santise
    var test = req.sanitize('password').escape();

    console.log("sanitised data: " + test);


    var errors = req.validationErrors();

    console.log("Captcha result"+captchaValidationResult)

    if(captchaValidationResult==false){

        if(!errors){

            errors=[];
            errors.push({"param":"captcha","msg":"Captcha failed"});
        }else{
            errors.push({"param":"captcha","msg":"Captcha failed"});
        }

    }


    console.log(errors);


    if (errors) {
        console.log("RUN 1");
        req.session.errors = errors;
        req.session.success = false;


    } else {
        console.log("RUN 2");
        req.session.success = true;
    }
    // console.log(errors)
    // console.log(req.session.errors)
    res.redirect("/register")

});


module.exports = router;
