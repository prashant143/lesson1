var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200); 
	response.end('Our first page ');
 

}).listen(3000);

console.log('server running on port 3000');