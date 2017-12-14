var express = require('express');
var querystring = require('querystring');
var https = require('https');
var passport = require('passport');

var router = express.Router();




/* GET home page. */
router.get('/', function (req, res, next) {

    var messages = req.flash('errorLogin');
    console.log(messages);
    console.log(messages.length);
    console.log(messages.length>0);
    res.render('index', {layout: 'layout/layout',messages:messages,hasError:messages.length>0,success: req.session.success});
});






module.exports = router;
