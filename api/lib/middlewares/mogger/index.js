var _ = require('lodash');

var loggers = [];

var LogEntry = function(text){
  this.timestamp = new Date();
  this.entry = text;
}
LogEntry.prototype.print = function(){
  return "[" + this.timestamp + "] " + this.entry;
}

var Mogger = function(config){
  if (!_.has(config, "tag")){
    console.log("No config provided");
  } 
  var tag = _.get(tag, "tag", "server");
  this.tag = tag;
  this.logs = [];
  loggers[tag] = _.get(loggers, tag, "server");
}
Mogger.prototype.middleware = function(){
  var self = this;
  return function* (next) {
    yield next;
  }
};
Mogger.prototype.log = function( text ){
  var log = new LogEntry(text);
  this.logs.push(log);
};
Mogger.prototype.getAll = function(){
  return _.map( this.logs, _.clone );
};
Mogger.prototype.serialize = function(){
  return JSON.stringify(_.clone(this));
};

module.exports = function(config){
   return Mogger;
}

