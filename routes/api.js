require('../models/process.js');
require('../models/lines.js');
require('../models/locky.js');
require('../models/file.js');
require('../models/directDependency.js');
require('../models/indirectDependency.js');

// Required otherwise IDE gives error about findOne and find methods
const mongoose = require('mongoose');
const Process = mongoose.model("Process");
const Lines = mongoose.model("Lines");
const Locky = mongoose.model("Locky");
const File = mongoose.model("File");
const DirectDependency = mongoose.model("DirectDependency");
const IndirectDependency = mongoose.model("IndirectDependency");


// Express Routing
const express = require('express');
const router = express.Router();

// Error handling code
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

/* REST GET API. */
// Locky
router.get('/processes', isLoggedIn,function(req,res) {

    Locky.findOne({uid:"1",fileNo:"1"}, 'scanTimestamp').sort('-scanTimestamp').exec(function (err, result) {
        console.log("HGHHJH");
        console.log(result);
        if (err)
            return handleError(res, err.message, "Failed to get processes");

        if (result === null)
            return handleError(res, "DB Null", "Database might be empty", 404);

        Locky.find({"scanTimestamp": result.scanTimestamp}, '_id scanTimestamp procPath procName score rank', function (err, result2) {
                if (err)
                    return handleError(res, err.message, "Failed to get processes");

                if (result !== null) {
                    res.json(result2);
                } else {
                    return handleError(res, "DB Null", "Database might be empty", 404);
                }
        });

    });
});

// /processes/{RANK}
router.get('/processes/:rank', function(req,res) {
    Locky
        .findOne({uid:"1",fileNo:"1","rank": parseInt(req.params.rank)}, '_id scanTimestamp procPath procName score rank')
        .sort('-scanTimestamp')
        .exec(function (err, result) {
        if (err)
            return handleError(res, err.message, "Failed to get processes");

        if (result !== null) {
            res.json(result);
        } else {
            return handleError(res, "DB Null", "Database might be empty", 404);
        }
    });
});

// /processes/{RANK}/files
router.get('/processes/:rank/files', function(req,res) {
    Locky
        .findOne({uid:"1",fileNo:"1","rank": parseInt(req.params.rank)}, 'rank files')
        .sort('-scanTimestamp')
        .exec(function (err, result) {
            if (err)
                return handleError(res, err.message, "Failed to get processes");

            if (result !== null) {
                res.json(result.files);
            } else {
                return handleError(res, "DB Null", "Database might be empty", 404);
            }
        });
});

// /processes/{RANK}/lines
router.get('/processes/:rank/lines', function(req,res) {
    Lines
        .findOne({uid:"1",fileNo:"1","rank": parseInt(req.params.rank)}, 'rank lines')
        .sort('-scanTimestamp')
        .exec(function (err, result) {
            if (err)
                return handleError(res, err.message, "Failed to get processes");

            if (result !== null) {
                res.json(result.lines);
            } else {
                return handleError(res, "DB Null", "Database might be empty", 404);
            }
        });
});

// /processes/{RANK}/traversals
router.get('/processes/:rank/traversals', function(req,res) {
    Locky
        .findOne({uid:"1",fileNo:"1","rank": parseInt(req.params.rank)}, 'rank traversals')
        .sort('-scanTimestamp')
        .exec(function (err, result) {
            if (err)
                return handleError(res, err.message, "Failed to get processes");

            if (result !== null) {
                res.json(result.traversals);
            } else {
                return handleError(res, "DB Null", "Database might be empty", 404);
            }
        });
});

// /processes/{RANK}/libraries
router.get('/processes/:rank/libraries', function(req,res) {
    Locky
        .findOne({uid:"1",fileNo:"1","rank": parseInt(req.params.rank)}, 'rank libraries')
        .sort('-scanTimestamp')
        .exec(function (err, result) {
            if (err)
                return handleError(res, err.message, "Failed to get processes");

            if (result !== null) {
                res.json(result.libraries);
            } else {
                return handleError(res, "DB Null", "Database might be empty", 404);
            }
        });
});

// /files/byName/{NAME}/{TYPE}
router.get('/files/byName/:name', function(req,res) {
      File
        .find({fileActivities: {$elemMatch: {filename: req.params.name}}})
        .exec(function (err, result) {
            if (err)
                return handleError(res, err.message, "Failed to get processes");

            if (result !== null) {
              let outerList = [];
              let innerList = [];
              result.forEach(function (item) {
                outerList.push(item.fileActivities);
              });
              outerList.forEach(function (items) {
                  items.forEach(function (item){
                    innerList.push(item);
                  });
              });
              res.json(innerList);
            } else {
                return handleError(res, "DB Null", "Database might be empty", 404);
            }
        });
});

// /directDependencies/byNameAndType/{NAME}/{TYPE}
router.get('/directDependencies/byNameAndType/:name/:type', function(req,res) {
      DirectDependency
        .find({filename: req.params.name, type: req.params.type})
        .exec(function (err, result) {
            if (err)
                return handleError(res, err.message, "Failed to get processes");

            if (result !== null) {
              res.json(result);
            } else {
                return handleError(res, "DB Null", "Database might be empty", 404);
            }
        });
});

// /IndirectDependencies
router.get('/indirectDependencies', function(req,res) {
      IndirectDependency
        .findOne()
        .exec(function (err, result) {
            if (err)
                return handleError(res, err.message, "Failed to get processes");

            if (result !== null) {
              res.json(result);
            } else {
                return handleError(res, "DB Null", "Database might be empty", 404);
            }
        });
});

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated()) {

        return next();
    }
    res.redirect("/")


}

module.exports = router;
