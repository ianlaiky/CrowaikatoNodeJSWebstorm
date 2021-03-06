// File Created by: Ian Lai Kheng Yan

var express = require('express');
var passport = require('passport');
var CryptoJS = require("crypto-js");
var bcrypt = require('bcrypt-nodejs');
var router = express.Router();
var MongoDB = require('mongodb');
var querystring = require('querystring');
var https = require('https');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');


//db
var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);
// captcha key
var recaptchaConfig = require('../config/googleCaptchaKey');


///Variables - Connection strings for MongoDB Atlas Databases

var dbconfigMongo = require('../config/databaseMongo');

var arurl = dbconfigMongo.ARConnection;


// global AR machine variable
var machines = [];

// API FOR captcha
var SECRET = recaptchaConfig.secret;
var clientSideSecret = recaptchaConfig.clientSideSecret;

// POST request to google recaptcha
function verifyRecaptcha(key, callback) {
    console.log("RESPONSE IS: " + key);

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

//encryption for details change
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


// The start of routing

// handling of user registration
router.post("/registerForm", passport.authenticate('local.signup', {

    // successRedirect: '/page/register', // redirect to the secure profile section
    failureRedirect: '/page/register', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}), (req, res) => {

    // make sure to logout after user register to prevent authentication issue as passport auto authorise user
    // after register
    req.logout();
    res.redirect("/page/register")


});


// handling of logins
router.post('/loginBackend', passport.authenticate('local.signin', {

    // successRedirect: '/page/home', // redirect to the secure profile section
    failureRedirect: '/', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages

}), (req, res) => {
    console.log("Switch roles running");

    // Start of saving user logs for admin stats
    // does not save the log if the user logging is an admin
    if (req.session.useInfoo.userrole.toString() == "admin") {
        res.redirect("/page/adminConsole")
    } else {
        // logs for users stats
        let insertQueryLog = "INSERT INTO userlog ( year, month, date, day, mode,username ) values (?,?,?,?,?,?)";
        let now = new Date();
        let saveYear = now.getFullYear();
        let saveMonth = now.getMonth() + 1;
        let saveDate = now.getDate();
        let saveDay = now.getDay();
        let saveMode = "login";
        let emailaddress = req.session.useInfoo.emailAddress;

        connection.query(insertQueryLog, [saveYear.toString(), saveMonth.toString(), saveDate.toString(), saveDay.toString(), saveMode.toString(), emailaddress.toString()], (err, insertedLog) => {
            if (err) console.log(err);
            console.log("Logs inserted");
            console.log(insertedLog);
            res.redirect("/page/home")
        });
    }


});

// Editing of password
router.post("/homeSettingsPasswordEdit", isLoggedIn, (req, res, next) => {


    console.log(req.body);
    let password = req.body.currentpassword;
    let newPass = req.body.password;
    console.log(password);
    console.log("New pass");
    console.log(newPass);
    if (password == undefined) password = "";


    connection.query("select * from users where username = ?", [req.session.useInfoo.username.toString()], (err, row) => {

        if (err) console.log(err);
        console.log("ROws");
        console.log(row);

        // makign sure current pass entered is correct
        if (bcrypt.compareSync(password, row[0].password)) {

            console.log("pass match");

            // validate fields
            req.check('password', 'Password should contain alphanumeric character with uppercase, lowercase and special characters (!,@,#,$,%,^,&,*)').trim().matches(/^(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z]).{8,}/, "i");
            req.check('password', 'Reached Character Limit (Max: 200)').trim().isLength({max: 200});
            req.check('password_cfm', "Password is empty or do not match").trim().equals(req.body.password);
            req.check('password_cfm', "Reached Character Limit (Max: 200)").trim().isLength({max: 200});

            var errors = req.validationErrors();

            //push errors to flash session
            req.flash('errorHomeSettingDetail', errors);

            if (errors) {

                res.redirect("/page/homeSettings");


            } else {

                // generate new salt
                console.log(bcrypt.genSaltSync(8));
                // hash and salt
                var updateuserMysql = bcrypt.hashSync(newPass, null, null);

                let updatequery = "update users set password = ? where username = ?";
                connection.query(updatequery, [updateuserMysql, req.session.useInfoo.username.toString()], (err, rows) => {

                    if (err) {
                        console.log(err)
                    } else {
                        console.log(rows);

                        // reencrypt all previous data with new encryption key
                        let firstname = req.session.useInfoo.firstname;
                        let lastname = req.session.useInfoo.lastname;
                        let jobtitle = req.session.useInfoo.jobtitle;
                        let company = req.session.useInfoo.company;
                        let country = req.session.useInfoo.country;
                        let state = req.session.useInfoo.state;
                        let city = req.session.useInfoo.city;
                        let zipcode = req.session.useInfoo.zipcode;
                        let address = req.session.useInfoo.address;
                        let phoneno = req.session.useInfoo.phoneno;
                        let faxno = req.session.useInfoo.faxno;
                        let sectorwork = req.session.useInfoo.sectorwork;
                        let jobfunction = req.session.useInfoo.jobfunction;
                        let fulltimestudent = req.session.useInfoo.fulltimestudent;


                        let encrypteDfirstname = encryptData(firstname, updateuserMysql);
                        let encrypteDlastname = encryptData(lastname, updateuserMysql);
                        let encrypteDjobtitle = encryptData(jobtitle, updateuserMysql);
                        let encrypteDcompany = encryptData(company, updateuserMysql);
                        let encrypteDcountry = encryptData(country, updateuserMysql);
                        let encrypteDstate = encryptData(state, updateuserMysql);
                        let encrypteDcity = encryptData(city, updateuserMysql);
                        let encrypteDzipcode = encryptData(zipcode, updateuserMysql);
                        let encrypteDaddress = encryptData(address, updateuserMysql);
                        let encrypteDphoneno = encryptData(phoneno, updateuserMysql);
                        let encrypteDfaxno = encryptData(faxno, updateuserMysql);
                        let encrypteDsectorwork = encryptData(sectorwork, updateuserMysql);
                        let encrypteDjobfunction = encryptData(jobfunction, updateuserMysql);
                        let encrypteDfulltimestudent = encryptData(fulltimestudent, updateuserMysql);


                        var updateQueryinfo = "update userinfo set firstname = ?, lastname = ?, jobtitle = ?, company = ?, country = ?, state = ?, city = ?, zipcode = ?, address = ?, phoneno = ?, faxno = ?, sectorwork = ?, jobfunction = ?, fulltimestudent =? where username = ?";


                        connection.query(updateQueryinfo, [encrypteDfirstname, encrypteDlastname, encrypteDjobtitle, encrypteDcompany, encrypteDcountry, encrypteDstate, encrypteDcity, encrypteDzipcode, encrypteDaddress, encrypteDphoneno, encrypteDfaxno, encrypteDsectorwork, encrypteDjobfunction, encrypteDfulltimestudent, req.session.useInfoo.username.toString()], (err, rowww) => {

                            if (err) {
                                console.log(err)
                            } else {
                                console.log(rowww)
                            }
                            console.log("EDIT SUCESSFULL PASS CHANGED");
                            req.flash('passwordChangeSucc', "true");
                            res.redirect("/page/homeSettings");

                        });

                    }


                });


            }


        } else {

            console.log("pass not match");
            req.flash('errorHomeSettingDetail', [{
                param: "currentpassword",
                msg: "Password entered does not match with our database"
            }]);
            res.redirect("/page/homeSettings");
        }


    });


});

