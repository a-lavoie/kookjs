var _get = require('lodash.get');
var _has = require('lodash.has');

module.exports = function(config){ 
   if (!_has(config, "tag")){
      console.log("No config provided");
   }
   var tag = _get(config, "tag", "");

   return function* (next) {
     console.log("[" + tag + "]-" + "Console middleware started");
     yield next;
   };

};

  
