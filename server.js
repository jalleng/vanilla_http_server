'use strict';

var http = require('http');
//var url = require('url');
//var net = require('net');

var server = http.createServer(function(req,res) {


  if (req.url ==='/time') {
    var time = Date.now();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(time.toString());
    return res.end();
  }

  if (req.url === '/greet' && req.method === 'POST') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    req.on('data', function(data) {
      var parsed = JSON.parse(data);
      console.log(parsed);
    res.write(parsed.Name);
    return res.end();
    });
  }




  var path = req.url.toString();   //this code block is blocking the other block
  var name = path.substring(7);
  var reg = /(\/greet\/)[a-zA-Z0-9]*/;
  if (req.url.match(path)) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello ' + name);
    return res.end();
  }








  // if (req.url ==='/greet') {
  //   res.writeHead(200, {'Content-Type': 'text/plain'});
  //   res.write('Hello World');
  //   return res.end();
  // }

  // res.writeHead(404, {
  //   'Content-Type': 'text/plain'
  // });

  // res.write('page not found');
  // res.end();

});

server.listen(3000, function() {
  console.log("server Listening on port 3000");
});
