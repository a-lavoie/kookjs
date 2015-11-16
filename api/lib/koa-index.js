var co = require('co');
var koa = require('koa'); 
var ccors = require('koa-cors');
var Router = require('koa-router');
var createService = require('./microservice');
var createActivity = require('./activity');

var app = koa();  
var main = function* () {
   var service = yield createService();
   var activity = yield createActivity();
   var router = new Router();
   router.get('getEcho', '/echo', service.get);
   router.post('postEcho', '/echo', service.post);
   router.put('putEcho', '/echo', service.put);
   router.patch('patchEcho', '/echo', service.patch);
   router.delete('deleteEcho', '/echo', service.delete);

   router.get('/getActivity', '/activity', activity.get);

   app.use(router.routes());
   app.use( function* (){
      this.body = 'Hello';
      console.log("Passed by");
   });
   app.listen(3000);
} 
   
if (!module.parent) {
  co(main).catch(function (err) {
    console.log(err.stack);
    process.exit(1); 
  });
}

