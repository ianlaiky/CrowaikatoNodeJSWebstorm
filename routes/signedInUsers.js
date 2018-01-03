var express = require('express');
var passport = require('passport');
var CryptoJS = require("crypto-js");

var router = express.Router();
var MongoDB = require('mongodb');


///Variables - Connection strings for MongoDB Atlas Databases
var oplogurl = 'mongodb://tester:cR0w_+35t@arproject-shard-00-00-cjsdl.mongodb.net:27017,arproject-shard-00-01-cjsdl.mongodb.net:27017,' +
    'arproject-shard-00-02-cjsdl.mongodb.net:27017/local?ssl=true&replicaSet=ARPROJECT-shard-0&authSource=admin';
var arurl = 'mongodb://tester:cR0w_+35t@arproject-shard-00-00-cjsdl.mongodb.net:27017,arproject-shard-00-01-cjsdl.mongodb.net:27017,' +
    'arproject-shard-00-02-cjsdl.mongodb.net:27017/ARDB?ssl=true&replicaSet=ARPROJECT-shard-0&authSource=admin';

var machines = [];


/* GET users listing. */
router.get('/home', isLoggedIn, function (req, res, next) {

    // console.log("First name ics :"+req.session.useInfoo);

    console.log("First name ics :" + req.session.useInfoo.firstname);
    console.log("First name ics :" + req.session.id);
    // console.log("First name is :"+req.session.useInfoo);


    // res.render('index', { title: 'Express' });
    res.render('page/home', {layout: 'layout/layout', firstname: req.session.useInfoo.firstname});
});

/* HOME PAGE */
router.get('/visualisation', isLoggedIn,function(req, res, next) {
    res.render('visualisation/index', { title: 'Visual Progger',layout: 'layout/visualisationlayout' });
});

// STATIC ANALYSIS
router.get('/lockyAnalysis',isLoggedIn, function(req, res, next) {
    res.render('visualisation/lockyAnalysis', { title: 'Locky Analysis',layout: 'layout/visualisationlayout' });
});


// REAL TIME PROCESS TRACKING
router.get('/process',isLoggedIn, function(req, res, next) {
    res.render('visualisation/process', { title: 'Process',layout: 'layout/visualisationlayout' });
});


// REAL TIME (FILE ACTIVITY + DEPENDENCY)
router.get('/fileActivity',isLoggedIn, function(req, res, next) {
    res.render('visualisation/fileActivity', { title: 'File Activity',layout: 'layout/visualisationlayout' });
});

// PERFORMANCE TESTING
router.get('/performanceTesting',isLoggedIn, function(req, res, next) {
    res.render('visualisation/performanceTesting', { title: 'PerformanceTesting' ,layout: 'layout/visualisationlayout'});
});

// MOCK DATA (DEPENDENCY)
router.get('/fileActivity/dependency',isLoggedIn, function(req, res, next) {
    res.render('visualisation/dependency', { title: 'Dependency',layout: 'layout/visualisationlayout' });
});

// Augmented reality
router.get('/augmentedReality',isLoggedIn, function(req, res, next) {

    res.render('augmentedReality/index', { title: 'Dependency',layout: 'layout/augmentedRealityLayout' });
});

// For AR

MongoDB.MongoClient.connect(arurl, function(err, db) {

    if (err) {
        console.log("conn error");
    }
    db.collection("ARmachine", function(err, machine) {
        machine.find().toArray(function(err, result) {
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

router.get("/machines", isLoggedIn,function(request, response) {
    response.send(machines);
});

router.get('/register', isLoggedout,function (req, res, next) {


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
    req.logout();
    res.redirect("/")

});





//last

router.get('*', function(req, res){
    res.redirect("/page/home")
});


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

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated()) {

        return next();
    }
    res.redirect("/")


}

function isLoggedout(req, res, next) {

    if (!req.isAuthenticated()) {

        return next();
    }
    res.redirect("/page/home")


}


module.exports = router;
