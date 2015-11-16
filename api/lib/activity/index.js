var compose = require('koa-compose');
var mogger = require('../middlewares/mogger');

module.exports = function* (config) {

  var createInOut = function* (next) {
    this.state.in = [];
    this.state.out = [];
    console.log("in and out created");
    yield next;
  };


  var createActivityContext = function* (next) {
    this.state.trace = true;
    yield next;
  };

  var grabQueryContext = function* (next) {
    console.log("Activity created");
    console.log("trace=" + JSON.stringify(this.request.query) );
    console.log("activity=" + JSON.stringify(this.request.query) );
    this.state.activityName = this.request.query.activityName;
    yield next;
  };

  var get = [
    createActivityContext,
    grabQueryContext,
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
    
    mogger({tag: "activity"}),
    createInOut
  ];

  return {
    get: compose(m.concat(get))
  };
};
 
