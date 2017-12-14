var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var querystring = require('querystring');
var https = require('https');

var mysql = require('mysql');

var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);
console.log("Passport running");


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


passport.serializeUser(function (user, done) {

    done(null, user.id)


});

passport.deserializeUser(function (id, done) {
    connection.query("SELECT * FROM users WHERE id = ? ", [id], function (err, rows) {

        // console.log("deserializeUser" + rows[0]);
        // console.log(rows[0]);

        done(err, rows[0]);
    });


});


passport.use('local.signin', new LocalStrategy({


    usernameField: 'emailAddress',
    passwordField: 'password',
    passReqToCallback: true


}, function (req, emailAddress, password, done) {
    console.log("RUN 0");
    req.check('emailAddress', "Please enter a valid email").notEmpty().isEmail();
    req.check('password', 'Please enter a password').notEmpty();

    var errors = req.validationErrors();

    console.log("RUN 0");
    console.log(errors);






    if (errors) {
        console.log("RUN 1");



        return done(null, false, req.flash('errorLogin', errors));

    } else {

        console.log("RUN 2");

        connection.query("SELECT * FROM users WHERE username = ?", [emailAddress], function (err, rows) {
            console.log("Return login");
            console.log(rows);
            if (err)
                return done(err);
            if (rows.length) {
                if (!bcrypt.compareSync(password, rows[0].password))
                    return done(null, false, req.flash('errorLogin', [{
                        param: "emailorpassWrong",
                        msg: "Pass or email wrong"
                    }])); // create the loginMessage and save it to session as flashdata
            }

            // if the user is found but the password is wrong


            // all is well, return successful user


            connection.query("SELECT * FROM userinfo WHERE username = ?", [emailAddress], function (err, rowsInfo) {
                console.log("Retrieved data");
                console.log("Data 1");
                console.log(rowsInfo[0]);



                req.session.useInfoo=rowsInfo[0];
                req.session.save();




            });


            return done(null, rows[0]);
        });

    }




}));


passport.use('local.signup', new LocalStrategy({
    usernameField: 'emailAddress',
    passwordField: 'password',
    passReqToCallback: true

}, function (req, emailAddress, password, done) {






    //uncomment this ltr**

    var captchaValidationResult = false;
    console.log("before" + captchaValidationResult);
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        captchaValidationResult = false;

    }

    // Put your secret key here.


    // Hitting GET request to the URL, Google will respond with success or error scenario.


    //uncomment this

    verifyRecaptcha(req.body["g-recaptcha-response"], function (success) {


        if (success) {
            captchaValidationResult = true;
            console.log("aftwer" + captchaValidationResult)
            // return res.json({"responseCode": 0, "responseDesc": "Sucess"});
        } else {
            captchaValidationResult = false;
            // return res.json({"responseCode": 1, "responseDesc": "Failed captcha verification"});
        }


        console.log("VALICDATION OF CAPTCHSA" + captchaValidationResult);


        console.log(req.body);
        req.check('emailAddress', "Please enter a valid email").notEmpty().isEmail();
        req.check('password', 'Password should contain lower and uppercase with numbers').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i");
        req.check('password_cfm', "Password is empty or do not match").equals(req.body.password);


        req.check('firstName', "Please enter something").notEmpty();
        req.check('lastName', "Please enter something").notEmpty();

        req.check('jobtitle', "Please enter something").notEmpty();
        req.check('institution', "Please enter something").notEmpty();

        req.check('country', "Please select something").notEmpty();
        req.check('state', "Please enter something").notEmpty();
        req.check('city', "Please enter something").notEmpty();
        req.check('zipcode', "Please enter something").notEmpty();
        req.check('inputAddress', "Please enter something").notEmpty();

        req.check('phoneNumber', 'Invalid phone No').matches(/^[+][\d]+$/, "i");
        req.check('faxNumber', 'Invalid fax No').matches(/^[+][\d]+$/, "i");

        req.check('workSector', "Please select something").notEmpty();
        req.check('jobFunction', "Please select something").notEmpty();

        req.check('exampleRadios', "Please select an option").notEmpty();


        //santise
        var test = req.sanitize('password').escape();

        console.log("sanitised data: " + test);


        var errors = req.validationErrors();

        console.log("Captcha result" + captchaValidationResult);

        if (captchaValidationResult == false) {

            if (!errors) {

                errors = [];
                errors.push({"param": "captcha", "msg": "Captcha failed"});
            } else {
                errors.push({"param": "captcha", "msg": "Captcha failed"});
            }

        }


        console.log(errors);


        if (errors) {
            console.log("RUN 1");

            req.session.success = false;

            return done(null, false, req.flash('error', errors));

        } else {


            console.log("RUN 2");
// find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            connection.query("SELECT * FROM users WHERE username = ?", [emailAddress], function (err, rows) {


                if (err)
                    return done(err);
                if (rows.length) {

                    req.session.success = false;
                    return done(null, false, req.flash('error', [{param: 'existinguser', msg: 'Existing user found'}]));
                } else {
                    // if there is no user with that username
                    // create the user
                    console.log(bcrypt.genSaltSync(8));
                    var newUserMysql = {
                        username: emailAddress,
                        password: bcrypt.hashSync(password, null, null)  // use the generateHash function in our user model
                    };

                    var insertQuery = "INSERT INTO users ( username, password ) values (?,?)";

                    connection.query(insertQuery, [newUserMysql.username, newUserMysql.password], function (err, rows) {
                        console.log("====");
                        console.log(newUserMysql.username);
                        console.log(newUserMysql.password);
                        console.log(rows);
                        console.log(err);

                        var insertQueryinfo = "INSERT INTO userinfo ( username, firstname, lastname, jobtitle, company, country, state, city, zipcode, address, phoneno, faxno, sectorwork, jobfunction, fulltimestudent ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

                        connection.query(insertQueryinfo, [req.body.emailAddress, req.body.firstName, req.body.lastName, req.body.jobtitle, req.body.institution, req.body.country, req.body.state, req.body.city, req.body.zipcode, req.body.inputAddress, req.body.phoneNumber, req.body.faxNumber, req.body.workSector, req.body.jobFunction, req.body.exampleRadios], function (err, userRow) {

                            console.log(userRow);
                            console.log(err);


                            console.log(userRow);

                        });

                        newUserMysql.id = rows.insertId;
                        req.session.success = true;
                        return done(null, newUserMysql);
                    });
                }
            });


        }

        // console.log(errors)
        // console.log(req.session.errors)


    });

    //end


}));
