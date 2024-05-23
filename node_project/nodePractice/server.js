const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/' && request.method === 'GET') {
    response.statusCode = 200;
    response.write('Hello Node'); 
    response.end(); 
  } else {
    response.statusCode = 404; 
    response.write('Not Found'); 
    response.end();
  }
});

server.listen(3000, () => {
  console.log('http://localhost:3000');
});