// Editing of user details

router.post("/homeSettingsDetailsEdit", isLoggedIn, (req, res, next) => {
    console.log(req.body);
    console.log(req.body["g-recaptcha-response"]);

    var captchaValidationResult = false;
    console.log("before" + captchaValidationResult);
    // checking recaptcha
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
        console.log("Data get from details get");

        //fields validation

        console.log(req.body);
        req.check('firstName', "Please enter something").trim().notEmpty();
        req.check('firstName', "Reached Character Limit (Max: 200)").trim().isLength({max: 200});
        req.check('lastName', "Please enter something").trim().notEmpty();
        req.check('lastName', "PReached Character Limit (Max: 200)").trim().isLength({max: 200});
        req.check('jobtitle', "Please enter something").trim().notEmpty();
        req.check('jobtitle', "Reached Character Limit (Max: 200)").trim().isLength({max: 200});

        req.check('institution', "Please enter something").trim().notEmpty();
        req.check('institution', "Reached Character Limit (Max: 200)").trim().isLength({max: 200});

        req.check('countryName', "Please select something").trim().notEmpty();
        req.check('countryName', "Reached Character Limit (Max: 200)").trim().isLength({max: 200});

        req.check('state', "Please enter something").trim().notEmpty();
        req.check('state', "Reached Character Limit (Max: 200)").trim().isLength({max: 200});

        req.check('cityName', "Please enter something").trim().notEmpty();
        req.check('cityName', "Reached Character Limit (Max: 200)").trim().isLength({max: 200});
        req.check('zipcode', "Please enter something").trim().notEmpty();
        req.check('zipcode', "Reached Character Limit (Max: 200)").trim().isLength({max: 200});
        req.check('inputAddress', "Please enter something").notEmpty();
        req.check('inputAddress', "Reached Character Limit (Max: 200)").trim().isLength({max: 200});

        req.check('phoneNumber', 'Invalid phone No').trim().matches(/^[+][\d]+$/, "i");
        req.check('phoneNumber', 'Reached Character Limit (Max: 200)').trim().isLength({max: 200});
        req.check('faxNumber', 'Invalid fax No').trim().matches(/^[+][\d]+$/, "i");
        req.check('faxNumber', 'Reached Character Limit (Max: 200)').trim().isLength({max: 200});

        req.check('workSector', "Please select something").trim().notEmpty();
        req.check('workSector', "Reached Character Limit (Max: 200)").trim().isLength({max: 200});
        req.check('jobFunction', "Please select something").trim().notEmpty();
        req.check('jobFunction', "Reached Character Limit (Max: 200)").trim().isLength({max: 200});

        req.check('exampleRadios', "Please select an option").trim().notEmpty();
        req.check('exampleRadios', "Reached Character Limit (Max: 200)").trim().isLength({max: 200});


        var errors = req.validationErrors();

        console.log(errors);

        if (captchaValidationResult == false) {

            if (!errors) {

                errors = [];
                errors.push({"param": "captcha", "msg": "Please do the captcha"});
            } else {
                errors.push({"param": "captcha", "msg": "Please do the captcha"});
            }

        }

        if (errors) {
            console.log("edit errors");
            req.flash('errorHomeSettingDetail', errors);
            res.redirect("/page/homeSettings");

        } else {


            let passwordforEncryption;
            connection.query("select password from users where username = ?", [req.session.useInfoo.username.toString()], (err, rowspr) => {

                if (err) {
                    console.log(err)
                } else {
                    console.log("PASSWORD SELECT");
                    console.log(rowspr);
                    console.log(rowspr[0].password);
                    passwordforEncryption = rowspr[0].password;


                    console.log("BODY REQ");
                    console.log(req.body);
                    // Re-encryption of new data
                    let firstNameRetrieve = encryptData(req.body.firstName, passwordforEncryption);
                    let lastNameRetrieve = encryptData(req.body.lastName, passwordforEncryption);
                    let jobtitleRetrieve = encryptData(req.body.jobtitle, passwordforEncryption);
                    let institutionRetrieve = encryptData(req.body.institution, passwordforEncryption);
                    let countryNameRetrieve = encryptData(req.body.countryName, passwordforEncryption);
                    let stateRetrieve = encryptData(req.body.state, passwordforEncryption);
                    let cityNameRetrieve = encryptData(req.body.cityName, passwordforEncryption);
                    let zipcodeRetrieve = encryptData(req.body.zipcode, passwordforEncryption);
                    let inputAddressRetrieve = encryptData(req.body.inputAddress, passwordforEncryption);
                    let phoneNumberRetrieve = encryptData(req.body.phoneNumber, passwordforEncryption);
                    let faxNumberRetrieve = encryptData(req.body.faxNumber, passwordforEncryption);
                    let workSectorRetrieve = encryptData(req.body.workSector, passwordforEncryption);
                    let jobFunctionRetrieve = encryptData(req.body.jobFunction, passwordforEncryption);
                    let exampleRadiosRetrieve = encryptData(req.body.exampleRadios, passwordforEncryption);

                    let udpatedetailsquery = "update userinfo set firstname = ?, lastname = ?, jobtitle = ?, company = ?, country = ?, state = ?, city = ?, zipcode = ?, address = ?, phoneno = ?, faxno = ?, sectorwork = ?, jobfunction = ?, fulltimestudent = ? where username = ?";

                    connection.query(udpatedetailsquery, [firstNameRetrieve, lastNameRetrieve, jobtitleRetrieve, institutionRetrieve, countryNameRetrieve, stateRetrieve, cityNameRetrieve, zipcodeRetrieve, inputAddressRetrieve, phoneNumberRetrieve, faxNumberRetrieve, workSectorRetrieve, jobFunctionRetrieve, exampleRadiosRetrieve, req.session.useInfoo.username.toString()], (err, rowinserteddupdate) => {


                        if (err) {
                            console.log(err)
                        } else {
                            // Saving new fields to the current session so the user do not need to relog to see changes.
                            req.session.useInfoo.firstname = req.body.firstName;
                            req.session.useInfoo.lastname = req.body.lastName;
                            req.session.useInfoo.jobtitle = req.body.jobtitle;
                            req.session.useInfoo.company = req.body.institution;
                            req.session.useInfoo.country = req.body.countryName;
                            req.session.useInfoo.state = req.body.state;
                            req.session.useInfoo.city = req.body.cityName;
                            req.session.useInfoo.zipcode = req.body.zipcode;
                            req.session.useInfoo.address = req.body.inputAddress;
                            req.session.useInfoo.phoneno = req.body.phoneNumber;
                            req.session.useInfoo.faxno = req.body.faxNumber;
                            req.session.useInfoo.sectorwork = req.body.workSector;
                            req.session.useInfoo.jobfunction = req.body.jobFunction;
                            req.session.useInfoo.fulltimestudent = req.body.exampleRadios;

                            console.log("Updated details");
                            console.log(rowinserteddupdate);
                            req.flash('detailsChangeSucc', "true");
                            res.redirect("/page/homeSettings");
                        }
                    });

                }


            });


        }
    });

});

