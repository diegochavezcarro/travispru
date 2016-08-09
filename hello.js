var http = require('http');
var index = require('.index');
console.log("puerto en uso");
console.log("puerto: " + process.env.PORT);
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var memdb = index.clear();
    var tobi = { name: 'Tobi' };
    memdb.save(tobi);
    var ret = memdb.first({ name: 'Tobi' });
    var welcome = 'Hello Travis!\n' + ret;
    res.end(welcome); // this will FAIL travis CI lint
}).listen(process.env.PORT);
console.log('Server running at http://127.0.0.1:' + process.env.PORT);