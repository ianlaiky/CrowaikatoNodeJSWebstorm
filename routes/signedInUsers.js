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

    // successRedirect: '/page/register', // redirect to the secure profile section
    failureRedirect: '/page/register', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}), (req, res) => {


    req.logout();
    res.redirect("/page/register")


});


router.post('/loginBackend', passport.authenticate('local.signin', {

    // successRedirect: '/page/home', // redirect to the secure profile section
    failureRedirect: '/', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages

}), (req, res) => {
    console.log("Switch roles running");


    if (req.session.useInfoo.userrole.toString() == "admin") {
        res.redirect("/page/adminConsole?sortBy=year&year=2018")
    } else {

        let insertQueryLog = "INSERT INTO userlog ( year, month, date, day, mode ) values (?,?,?,?,?)";
        let now = new Date();
        let saveYear = now.getFullYear();
        let saveMonth = now.getMonth() + 1;
        let saveDate = now.getDate();
        let saveDay = now.getDay();
        let saveMode = "login";


        connection.query(insertQueryLog, [saveYear.toString(), saveMonth.toString(), saveDate.toString(), saveDay.toString(), saveMode.toString()], (err, insertedLog) => {
            if (err) console.log(err);
            console.log("Logs inserted");
            console.log(insertedLog);
            res.redirect("/page/home")
        });
    }


});


router.post("homeSettingsDetailsEdit",isLoggedIn,(req,res,next)=>{
    console.log("Data get from details get");
    console.log(req.body);



});

// change password/details
router.get("/homeSettings",isLoggedIn,(req,res,next)=>{

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
        fulltimestudent: req.session.useInfoo.fulltimestudent

    });

});



/* GET users listing. */
router.get('/home', isLoggedIn, function (req, res, next) {

    // console.log("First name ics :"+req.session.useInfoo);
    let fileuploadInfo = [];
    console.log("First name ics :" + req.session.useInfoo.firstname);
    console.log("email ics :" + req.session.useInfoo.username);
    console.log("First name ics :" + req.session.useInfoo.uid);
    console.log("First name ics :" + req.session.id);
    // console.log("First name is :"+req.session.useInfoo);

    // do the list
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


    // res.render('index', { title: 'Express' });
});


router.post("/adminContactUsArchive",isLoggedInAdmin,(req,res,next)=>{

console.log(req.body);
console.log(req.body.id);

    connection.query("select * from contact_us where id=?",[req.body.id],(err,row)=>{
        if(err)console.log(err);
        console.log("from db");
        console.log(row);
        if(row.length!=0){



            connection.query("update contact_us set archive='true' where id=?",[req.body.id],function (err,updateRow) {

                if (err)console.log(err);

                console.log("Update row");
                console.log(updateRow);

                res.redirect("/page/adminContactUs");


            });


        }else{
            res.redirect("/error");
        }

    });


});


router.get("/adminContactUs", isLoggedInAdmin, (req, res, next) => {

    connection.query("select * from contact_us where archive='false'", (err, row) => {

        if (err) {
            res.redirect("/error");
        } else {
            console.log(row);
            res.render('page/adminContactUs', {
                layout: 'layout/layout',
                firstname: req.session.useInfoo.firstname,
                rowData: row,
                rowDataHasItem:row.length>0
            });

        }


    });


});