// change password/details
router.get("/homeSettings", isLoggedIn, (req, res, next) => {
    console.log("Home settings");
    let errormsgDetail = req.flash('errorHomeSettingDetail');
    let passwordChangeSucc = req.flash('passwordChangeSucc');
    let detailschangesucc = req.flash('detailsChangeSucc');
    console.log(errormsgDetail);
    console.log(passwordChangeSucc);

    // boolean to see if the user has changed sucessfully; this info will be sent to handlebard which will change the page
    var boolvalueForpassChange = false;
    let boolvalueFordetailChange = false;
    if (passwordChangeSucc.length > 0) {
        boolvalueForpassChange = true;
    }
    if (detailschangesucc.length > 0) {
        boolvalueFordetailChange = true;
    }


    res.render('page/homeSettings', {
        layout: 'layout/layout',
        firstname: req.session.useInfoo.firstname,
        lastname: req.session.useInfoo.lastname,
        jobtitle: req.session.useInfoo.jobtitle,
        company: req.session.useInfoo.company,
        country: req.session.useInfoo.country,
        state: req.session.useInfoo.state,
        city: req.session.useInfoo.city,
        zipcode: req.session.useInfoo.zipcode,
        address: req.session.useInfoo.address,
        phoneno: req.session.useInfoo.phoneno,
        faxno: req.session.useInfoo.faxno,
        sectorwork: req.session.useInfoo.sectorwork,
        jobfunction: req.session.useInfoo.jobfunction,
        fulltimestudent: req.session.useInfoo.fulltimestudent,
        errormsgDetail: errormsgDetail,
        errorHasErrorDetail: errormsgDetail.length > 0,
        passwordChangeSucc: boolvalueForpassChange,
        detailschangesucc: boolvalueFordetailChange,
        captchaClientKey: clientSideSecret

    });

});


