var http = require('http');
console.log("puerto en uso");
console.log("puerto: " + process.env.PORT);
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Travis\n'); // this will FAIL travis CI lint
}).listen(process.env.PORT);
console.log('Server running at http://127.0.0.1:' + process.env.PORT);