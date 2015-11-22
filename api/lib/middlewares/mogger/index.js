var _ = require('lodash');

var loggers = [];

var LogEntry = function(data, tag){
  switch ( typeof data ) {
    case 'string':
      this.tag = (typeof tag === 'undefined') ? "": tag;
      this.timestamp = new Date();
      this.entry = data;
      break;
    case 'object':
      this.tag = (typeof data.tag === 'undefined') ? "": data.tag;
      this.timestamp = new Date(data.timestamp);
      this.entry = data.entry;
      break;
    default:
      this.tag = (typeof tag === 'undefined') ? "": tag;
      this.timestamp = new Date();
      this.entry = "";
      break;
  }
}
LogEntry.prototype.print = function(){
  return "[" + this.timestamp.toISOString() 
   + "|" + this.tag + "] " 
   + this.entry;
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
  var log = new LogEntry(text, this.tag);
  this.logs.push(log);
};
Mogger.prototype.getAll = function(){
  return _.map( this.logs, _.clone );
};
Mogger.prototype.print = function(){
   var out = "";
   out += "tags=[" + this.tag + "]" + "\n" ;
   this.logs.map( function( log ){
      var oLog = new LogEntry( log ); 
      out += oLog.print() + "\n";  
   });
   return out;
};
Mogger.prototype.serialize = function(){
  return JSON.stringify(_.clone(this));
};
Mogger.prototype.deserialize = function(o){
   var obj = JSON.parse(o);
   this.tag = obj.tag;
   this.logs = obj.logs;
    
};

module.exports = function(config){
   return Mogger;
}