/* GET users listing. */
router.get('/home', isLoggedIn, function (req, res, next) {


    let fileuploadInfo = [];
    console.log("First name ics :" + req.session.useInfoo.firstname);
    console.log("email ics :" + req.session.useInfoo.username);
    console.log("First name ics :" + req.session.useInfoo.uid);
    console.log("First name ics :" + req.session.id);


// Locky Analysis files retrieve
    connection.query("SELECT * FROM fileupload WHERE uid = ?", [req.session.useInfoo.uid.toString()], (err, rowRet) => {

        console.log("ROW FROM FILEUPLAOD: ");
        console.log(rowRet);

        for (let i = 0; i < rowRet.length; i++) {
            console.log(rowRet[i].uid);
            console.log(rowRet[i].fileNo);
            console.log(rowRet[i].fileName);

        }
        fileuploadInfo = rowRet;
        req.session.fileUploadData = rowRet;
        req.session.save();
        res.render('page/home', {
            layout: 'layout/layout',
            firstname: req.session.useInfoo.firstname,
            fileUploadata: fileuploadInfo,
            fileuploadHasitem: fileuploadInfo.length != 0
        });


    });

});


router.post("/adminContactUsArchive", isLoggedInAdmin, (req, res, next) => {

    console.log(req.body);
    console.log(req.body.id);

    connection.query("select * from contact_us where id=?", [req.body.id], (err, row) => {
        if (err) console.log(err);
        console.log("from db");
        console.log(row);
        if (row.length != 0) {


            connection.query("update contact_us set archive='true' where id=?", [req.body.id], function (err, updateRow) {

                if (err) console.log(err);

                console.log("Update row");
                console.log(updateRow);

                res.redirect("/page/adminContactUs");


            });


        } else {
            res.redirect("/error");
        }

    });


});

