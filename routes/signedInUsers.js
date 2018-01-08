var express = require('express');
var passport = require('passport');
var CryptoJS = require("crypto-js");

var router = express.Router();
var MongoDB = require('mongodb');

var path = require('path');
var formidable = require('formidable');
var fs = require('fs');


//db
var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);


///Variables - Connection strings for MongoDB Atlas Databases
var oplogurl = 'mongodb://tester:cR0w_+35t@arproject-shard-00-00-cjsdl.mongodb.net:27017,arproject-shard-00-01-cjsdl.mongodb.net:27017,' +
    'arproject-shard-00-02-cjsdl.mongodb.net:27017/local?ssl=true&replicaSet=ARPROJECT-shard-0&authSource=admin';
var arurl = 'mongodb://tester:cR0w_+35t@arproject-shard-00-00-cjsdl.mongodb.net:27017,arproject-shard-00-01-cjsdl.mongodb.net:27017,' +
    'arproject-shard-00-02-cjsdl.mongodb.net:27017/ARDB?ssl=true&replicaSet=ARPROJECT-shard-0&authSource=admin';

var machines = [];

router.post("/registerForm", passport.authenticate('local.signup', {

    successRedirect: '/page/register', // redirect to the secure profile section
    failureRedirect: '/page/register', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));


router.post('/loginBackend', passport.authenticate('local.signin', {

    successRedirect: '/page/home', // redirect to the secure profile section
    failureRedirect: '/', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages

}));

/* GET users listing. */
router.get('/home', isLoggedIn, function (req, res, next) {

    // console.log("First name ics :"+req.session.useInfoo);

    console.log("First name ics :" + req.session.useInfoo.firstname);
    console.log("email ics :" + req.session.useInfoo.username);
    console.log("First name ics :" + req.session.useInfoo.uid);
    console.log("First name ics :" + req.session.id);
    // console.log("First name is :"+req.session.useInfoo);


    // res.render('index', { title: 'Express' });
    res.render('page/home', {layout: 'layout/layout', firstname: req.session.useInfoo.firstname});
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

// For AR

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


            }
        });
    });

});

router.get("/machines", isLoggedIn, function (request, response) {
    response.send(machines);
});

router.get('/register', function (req, res, next) {


    var messages = req.flash('error');
    console.log(messages);
    console.log(messages.length);
    console.log(messages.length > 0);
    // console.log("this shoudl dis");
    // console.log(req.session.success);


    res.render('registration', {
        layout: 'layout/layout',
        messages: messages,
        hasError: messages.length > 0,
        success: req.session.success
    });
    req.session.errors = null;
});

router.get('/logout', function (req, res, next) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err)
        }
        res.clearCookie('connect.sid');
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
        var insertQuery = "INSERT INTO fileupload ( uid, fileNo ) values (?,?)";
        connection.query(insertQuery, [req.session.useInfoo.uid.toString(), newFileID], (err, insertrows) => {
            if (err)
                console.log(err);
            console.log("Insert Row for file upload");
            console.log(insertrows);


        });
        console.log("File directory");
        console.log(form.uploadDir);
        fs.rename(file.path, path.join(form.uploadDir, req.session.useInfoo.uid.toString() + "_" + newFileID + ".txt"), err => {
            if (err) throw err;
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


    // parse the incoming request containing the form data
    // form.parse(req);

});


function isLoggedIn(req, res, next) {


    let currentSessionId;

    if (req.isAuthenticated()) {
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
                res.redirect("/errorSession")
            }


        });


    } else {
        res.redirect("/error")
    }


}

function isLoggedout(req, res, next) {

    if (!req.isAuthenticated()) {

        return next();
    }
    res.redirect("/page/home")


}


module.exports = router;