// PERFORMANCE TESTING
router.get('/adminConsole', isLoggedInAdmin, function (req, res, next) {
    console.log("testing adminconsole param get");

    let sortBy;
    let year;

    // console.log(req.query.sortBy);
    // console.log(req.query.year);

    if(!req.query.sortBy){
        sortBy="year";
    }else{
        sortBy=req.query.sortBy;
    }
    if(!req.query.year){
        year="2018";
    }else{
        year=req.query.year;
    }


    if (sortBy.toString() == "year") {

        let monthsMaplogin = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let monthsMapregister = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let monthsLabel = ["'January'", "'February'", "'March'", "'April'", "'May'", "'June'", "'July'", "'August'", "'September'", "'October'", "'November'", "'December'"];

        connection.query("Select * from userlog where year = ?", [year.toString()], (err, logsRet) => {

            console.log(logsRet);
            for (let i = 0; i < logsRet.length; i++) {
                console.log("Print");
                console.log(logsRet[i].month);
                if (logsRet[i].mode.toString() == "login") {
                    monthsMaplogin[logsRet[i].month - 1] = monthsMaplogin[logsRet[i].month - 1] + 1;

                } else {
                    monthsMapregister[logsRet[i].month - 1] = monthsMapregister[logsRet[i].month - 1] + 1;

                }
            }
            console.log(monthsMaplogin);
            console.log(monthsMapregister);
            console.log(monthsLabel);
            res.render('page/adminConsole', {
                layout: 'layout/layout',
                firstname: req.session.useInfoo.firstname,
                graphLabel: monthsLabel,
                graphData1: monthsMaplogin,
                graphData2: monthsMapregister
            });

        });

        // for(let i=1;i<13;i++){
        //
        // }

    } else if (sortBy.toString() == "month") {
        let monthsLabelIndex = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


        console.log(year);
        console.log(monthsLabelIndex.indexOf(req.query.month) + 1);

        // days in the month
        let noOfDaysInMonth = new Date(parseInt(year), parseInt(parseInt(monthsLabelIndex.indexOf(req.query.month)) + 1), 0).getDate();
        let monthN = parseInt(parseInt(monthsLabelIndex.indexOf(req.query.month)) + 1);
        console.log(noOfDaysInMonth);
        //
        let arrayOfDaysLogin = [];
        let arrayOfDaysRegister = [];
        let daysLabel = [];


        for (let x = 0; x < parseInt(noOfDaysInMonth); x++) {
            arrayOfDaysLogin.push(0);
            arrayOfDaysRegister.push(0);
            daysLabel.push(x + 1);
        }

        console.log("no of days in the month" + noOfDaysInMonth);
        console.log("Length of array" + arrayOfDaysLogin.length);

        connection.query("Select * from userlog where year = ? and month = ?", [year.toString(), monthN.toString()], (err, logsRet) => {

            console.log(logsRet);
            for (let i = 0; i < logsRet.length; i++) {
                console.log("Print");
                console.log(logsRet[i].month);
                if (logsRet[i].mode.toString() == "login") {
                    arrayOfDaysLogin[logsRet[i].date - 1] = arrayOfDaysLogin[logsRet[i].date - 1] + 1;

                } else {
                    arrayOfDaysRegister[logsRet[i].date - 1] = arrayOfDaysRegister[logsRet[i].date - 1] + 1;

                }
            }
            console.log(arrayOfDaysLogin);
            console.log(arrayOfDaysRegister);
            console.log(daysLabel);
            res.render('page/adminConsole', {
                layout: 'layout/layout',
                firstname: req.session.useInfoo.firstname,
                graphLabel: daysLabel,
                graphData1: arrayOfDaysLogin,
                graphData2: arrayOfDaysRegister
            });

        });


    }

//comment this out later
//     res.render('page/adminConsole', {layout: 'layout/layout', firstname: req.session.useInfoo.firstname,graphLabel:monthsLabel,graphData1:monthsMaplogin,graphData2:monthsMapregister});

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

router.get('/augmentedRealityStatic', isLoggedIn, function (req, res, next) {

    res.render('augmentedReality/indexStatic', {title: 'Dependency', layout: 'layout/augmentedRealityLayout'});
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
        console.log("File anme save");
        console.log(file.name);


        var insertQuery = "INSERT INTO fileupload ( uid, fileNo,fileName ) values (?,?,?)";
        connection.query(insertQuery, [req.session.useInfoo.uid.toString(), newFileID, file.name], (err, insertrows) => {
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


    // parse the incoming request containing the form data
    // form.parse(req);

});

router.post('/fileSelect', isLoggedIn, (req, res) => {
    console.log("Selected file");
    console.log(req.body.fileselection);
    if (req.body.fileselection == "") {
        res.redirect("/error")
    } else {


        req.session.fileSelectedFileNo = req.body.fileselection;
        req.session.save();
        res.redirect("/page/lockyAnalysis")
    }


});

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

function isLoggedout(req, res, next) {

    if (!req.isAuthenticated()) {

        return next();
    }
    res.redirect("/page/home")


}


module.exports = router;
