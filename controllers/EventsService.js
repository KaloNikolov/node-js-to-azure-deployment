'use strict';

exports.eventCollectTrackingIdPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * trackingId (String)
  * payload (List)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.eventTypeGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pageSize (BigDecimal)
  * offset (String)
  * orderBy (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "total" : 2000,
  "offset" : 0,
  "pageSize" : 2,
  "hits" : [ {
    "id" : "pageView",
    "description" : "User has visited a web page",
    "schema" : {
      "properties" : {
        "pageTitle" : {
          "type" : "string"
        },
        "tags" : {
          "type" : "string"
        }
      },
      "required" : [ ]
    }
  } ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

