var http = require('http');
var memdb = require('./memdb');
var port     = process.env.PORT || 8080;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    memdb.clear();
    var tobi = { name: 'Tobi' };
    memdb.save(tobi);
    var ret = memdb.first({ name: 'Tobi' });
    var welcome = 'Hello Travis!!!!!!\n' + ret.name;
    res.end(welcome); 
}).listen(port);
console.log('Server running at http://localhost:' + port);