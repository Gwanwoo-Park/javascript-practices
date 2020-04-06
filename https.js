var http = require('http');
var hostname = '0.0.0.0';
var port = '9999';

var server = http.createServer(function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'} );
        res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, function() {
        console.log('server start');
});