'use strict';

var http = require('http');
var port = 3000;
var server = http.createServer(function(req,res) {
  var path = req.url.split('/');
  if (path[1] ==='greet') {
    if (req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('Hello ' + path[2]);
    return res.end();
    }
    else if (req.method === 'POST') {
      req.on('data', function(data) {
        var parsed = JSON.parse(data);
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        res.write(JSON.stringify({greet: 'Hello ' + parsed.Name }));
        return res.end();
      });
    }
  }
  else if (path[1] ==='time') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    var time = new Date();
    res.write(time.toString());
    return res.end();
  }
  else {
    res.writeHead(404, {
    'Content-Type': 'text/plain'
  });
  res.write('page not found');
  res.end();
  }
});

  server.listen(port, function() {
  console.log("server Listening on port " + port);
});





