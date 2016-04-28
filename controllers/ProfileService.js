'use strict';

exports.profileGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * query (String)
  * properties (List)
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
    "_id" : 1,
    "firstName" : "Novak"
  }, {
    "_id" : 2,
    "firstName" : "Grigor"
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

exports.profileProfileIdGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * profileId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "_id" : 1,
  "firstName" : "Novak"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

