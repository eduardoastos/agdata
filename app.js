var static = require('node-static');

var file = new static.Server('C:/CODE/AGDATA');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8080);

console.log('Navigate to http://localhost:8080/.');