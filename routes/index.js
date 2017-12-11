var express = require('express');


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
                console.log("PARSED data "+data);
                console.log("PARSED data "+parsedData);
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
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index',{layout: 'layout/layout'});
});


router.get('/register', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.render('registrationtest',{layout: 'layout/layout', success:req.session.success, errors:req.session.errors});
    req.session.errors=null;
});

router.post("/registerForm",function (req, res, next) {

    // var captchaValidationResult=false;
    // if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
    //     return res.json({"responseCode": 1, "responseDesc": "Please select captcha"});
    // }
    //
    // // Put your secret key here.
    //
    //
    // // Hitting GET request to the URL, Google will respond with success or error scenario.
    //
    //
    // verifyRecaptcha(req.body["g-recaptcha-response"], function (success) {
    //     if (success) {
    //         captchaValidationResult = true;
    //         // return res.json({"responseCode": 0, "responseDesc": "Sucess"});
    //     } else {
    //         captchaValidationResult = false;
    //         // return res.json({"responseCode": 1, "responseDesc": "Failed captcha verification"});
    //     }
    // });



    console.log(req.body);
    req.check('emailAddress',"invalid email").notEmpty();
    req.check('password',"password is invalid").isLength({min:4}).equals(req.body.password_cfm);


    var test = req.sanitize('password').escape();

    console.log("sanitised data: "+test)

    // req.check('firstName',)

    var errors = req.validationErrors();

    // if(captchaValidationResult==false){
    //
    //     if(!errors){
    //
    //         errors=[];
    //         errors.push({"msg":"captcha"});
    //     }else{
    //         errors.push({"msg":"captcha"});
    //     }
    //
    // }




    console.log(errors);


    if(errors){
        console.log("RUN 1");
        req.session.errors=errors;
        req.session.success = false;


    }else{
        console.log("RUN 2");
        req.session.success = true;
    }
    console.log(errors)
    console.log(req.session.errors)
    res.redirect("/register")
});


module.exports = router;
