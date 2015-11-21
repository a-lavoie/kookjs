var compose = require('koa-compose');
var Mogger = (require('../middlewares/mogger'))("No config");

var g = new Mogger({tag: "Activities"});

module.exports = function* (config) {

  var get = [
    function* (next) {
      g.log("GET middleware");
      yield next;
    },
    function* (next) {
       yield next;
       this.body = {};
    }
  ];

  var post = [
    function* (next) {
      g.log("POST middleware");
      yield next;
    },
    function* (next) {
       yield next;
       this.body = {};
    }
  ];

  var put = [
    function* (next) {
      g.log("PUT middleware");
      yield next;
    },
    function* (next) {
       yield next;
       this.body = {};
    }
  ];

  var patch = [
    function* (next) {
      g.log("PATCH middleware");
      yield next;
    },
    function* (next) {
       yield next;
       this.body = {};
    }
  ];

  var del = [
    function* (next) {
      g.log("DELETE middleware");
      yield next;
    },
    function* (next) {
       yield next;
       this.body = {};
    }
  ];


  //var middlewareA = function *(next){
  //   console.log("Into middlewareA");
  //   yield next;
  //};

  var m = [
  ];

  return {
    get: compose(m.concat(get)),
    post: compose(m.concat(post)), 
    put: compose(m.concat(put)),
    patch: compose(m.concat(patch)),
    delete: compose(m.concat(del))
  };
};