// handling access toggle
router.post("/adminUserApprovalToggle", isLoggedInAdmin, (req, res, next) => {

    if (req.body.id) {
        console.log("there is snth");

        connection.query("select approved from users where id = ?", [req.body.id], (err, rowtt) => {

            if (err) {
                console.log(err);
                res.redirect("/error");

            } else if (rowtt.length > 0) {
                let currentdb = rowtt[0].approved;
                let newsave;
                if (currentdb == "denied") {
                    newsave = "approved";
                } else {
                    newsave = "denied";
                }


                connection.query("update users set approved = ? where id = ?", [newsave.toString(), req.body.id.toString()], (err, updated) => {

                    if (err) {
                        console.log(err);
                        res.redirect("/error");
                    } else {
                        res.redirect("/page/adminUserApproval")
                    }

                });

            } else {
                res.redirect("/page/adminUserApproval")
            }
        });


    } else {
        console.log("nth");
        res.redirect("/adminUserApproval")
    }


});


router.get("/adminUserApproval", isLoggedInAdmin, (req, res, next) => {

    console.log("RRRR");
    console.log(req.query);


    console.log(req.session.chpoice);


    let checkbox;
    let saveuserdat = [];
    if (req.session.chpoice == undefined) {
        req.session.chpoice = "denied";
        checkbox = "denied";
    }

    console.log(req.session.chpoice);

    if (req.query.submitclicked) {
        if (!req.query.approvalcheckbox) {
            console.log("BONE");
            checkbox = "approved";
            req.session.chpoice = "approved";

        } else {
            checkbox = "denied";
            req.session.chpoice = "denied";

        }
    }


    console.log("before conenction");
    console.log(req.session.chpoice);
    let toggleslider = false;
    if (req.session.chpoice == "approved") {
        toggleslider = true;

    }

    connection.query("select id,username,approved from users where approved = ?", [req.session.chpoice.toString()], (err, rowpr) => {
        if (err) {
            console.log(err);
            res.redirect("/error");
        } else if (rowpr.length != 0) {
            console.log(rowpr);
            for (let obj of rowpr) {
                console.log(obj);
                saveuserdat.push({

                    id: obj.id,
                    name: obj.username,
                    accessStatus: obj.approved
                });
            }

        }

        res.render('page/adminUserApproval', {
            layout: 'layout/layout',
            firstname: req.session.useInfoo.firstname,
            rowDataHasItem: saveuserdat.length > 0,
            rowData: saveuserdat,
            toggleslider: toggleslider

        });

    });


});

// handling of admin to view contact us feedback

