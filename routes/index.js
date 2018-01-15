var express = require('express');
var querystring = require('querystring');
var https = require('https');
var passport = require('passport');

var router = express.Router();




/* GET home page. */
router.get('/',isLoggedout, function (req, res, next) {

    var messages = req.flash('errorLogin');
    console.log(messages);
    console.log(messages.length);
    console.log(messages.length>0);
    res.render('index', {layout: 'layout/layout',messages:messages,hasError:messages.length>0});
});
router.get('/artest', function (req, res, next) {


    res.render('artest');
});

/* GET home page. */
router.get('/error', function (req, res, next) {


    res.render('error', {layout: 'layout/layout'});
});
router.get('/errorSession', function (req, res, next) {


    res.render('errorSession', {layout: 'layout/layout'});
});
//last

router.get('*', function(req, res){
    res.redirect("/page/home")
});





function isLoggedout(req, res, next) {

    if (!req.isAuthenticated()) {

        return next();
    }
    res.redirect("/page/home")


}
module.exports = router;
