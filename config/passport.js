var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var querystring = require('querystring');
var https = require('https');
var CryptoJS = require("crypto-js");

var mysql = require('mysql');

var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);
console.log("Passport running");

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


function encryptData(msginput, pass) {
    //salt for the pass der
    var salt = CryptoJS.lib.WordArray.random(128 / 8);
    console.log("FIRST SALT: " + salt);

    //password deriv
    var key512Bits1000Iterations = CryptoJS.PBKDF2(pass, salt, {keySize: 512 / 32, iterations: 1000});

    console.log("Initial key: " + key512Bits1000Iterations);

    //iv for encrypt
    var iv = CryptoJS.lib.WordArray.random(128 / 8);

    console.log("FIRST IV: " + iv);


    var encrypted = CryptoJS.AES.encrypt(msginput, key512Bits1000Iterations, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC

    });

    var transitmessage = salt.toString() + iv.toString() + encrypted.toString();
    console.log("Encrypted text: " + encrypted.toString());
    console.log(transitmessage);
    return transitmessage;
}

function decryptData(transitmessage, pass) {
    var saltdecrypt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
    console.log("Second SALT: " + saltdecrypt);
    var ivdecrypt = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32));
    console.log("Second iv: " + ivdecrypt);
    var encryptedForDecryption = transitmessage.substring(64);
    console.log("Encrypted text: " + encryptedForDecryption.toString());
    var keydecrypt = CryptoJS.PBKDF2(pass, saltdecrypt, {
        keySize: 512 / 32,
        iterations: 1000
    });


    console.log("End keyZ: " + keydecrypt);
    var decrypteddata = CryptoJS.AES.decrypt(encryptedForDecryption.toString(), keydecrypt, {
        iv: ivdecrypt,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC

    });

    console.log("DECRYPYTED DATA: " + decrypteddata.toString(CryptoJS.enc.Utf8));
    return decrypteddata.toString(CryptoJS.enc.Utf8);

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
    req.check('emailAddress', "Please enter a valid email").trim().notEmpty().isEmail();
    req.check('password', 'Please enter a password').trim().notEmpty();

    var errors = req.validationErrors();

    console.log("RUN 0");
    console.log(errors);


    if (errors) {
        console.log("RUN 1");


        return done(null, false, req.flash('errorLogin', [{
            param: "emailorpassWrong",
            msg: "Pass or email wrong"
        }])); // create the loginMessage and save it to session as flashdata

    } else {

        console.log("RUN 2");

        connection.query("SELECT * FROM users WHERE username = ?", [emailAddress], function (err, rows) {
            console.log("Return login");
            console.log(rows);

            console.log(err);
            if (err) {

                return done(err);
            }


            if (rows.length) {
                console.log("ROW LENGTH:");
                console.log(rows.length);
                if (!bcrypt.compareSync(password, rows[0].password))
                    return done(null, false, req.flash('errorLogin', [{
                        param: "emailorpassWrong",
                        msg: "Pass or email wrong"
                    }])); // create the loginMessage and save it to session as flashdata
            } else {
                console.log("ROW LEN:");
                console.log(rows.length);
                return done(null, false, req.flash('errorLogin', [{
                    param: "emailorpassWrong",
                    msg: "Pass or email wrong"
                }]));

            }

            console.log("Print row from user db");
            console.log(rows);
            console.log(rows[0].roles);

            // if the user is found but the password is wrong


            // all is well, return successful user


            connection.query("SELECT * FROM userinfo WHERE username = ?", [emailAddress], function (err, rowsInfo) {
                console.log("Retrieved data");
                console.log("Data 1");
                console.log(rowsInfo[0]);

                var dbusername = rowsInfo[0].username;
                var dbfirstname = decryptData(rowsInfo[0].firstname.toString(), rows[0].password);
                // var dblastname = decryptData(rowsInfo[0].lastname.toString(),rows[0].password);
                // var dbjobtitle = decryptData(rowsInfo[0].jobtitle.toString(),rows[0].password);
                // var dbcompany = decryptData(rowsInfo[0].company.toString(),rows[0].password);
                // var dbcountry = decryptData(rowsInfo[0].country.toString(),rows[0].password);
                // var dbstate = decryptData(rowsInfo[0].state.toString(),rows[0].password);
                // var dbcity = decryptData(rowsInfo[0].city.toString(),rows[0].password);
                // var dbzipcode = decryptData(rowsInfo[0].zipcode.toString(),rows[0].password);
                // var dbaddress = decryptData(rowsInfo[0].address.toString(),rows[0].password);
                // var dbphoneno = decryptData(rowsInfo[0].phoneno.toString(),rows[0].password);
                // var dbfaxno = decryptData(rowsInfo[0].faxno.toString(),rows[0].password);
                // var dbsectorwork = decryptData(rowsInfo[0].sectorwork.toString(),rows[0].password);
                // var dbjobfunction = decryptData(rowsInfo[0].jobfunction.toString(),rows[0].password);
                // var dbfulltimestudent = decryptData(rowsInfo[0].fulltimestudent.toString(),rows[0].password);


                console.log("DECRUPT$ED TEST: " + dbfirstname);
                console.log("DECRUPT$ED TEST: " + dbusername);


                var sessiontoSave = {
                    uid: rows[0].id,
                    username: dbusername,
                    firstname: dbfirstname,
                    userrole: rows[0].roles
                    // lastname: dblastname,
                    // jobtitle: dbjobtitle,
                    // company: dbcompany,
                    // country: dbcountry,
                    // state: dbstate,
                    // city: dbcity,
                    // zipcode: dbzipcode,
                    // address: dbaddress,
                    // phoneno: dbphoneno,
                    // faxno: dbfaxno,
                    // sectorwork: dbsectorwork,
                    // jobfunction: dbjobfunction,
                    // fulltimestudent: dbfulltimestudent
                };


                req.session.useInfoo = sessiontoSave;
                req.session.save();


                console.log("SESSION ID");
                console.log(req.session.id);
                console.log(dbusername);

                connection.query("SELECT * FROM usersession WHERE email = ?", [dbusername], (err, rowSessionGet) => {
                    if (err) console.log(err);
                    console.log("SESSION ID GET FROM DB");
                    console.log(rowSessionGet);




                        if (rowSessionGet.length == 0) {

                            let insertQuery = "INSERT INTO usersession ( email, sessionId ) values (?,?)";
                            connection.query(insertQuery, [dbusername.toString(), req.session.id.toString()], (err, insertedrow) => {

                                if (err)
                                    console.log(err);
                                console.log("Inserted Row for sessiondb");
                                console.log(insertedrow);

                                console.log("Login validation done");
                                return done(null, rows[0]);

                            });


                        } else {

                            let updatequery = "UPDATE usersession SET sessionId = ? WHERE email = ?";
                            connection.query(updatequery, [req.session.id.toString(), dbusername.toString()], (err, modifiedRow) => {
                                if (err)
                                    console.log(err);
                                console.log("modified Row for sessiondb");
                                console.log(modifiedRow);
                                console.log("Login validation done");
                                return done(null, rows[0]);

                            });

                        }

                });

            });

            //     console.log("Login validation done");
            //     return done(null, rows[0]);
        });

    }


}));


