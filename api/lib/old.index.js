//var co = require('co');
var koa = require('koa');
//var cors = require('koa-cors');
//var Router = require('koa-router');

var app = koa();
app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);
//var createPackage = require('./package');

//var main = function* () {
   //var packg = yield createPackage(config);
//   var router = new Router();
   
//   app.use(cors({
//     headers: ["Authorization", "Content-Type"],
//     expose: ["X-Page", "X-Per-Page", "X-Total-Count"]
//   }));
   
   //router.get('/package', packg.get);
   
//   app.use(router.routes());
//   app.listen(3333); 
   
//   console.log("Started");
   
//}
   
//if (!module.parent) {
//  co(main).catch(function (err) {
//    console.log(err.stack);
//    process.exit(1);
//  });
//}
