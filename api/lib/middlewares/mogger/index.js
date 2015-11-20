var _ = require('lodash');

module.exports = function(config){ 
   if (!_.has(config, "tag")){
      console.log("No config provided");
   } 
   var tag = _.get(config, "tag", "");

   return function* (next) {
     console.log("[" + tag + "]-" + "Console middleware started");
     yield next;
   };

};

  
