const http = require('http');
const fs = require('fs');
const path = require('path');

// HTML 파일 경로
const getFilePath = (url) => {
    if (url === '/') return path.join(__dirname, 'index.html');
    if (url === '/contact') return path.join(__dirname, 'contact.html');
    if (url === '/home') return path.join(__dirname, 'home.html');
    return null;
};

const server = http.createServer((request, response) => {
    const filePath = getFilePath(request.url);
    if (filePath) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.setHeader('Content-Type', 'text/plain');
                response.end('Internal Server Error');
            } else {
                response.statusCode = 200;
                response.setHeader('Content-Type', 'text/html');
                response.end(data);
            }
        });
    } else if (request.url.startsWith('/images/')) {
        const imgPath = path.join(__dirname, request.url);
        fs.readFile(imgPath, (err, data) => {
            if (err) {
                response.statusCode = 404;
                response.setHeader('Content-Type', 'text/plain');
                response.end('Not Found');
            } else {
                response.statusCode = 200;
                response.setHeader('Content-Type', 'image/jpeg');
                response.end(data);
            }
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
