const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// HTML 파일 경로를 반환하는 함수
const getFilePath = (url) => {
    if (url === '/') return path.join(__dirname, 'index.html');
    if (url === '/login') return path.join(__dirname, 'login.html');
    if (url === '/company-info') return path.join(__dirname, 'company-info.html');
    if (url === '/company-location') return path.join(__dirname, 'company-location.html');
    return null;
};

const server = http.createServer(async (request, response) => {
    const filePath = getFilePath(request.url);
    if (filePath) {
        try {
            const data = await fs.readFile(filePath);
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        } catch (err) {
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('Internal Server Error');
        }
    } else if (request.url.startsWith('/images/')) {
        const imgPath = path.join(__dirname, request.url);
        try {
            const data = await fs.readFile(imgPath);
            response.writeHead(200, { 'Content-Type': 'image/jpeg' });
            response.end(data);
        } catch (err) {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('Not Found');
        }
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
