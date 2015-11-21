var compose = require('koa-compose');
var Mogger = (require('../middlewares/mogger'))("No config");

var g = new Mogger({tag: "Activities"});

module.exports = function* (config) {

  var createInOut = function* (next) {
    this.state.in = [];
    this.state.out = [];
    g.log("in and out created");
    yield next;
  };


  var createActivityContext = function* (next) {
    this.state.trace = true;
    yield next; 
  };

  var initNameSpace = function* (next) {
    this.state.ns = {};
    yield next;
  };

  var grabQueryContext = function* (next) {
    g.log("Activity created");
    g.log("trace=" + JSON.stringify(this.request.query) );
    g.log("activity=" + JSON.stringify(this.request.query) );
    this.state.activityName = this.request.query.activityName;
    yield next;
  };


  var get = [
    createActivityContext,
    grabQueryContext,
    function* (next) {
       this.body = {};
       yield next;
    },
    function* (next){
       this.body.trace = g.serialize();
    }
  ];

  var m = [
    initNameSpace,
    //log.middleware(),
    createInOut
  ];

  return {
    get: compose(m.concat(get))
  };
};
 
  // activity.name(""),
  // grabQueryContext.name("")
  //   .in("xx": "this.request.query.trace")
  //   .out("yy")
  //   .ready(),
  // middleware2
  //   .in("")


//  var grabQueryContext = function* (next) {
//    activity.in(xxList);     // this.state.grabQueryContext.in.xxList is set
//    ...
//    
//    activity.out("yy", oo);
//    yield next;
//  };




  //var middlewareA = function *(next){
  //   console.log("Into middlewareA");
  //   yield next;
  //};

