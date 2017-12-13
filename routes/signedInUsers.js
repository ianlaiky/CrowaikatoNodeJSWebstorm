
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var querystring = require('querystring');
var https = require('https');

var expressValidator = require('express-validator');
var expressSession = require('express-session');

var router = express.Router();



/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.render('page/home', {layout: 'layout/layout'});
});





module.exports = router;