router.get("/adminContactUs", isLoggedInAdmin, (req, res, next) => {

    connection.query("select * from contact_us where archive='false'", (err, row) => {

        if (err) {
            res.redirect("/error");
        } else {
            console.log(row);

            let tempRow = [];
            if (row.length > 0) {

                for (let obj of row) {
                    let nameSub;
                    if (obj.name.length > 10) {
                        nameSub = obj.name.substring(0, 10);
                        nameSub = nameSub + "…";

                    } else {
                        nameSub = obj.name;
                    }
                    let emailSub;
                    if (obj.email.length > 10) {
                        emailSub = obj.email.substring(0, 10);
                        emailSub = emailSub + "…";
                    } else {
                        emailSub = obj.email;
                    }
                    let phoneSub;
                    if (obj.phone.length > 10) {
                        phoneSub = obj.phone.substring(0, 10);
                        phoneSub = phoneSub + "…";
                    } else {
                        phoneSub = obj.phone;
                    }

                    let messagSub;
                    if (obj.message.length > 10) {
                        messagSub = obj.message.substring(0, 10);
                        messagSub = messagSub + "…"
                    } else {
                        messagSub = obj.message;
                    }


                    let tempMap = {
                        id: obj.id,
                        name: obj.name,
                        email: obj.email,
                        phone: obj.phone,
                        message: obj.message,
                        archive: obj.archive,
                        nameSub: nameSub,
                        emailSub: emailSub,
                        phoneSub: phoneSub,
                        messagSub: messagSub,


                    };
                    tempRow.push(tempMap);
                }
            }


            res.render('page/adminContactUs', {
                layout: 'layout/layout',
                firstname: req.session.useInfoo.firstname,
                rowData: tempRow,
                rowDataHasItem: tempRow.length > 0
            });

        }


    });


});


// admin console
router.get('/adminConsole', isLoggedInAdmin, function (req, res, next) {
    console.log("testing adminconsole param get");
    console.log(req.query);

    res.render('page/adminConsole', {
        layout: 'layout/layout',
        firstname: req.session.useInfoo.firstname,

        emailAddress: req.session.useInfoo.emailAddress,
        session: req.session.id
    });
});


/* HOME PAGE */
router.get('/visualisation', isLoggedIn, function (req, res, next) {
    res.render('visualisation/index', {title: 'Visual Progger', layout: 'layout/visualisationlayout'});
});

// STATIC ANALYSIS
router.get('/lockyAnalysis', isLoggedIn, function (req, res, next) {
    res.render('visualisation/lockyAnalysis', {title: 'Locky Analysis', layout: 'layout/visualisationlayout'});
});


// REAL TIME PROCESS TRACKING
router.get('/process', isLoggedIn, function (req, res, next) {
    res.render('visualisation/process', {title: 'Process', layout: 'layout/visualisationlayout'});
});


// REAL TIME (FILE ACTIVITY + DEPENDENCY)
router.get('/fileActivity', isLoggedIn, function (req, res, next) {
    res.render('visualisation/fileActivity', {title: 'File Activity', layout: 'layout/visualisationlayout'});
});

// PERFORMANCE TESTING
router.get('/performanceTesting', isLoggedIn, function (req, res, next) {
    res.render('visualisation/performanceTesting', {title: 'PerformanceTesting', layout: 'layout/visualisationlayout'});
});

// MOCK DATA (DEPENDENCY)
router.get('/fileActivity/dependency', isLoggedIn, function (req, res, next) {
    res.render('visualisation/dependency', {title: 'Dependency', layout: 'layout/visualisationlayout'});
});

// Augmented reality
router.get('/augmentedReality', isLoggedIn, function (req, res, next) {

    res.render('augmentedReality/index', {title: 'Dependency', layout: 'layout/augmentedRealityLayout'});
});
// Augmented reality porting
router.get('/augmentedRealityPorting', isLoggedIn, function (req, res, next) {

    console.log("proting running");
    console.log(req.query);

    console.log(req.query.arselect);

    if (req.query.arselect == undefined) {
        res.redirect("/page/home")
    } else if (req.query.arselect == "live") {
        res.redirect("/page/augmentedReality");
    } else if (req.query.arselect == "static") {
        res.redirect("/page/augmentedRealityStatic");
    } else {
        res.redirect("/page/home")
    }



});


// Attribution

router.get('/attribution',isLoggedIn, function(req, res, next) {
    res.render('attribution/index');
});


router.get('/ipAttributionInput',isLoggedIn ,function(req, res, next) {
    res.render('attribution/ipAttributionInput');
});

router.get('/ipAttribution', isLoggedIn,function(req, res, next) {
    // console.log(req.query.ipaddress);
    res.render('attribution/ipAttribution',{ipaddsend:req.query.ipaddress});
});


