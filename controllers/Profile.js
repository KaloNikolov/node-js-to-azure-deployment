'use strict';

var url = require('url');


var Profile = require('./ProfileService');


module.exports.profileGET = function profileGET (req, res, next) {
  Profile.profileGET(req.swagger.params, res, next);
};

module.exports.profileProfileIdGET = function profileProfileIdGET (req, res, next) {
  Profile.profileProfileIdGET(req.swagger.params, res, next);
};
