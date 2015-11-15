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

  var post = [
    function* (next) {
      console.log("First middleware");
      yield next;
    },
    function* (next) {
       yield next;
       this.body = {};
    }
  ];

  var put = [
    function* (next) {
      console.log("First middleware");
      yield next;
    },
    function* (next) {
       yield next;
       this.body = {};
    }
  ];

  var patch = [
    function* (next) {
      console.log("First middleware");
      yield next;
    },
    function* (next) {
       yield next;
       this.body = {};
    }
  ];

  var del = [
    function* (next) {
      console.log("First middleware");
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
