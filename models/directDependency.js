"use strict";

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let dependencySchema = new Schema({
    _id: {type: String},
    filename: {type: String},
    format: {type: String},
    filepath: {type: String},
    type: {type: Number},
    timestamp: {type: Number},
    dependencies: [
        {filename: String},
        {filepath: String},
        {format: String},
        {type: Number},
        {timestamp: Number},
        {processId: Number},
        {hostId: Number},
        {platform: Number},
        {version: Number}
    ]
});

module.exports = mongoose.model("DirectDependency", dependencySchema, "directdependency");
