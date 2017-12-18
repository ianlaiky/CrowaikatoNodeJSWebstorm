"use strict";

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let dependencySchema = new Schema({
    _id: {type: String},
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

module.exports = mongoose.model("IndirectDependency", dependencySchema, "indirectdependency");
