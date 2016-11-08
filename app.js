var converter = require('./modules/money');
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200);
    res.write(converter.result + converter.convert());
    res.end();
}).listen(3000);