passport.use('local.signup', new LocalStrategy({
    usernameField: 'emailAddress',
    passwordField: 'password',
    passReqToCallback: true

}, function (req, emailAddress, password, done) {



    var captchaValidationResult = false;
    console.log("before" + captchaValidationResult);
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        captchaValidationResult = false;

    }


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
        req.check('emailAddress', "Please enter a valid email").trim().notEmpty().isEmail();
        req.check('emailAddress', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});
        // (?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}
        req.check('password', 'Password should contain alphanumeric character with uppercase, lowercase and special characters (!,@,#,$,%,^,&,*)').trim().matches(/^(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z]).{8,}/, "i");
        req.check('password', 'Reached Character Limit (Max: 200)').trim().notEmpty().isLength({max:200});
        req.check('password_cfm', "Password is empty or do not match").trim().equals(req.body.password);
        req.check('password_cfm', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});


        req.check('firstName', "Please enter something").trim().notEmpty();
        req.check('firstName', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});
        req.check('lastName', "Please enter something").trim().notEmpty();
        req.check('lastName', "PReached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});

        req.check('jobtitle', "Please enter something").trim().notEmpty();
        req.check('jobtitle', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});
        req.check('institution', "Please enter something").trim().notEmpty();
        req.check('institution', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});

        req.check('countryName', "Please select something").trim().notEmpty();
        req.check('countryName', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});
        req.check('state', "Please enter something").trim().notEmpty();
        req.check('state', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});
        req.check('cityName', "Please enter something").trim().notEmpty();
        req.check('cityName', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});
        req.check('zipcode', "Please enter something").trim().notEmpty();
        req.check('zipcode', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});
        req.check('inputAddress', "Please enter something").notEmpty();
        req.check('inputAddress', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});

        req.check('phoneNumber', 'Invalid phone No').trim().matches(/^[+][\d]+$/, "i");
        req.check('phoneNumber', 'Reached Character Limit (Max: 200)').trim().notEmpty().isLength({max:200});
        req.check('faxNumber', 'Invalid fax No').trim().matches(/^[+][\d]+$/, "i");
        req.check('faxNumber', 'Reached Character Limit (Max: 200)').trim().notEmpty().isLength({max:200});

        req.check('workSector', "Please select something").trim().notEmpty();
        req.check('workSector', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});
        req.check('jobFunction', "Please select something").trim().notEmpty();
        req.check('jobFunction', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});

        req.check('exampleRadios', "Please select an option").trim().notEmpty();
        req.check('exampleRadios', "Reached Character Limit (Max: 200)").trim().notEmpty().isLength({max:200});


        //santise
        var test = req.sanitize('password').escape();

        console.log("sanitised data: " + test);


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
                    return done(null, false, req.flash('error', [{param: 'emailAddress', msg: 'Existing user found'}]));
                } else {
                    // if there is no user with that username
                    // create the user
                    console.log(bcrypt.genSaltSync(8));
                    var newUserMysql = {
                        username: emailAddress,
                        password: bcrypt.hashSync(password, null, null)  // use the generateHash function in our user model
                    };

                    var insertQuery = "INSERT INTO users ( username, password, roles) values (?,?,?)";

                    connection.query(insertQuery, [newUserMysql.username, newUserMysql.password, "member"], function (err, rows) {
                        console.log("====");
                        console.log(newUserMysql.username);
                        console.log(newUserMysql.password);
                        console.log(rows);
                        console.log(err);


                        var retrievedfirstName = req.body.firstName;
                        var retriedlastName = req.body.lastName;
                        var retrievedjobtitle = req.body.jobtitle;
                        var retrievedinstitution = req.body.institution;
                        var retrievedcountryName = req.body.countryName;
                        var retrievedstate = req.body.state;
                        var retverievedcityName = req.body.cityName;
                        var retrievedzipcode = req.body.zipcode;
                        var retrievedinputAddress = req.body.inputAddress;
                        var retrievedphoneNumber = req.body.phoneNumber;
                        var retrievedfaxNumber = req.body.faxNumber;
                        var retrievedworkSector = req.body.workSector;
                        var retrievedjobFunction = req.body.jobFunction;
                        var retrievedexampleRadios = req.body.exampleRadios;


                        var encryptedRetriencryptedRvedfirstName = encryptData(retrievedfirstName, newUserMysql.password);
                        var encryptedRetriedlastName = encryptData(retriedlastName, newUserMysql.password);
                        var encryptedRetrievedjobtitle = encryptData(retrievedjobtitle, newUserMysql.password);
                        var encryptedRetrievedinstitution = encryptData(retrievedinstitution, newUserMysql.password);
                        var encryptedRetrievedcountryName = encryptData(retrievedcountryName, newUserMysql.password);
                        var encryptedRetrievedstate = encryptData(retrievedstate, newUserMysql.password);
                        var encryptedRetverievedcityName = encryptData(retverievedcityName, newUserMysql.password);
                        var encryptedRetrievedzipcode = encryptData(retrievedzipcode, newUserMysql.password);
                        var encryptedRetrievedinputAddress = encryptData(retrievedinputAddress, newUserMysql.password);
                        var encryptedRetrievedphoneNumber = encryptData(retrievedphoneNumber, newUserMysql.password);
                        var encryptedRetrievedfaxNumber = encryptData(retrievedfaxNumber, newUserMysql.password);
                        var encryptedRetrievedworkSector = encryptData(retrievedworkSector, newUserMysql.password);
                        var encryptedRetrievedjobFunction = encryptData(retrievedjobFunction, newUserMysql.password);
                        var encryptedRetrievedexampleRadios = encryptData(retrievedexampleRadios, newUserMysql.password);


                        var insertQueryinfo = "INSERT INTO userinfo ( username, firstname, lastname, jobtitle, company, country, state, city, zipcode, address, phoneno, faxno, sectorwork, jobfunction, fulltimestudent ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

                        connection.query(insertQueryinfo, [req.body.emailAddress, encryptedRetriencryptedRvedfirstName, encryptedRetriedlastName, encryptedRetrievedjobtitle, encryptedRetrievedinstitution, encryptedRetrievedcountryName, encryptedRetrievedstate, encryptedRetverievedcityName, encryptedRetrievedzipcode, encryptedRetrievedinputAddress, encryptedRetrievedphoneNumber, encryptedRetrievedfaxNumber, encryptedRetrievedworkSector, encryptedRetrievedjobFunction, encryptedRetrievedexampleRadios], function (err, userRow) {



                            console.log(userRow);
                            console.log(err);


                            console.log(userRow);

                            let insertQueryLogReg = "INSERT INTO userlog ( year, month, date, day, mode ) values (?,?,?,?,?)";
                            let now = new Date();
                            let saveYear = now.getFullYear();
                            let saveMonth = now.getMonth() + 1;
                            let saveDate = now.getDate();
                            let saveDay = now.getDay();
                            let saveMode = "register";

                            connection.query(insertQueryLogReg,[saveYear.toString(), saveMonth.toString(), saveDate.toString(), saveDay.toString(), saveMode.toString()],(err,insertRegLogRow)=>{
                                if (err) console.log(err);
                                console.log("register logged");
                                console.log(insertRegLogRow);



                                newUserMysql.id = rows.insertId;
                                req.session.success = true;

                                return done(null, newUserMysql);
                            });




                        });


                    });
                }
            });


        }

        // console.log(errors)
        // console.log(req.session.errors)


    });

    //end


}));
