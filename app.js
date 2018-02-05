var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var querystring = require('querystring');
var https = require('https');
var MongoDB = require('mongodb');



var expressValidator = require('express-validator');
var expressSession = require('express-session');

var passport = require('passport');
var flash = require('connect-flash');

var Promise = require('bluebird');

var index = require('./routes/index');
var userAccounts = require('./routes/signedInUsers');
const api = require('./routes/api');


const io = require('./socket/websocket');

var dbconfigMongo = require('./config/databaseMongo');
require('./config/passport');


var app = express();




// Assigns app io variable
app.io = io;


// Set bluebird as mongoose's promise
mongoose.Promise = Promise;

// Connect to MongoDB
mongoose.connect(dbconfigMongo.VisualProggerConnection, function(err) {
    if(err) throw err;
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret: 'ianlaicrowwebsite', saveUninitialized: false, resave: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());





app.use('/page', userAccounts);
app.use('/api', api);
app.use('/', index);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err.status);
    // render the error page
    res.status(err.status || 500);
    res.redirect('/errors');
});

console.log("CURRENT DEV:");
console.log(process.env.NODE_ENV);



function allowed(req) {
    let ip = req.ip.replace(/^.*:/, '');
    console.log('ip addr: ' + ip);
    return (ip === '1' || ip === '127.0.0.1');
}


module.exports = app;
