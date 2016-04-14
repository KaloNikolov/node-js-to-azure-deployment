'use strict';

var url = require('url');


var Events = require('./EventsService');


module.exports.eventCollectTrackingIdPOST = function eventCollectTrackingIdPOST (req, res, next) {
  Events.eventCollectTrackingIdPOST(req.swagger.params, res, next);
};