// handling the camera confrim page. selection of the static or live option is sent via handlebars
router.get("/arcameraConfirm", isLoggedIn, (req, res, next) => {

// For AR; Need to be run as it loads
// important: Since i found that the client side request this ARMachine array as a ajax, it would
// not wait for the request to finish before continuing, hence, the retrieve would not work fast enough
// so start the retrieve on load to prevent this issue.
// Unless the front end can be a sync function which waits for the data before continuing.
    MongoDB.MongoClient.connect(arurl, function (err, db) {

        if (err) {
            console.log("conn error");
        }
        db.collection("ARmachine", function (err, machine) {
            machine.find().toArray(function (err, result) {
                if (err) {
                    throw err;
                } else {

                    for (var i = 0; i < result.length; i++) {
                        machines[i] = result[i];
                    }
                    console.log("Returned machines");
                    console.log(machines);


                }
            });

        });

    });
    let selection;
    // get the get query from the url
    console.log(req.query.arselect);

    if (req.query.arselect == undefined) {
        selection = ""
    } else {
        selection = req.query.arselect;
    }


    res.render('page/arcameraConfirm', {
        layout: 'layout/layout',
        firstname: req.session.useInfoo.firstname,
        arselection: selection

    });

});

router.get('/augmentedRealityStatic', isLoggedIn, function (req, res, next) {

    res.render('augmentedReality/indexStatic', {title: 'Dependency', layout: 'layout/augmentedRealityLayout'});
});

// AR
// Sents the machine array when the front end requests it
router.get("/machines", isLoggedIn, function (request, response) {
    console.log("AR machones");
    response.send(machines);


});

// load register page

router.get('/register', isLoggedout, function (req, res, next) {

    // get the flash session when there is errors, which contains the previous user data typed in to be dynamically displayed
    // back to each individual fields
    // if there is no error, there would just be an empty array []
    var messages = req.flash('error');
    console.log(messages);
    console.log("just to see if null");

    console.log(messages.length);
    console.log(messages.length > 0);

    let listtoPort;
    let existingdata = false;
    if (messages.length > 0) {
        if (messages[0].userDetails != undefined) {
            listtoPort = {
                emailadd: messages[0].userDetails.emailadd,

                firstName: messages[0].userDetails.firstName,
                lastName: messages[0].userDetails.lastName,
                jobtitle: messages[0].userDetails.jobtitle,
                institution: messages[0].userDetails.institution,
                countryName: messages[0].userDetails.countryName,
                state: messages[0].userDetails.state,
                cityName: messages[0].userDetails.cityName,
                zipcode: messages[0].userDetails.zipcode,
                inputAddress: messages[0].userDetails.inputAddress,
                phoneNumber: messages[0].userDetails.phoneNumber,
                faxNumber: messages[0].userDetails.faxNumber,
                workSector: messages[0].userDetails.workSector,
                jobFunction: messages[0].userDetails.jobFunction,
                exampleRadios: messages[0].userDetails.exampleRadios


            };
            existingdata = true;

            console.log("Print what is saved from flah");
            console.log(listtoPort);
        } else {
            // empty data to be pushed on first load, this is to prevent null
            console.log("undefined ran works");
            listtoPort = {
                emailadd: "",
                firstName: "",
                lastName: "",
                jobtitle: "",
                institution: "",
                countryName: "",
                state: "",
                cityName: "",
                zipcode: "",
                inputAddress: "",
                phoneNumber: "",
                faxNumber: "",
                workSector: "",
                jobFunction: "",
                exampleRadios: ""


            };
        }
    }


    res.render('registration', {
        layout: 'layout/layout',
        messages: messages,
        hasError: messages.length > 0,
        success: req.session.success,
        listtoPort: listtoPort,
        existingdata: existingdata,
        captchaClientKey: clientSideSecret
    });
    req.session.errors = null;
});

// logout handling
router.get('/logout', function (req, res, next) {
    // destroy session
    req.session.destroy(function (err) {
        if (err) {
            console.log(err)
        }
        // clear cookies from user browser
        res.clearCookie('connect.sid');
        // passport logout
        req.logout();
        res.redirect("/")

    })


});


//last

router.get('*', function (req, res) {


    res.redirect("/page/home")
});


// file uploader

