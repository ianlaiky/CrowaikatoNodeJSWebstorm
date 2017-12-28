var express = require('express');
var passport = require('passport');
var CryptoJS = require("crypto-js");
// var io = require('socket.io')(http);
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
    ///Section: Retrieve Real-time Data
    io.on('connection', function (socket) {

        //User Connected to Socket
        console.log('a user connected');

        //User Disconnect from Socket
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });

        //Connect to Oplog Collection and listen for insertion of data(actions)
        MongoDB.MongoClient.connect(oplogurl, function (err, db) {

            if (err) {
                console.log("conn error");
            }

            db.collection('oplog.rs', function (err, oplog) {

                oplog.find({}, {
                    ts: 1
                }).sort({
                    $natural: -1
                }).limit(1).toArray(function (err, data) {
                    console.log("WHat is this data");
                    console.log(data);
                    var lastOplogTime = data[0].ts;
                    console.log("--");
                    console.log(lastOplogTime);
                    console.log("MOngodb datatime");
                    console.log(MongoDB.Timestamp(0, Math.floor(new Date().getTime() / 1000)));
                    var queryForTime;

                    if (lastOplogTime) {
                        queryForTime = {
                            $gt: lastOplogTime
                        };
                    } else {
                        var tstamp = new MongoDB.Timestamp(0, Math.floor(new Date().getTime() / 1000))
                        queryForTime = {
                            $gt: tstamp
                        };
                    }
                    var cursor = oplog.find({
                        ts: queryForTime
                    }, {
                        tailable: true,
                        awaitdata: true,
                        oplogReplay: true,
                        numberOfRetries: -1
                    });
                    console.log("loop");
                    var stream = cursor.stream();
                    stream.on('data', function (oplogdoc) {
                        console.log("qn 2");
                        console.log(oplogdoc);
                        console.log(oplogdoc.ns);
                        if (oplogdoc.ns == 'ARDB.ARaction') {
                            socket.emit('action', oplogdoc);
                        }

                    });
                });
            });

        });

    });

///Section: Retrieve a list of machines from database
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

                    app.get("/machines", function (request, response) {
                        response.send(machines);
                    });

                }
            });
        });

    });
    res.render('augmentedReality/index', {title: 'Dependency', layout: 'layout/augmentedRealityLayout'});
});


router.get('/register', isLoggedout, function (req, res, next) {


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

router.get('*', function (req, res) {
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
