var request = require('supertest'); 
var express = require('express'); 
var assert = require('assert');
var request = require('request');
var http = require('http');
 
var sessionToken = "";
var httpRequest = {  
    protocol: "http://",
    url: "http://" + "192.168.2.33" + "/path",
    hostname: "192.168.2.33",
    path: "/ping", 
    port: 3000,   
    method: "GET",     
    headers: {  
       'Content-Type': 'application/json',
       'Authorization': '...'     
    }     
}; 

var getPort = function(){
   if (httpRequest.port != undefined){
      var separator = ":";
      return separator + httpRequest.port;
   }
   return "";
};

var getUrl = function(){
   var url = httpRequest.protocol 
      + httpRequest.hostname 
      + getPort() 
      + httpRequest.path;
   return url;
};
  
console.log("Running on server " + httpRequest.hostname); 
 

describe('GET /echo', function(){  
    it('respond ok', function(done){
        this.timeout(10000);
	httpRequest.path = "/echo";
	httpRequest.method = "GET";
        var req = request.get(getUrl(), 
	    function(error, res, body){
		if (error){
		    console.log(error);   
		} else { 
                    assert.equal(200, res.statusCode);
		    var o = JSON.parse(body);
		}
                done();
	 });
    });
});

describe('POST /echo', function(){  
    it('respond ok', function(done){
        this.timeout(10000);
	httpRequest.path = "/echo";
	httpRequest.method = "POST";
        var req = request.post(getUrl(), 
	    function(error, res, body){
		if (error){
		    console.log(error);   
		} else { 
                    assert.equal(200, res.statusCode);
		    var o = JSON.parse(body);
		}
                done();
	 });
    });
});

describe('PUT /echo', function(){  
    it('respond ok', function(done){
        this.timeout(10000);
	httpRequest.path = "/echo";
	httpRequest.method = "PUT";
        var req = request.put(getUrl(), 
	    function(error, res, body){
		if (error){
		    console.log(error);   
		} else { 
                    assert.equal(200, res.statusCode);
		    var o = JSON.parse(body);
		}
                done();
	 });
    });
});


describe('PATCH /echo', function(){  
    it('respond ok', function(done){
        this.timeout(10000);
	httpRequest.path = "/echo";
	httpRequest.method = "PATCH";
        var req = request.patch(getUrl(), 
	    function(error, res, body){
		if (error){
		    console.log(error);   
		} else { 
                    assert.equal(200, res.statusCode);
		    var o = JSON.parse(body);
		}
                done();
	 });
    });
});

describe('DELETE /echo', function(){  
    it('respond ok', function(done){
        this.timeout(10000);
	httpRequest.path = "/echo";
	httpRequest.method = "DELETE";
        var req = request.del(getUrl(), 
	    function(error, res, body){
		if (error){
		    console.log(error);   
		} else { 
                    assert.equal(200, res.statusCode);
		    var o = JSON.parse(body);
		}
                done();
	 });
    });
});


describe('GET /activity', function(){  
    it('respond ok', function(done){
        this.timeout(10000);
	httpRequest.path = "/activity?trace=on&ttag=act1,go";
	httpRequest.method = "GET";
        var req = request.get(getUrl(), 
	    function(error, res, body){
		if (error){ 
		    console.log(error);    
		} else { 
                    assert.equal(200, res.statusCode);
		    var o = JSON.parse(body);
		}
                done();
	 }); 
    });
});







  


