'use strict';

var url = require('url');


var Profiles = require('./ProfilesService');


module.exports.profileGET = function profileGET (req, res, next) {
  Profiles.profileGET(req.swagger.params, res, next);
};
