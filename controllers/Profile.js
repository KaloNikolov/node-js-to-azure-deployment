'use strict';

var url = require('url');


var Profile = require('./ProfileService');


module.exports.profileProfileIdGET = function profileProfileIdGET (req, res, next) {
  Profile.profileProfileIdGET(req.swagger.params, res, next);
};
