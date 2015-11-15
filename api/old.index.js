var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World!');   
});  
      
app.get('/user', function(req, res){   
  res.status(200).send({ name: 'tobi' });
});
    
app.get('/ping', function(req, res){   
  res.status(200).send({ msg: 'ok' });
});

app.get('/echo', function(req, res){   
  res.status(200).send({ msg: 'ok' });
});
app.post('/echo', function(req, res){   
  res.send(200, { msg: 'ok' });    
});
app.put('/echo', function(req, res){   
  res.send(200, { msg: 'ok' });    
});
app.options('/echo', function(req, res){   
  res.send(200, { msg: 'ok' });    
});
app.head('/echo', function(req, res){   
  res.send(200, { msg: 'ok' });    
});
app.delete('/echo', function(req, res){   
  res.send(200, { msg: 'ok' });    
});

app.trace('/echo', function(req, res){   
  res.send(200, { msg: 'ok' });    
});
    
var server = app.listen(3000, function () {     
  var host = server.address().address;
  var port = server.address().port;   
  console.log('Example app listening at http://%s:%s', host, port);
});

