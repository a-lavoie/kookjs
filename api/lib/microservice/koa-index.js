var compose = require('koa-compose');

module.exports = function* (config) {

  var get = [
    function* (next) {
      console.log("First middleware");
      yield next;
    },
    function* (next) {
       yield next;
       this.body = {};
    }
  ];

  var middlewareA = function *(next){
     console.log("Into middlewareA");
     yield next;
  };

  var m = [
  ];

  return {
    get: compose(m.concat(get))
  };
};
