var express = require('express');
var passport = require('passport');
var CryptoJS = require("crypto-js");
var router = express.Router();


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
router.get('/visualisation', function(req, res, next) {
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
    req.logout();
    res.redirect("/")

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


module.exports = router;
