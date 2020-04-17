const http = require('http');
var server = http.createServer((function(request, response) 
{
    response.writeHead(200, {'content-Type' : 'text/html'});
        response.end('<h1>My Node Application</h1>');
    }));
    server.listen(1337);
    console.log("server is running on port 1337");