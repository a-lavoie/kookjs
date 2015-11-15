var compose = require('koa-compose');

module.exports = function* (config) {
   var p = [
       function* () {
          console.log("In package");
       }
   ];

   var m = compose([
   ]);

   return {
    packg: compose([m].concat(p))
  };
};