router.post('/lockyUpload', isLoggedIn, function (req, res) {

    console.log("Run");
    console.log("use uid: " + req.session.useInfoo.uid);

    let currentFileID;
    let newFileID;


    connection.query("SELECT MAX(fileNo) AS fileNo FROM fileupload WHERE uid = ?", req.session.useInfoo.uid.toString(), (err, row) => {

        if (err)
            throw err;
        console.log("Retrieved data for file upload");
        console.log(row);
        console.log(row[0].fileNo);

        row[0].fileNo == null ? currentFileID = 0 : currentFileID = row[0].fileNo;


        console.log("TYTTYT");
        console.log(currentFileID);
        newFileID = parseInt(currentFileID) + 1;
        console.log(newFileID);


    });


    // create an incoming form object
    var form = new formidable.IncomingForm();
    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = false;

    // store all uploads in the /uploads directory
    form.uploadDir = path.join(__dirname, '../Fileuploads');


    // every time a file has been uploaded successfully,
    // rename it to it's orignal name
    form.on('file', function (field, file) {
        console.log("File anme save");
        console.log(file.name);


        var insertQuery = "INSERT INTO fileupload ( uid, fileNo,fileName ) values (?,?,?)";
        connection.query(insertQuery, [req.session.useInfoo.uid.toString(), newFileID, file.name.substring(0, 100)], (err, insertrows) => {
            if (err)
                console.log(err);

            console.log("Insert Row for file upload");
            console.log(insertrows);


        });
        console.log("File directory");
        console.log(form.uploadDir);
        fs.rename(file.path, path.join(form.uploadDir, req.session.useInfoo.uid.toString() + "_" + newFileID + ".txt"), err => {
            if (err) console.log(err);
        });
    });

    // log any errors that occur
    form.on('error', function (err) {
        console.log('An error has occured: \n' + err);
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function () {
        res.end('success');
    });

    form.parse(req, (err, fields, files) => {
        console.log(fields);
        console.log(files);


    });


});


// When user selects a file
router.post('/fileSelect', isLoggedIn, (req, res) => {
    console.log("Selected file");
    console.log(req.body.fileselection);
    if (req.body.fileselection == "") {
        res.redirect("/error")
    } else {

        // save to session when is retrieved in the api.js
        req.session.fileSelectedFileNo = req.body.fileselection;
        req.session.save();
        res.redirect("/page/lockyAnalysis")
    }


});


// middleware to make sure only admin can access these pages
function isLoggedInAdmin(req, res, next) {

    console.log("admin cehck print");
    console.log(req.session.useInfoo.userrole.toString());


    if (req.isAuthenticated()) {


        if (req.session.useInfoo.userrole.toString() == "admin") {
            console.log("Page check username & session");
            console.log(req.session.useInfoo.username);


            connection.query("SELECT * FROM usersession WHERE email = ?", [req.session.useInfoo.username.toString()], (err, retrievedRow) => {

                if (err) console.log(err);
                console.log("Retrieved row from the db; page load");
                console.log(retrievedRow[0].sessionId);

                //compare session
                if (req.session.id.toString() == retrievedRow[0].sessionId.toString()) {
                    return next();
                } else {


                    req.session.destroy(function (err) {
                        if (err) {
                            console.log(err)
                        }
                        res.clearCookie('connect.sid');
                        req.logout();
                        res.redirect("/errorSession")

                    });


                }


            });


        } else {
            res.redirect("/error")
        }


    } else {
        res.redirect("/error")
    }


}

// middleware to make sure only standard users can access these pages
function isLoggedIn(req, res, next) {


    if (req.isAuthenticated()) {


        if (req.session.useInfoo.userrole.toString() == "member") {


            console.log("Page check username & session");
            console.log(req.session.useInfoo.username);


            connection.query("SELECT * FROM usersession WHERE email = ?", [req.session.useInfoo.username.toString()], (err, retrievedRow) => {

                if (err) console.log(err);
                console.log("Retrieved row from the db; page load");
                console.log(retrievedRow[0].sessionId);

                //compare session
                if (req.session.id.toString() == retrievedRow[0].sessionId.toString()) {
                    return next();
                } else {
                    req.session.destroy(function (err) {
                        if (err) {
                            console.log(err)
                        }
                        res.clearCookie('connect.sid');
                        req.logout();
                        res.redirect("/errorSession")

                    });

                }


            });


        } else {
            res.redirect("/error")
        }


    } else {
        res.redirect("/error")
    }


}

// middlware for users not currently logged in.

function isLoggedout(req, res, next) {

    if (!req.isAuthenticated()) {

        return next();
    }
    res.redirect("/page/home")


}


module.exports = router;
