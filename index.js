const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf-8', (err, content) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    return res.end('<h1>Server Error</h1>');
                }
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(content);
            });
        } else if (req.url === '/about') {
            fs.readFile(path.join(__dirname, 'views', 'about.html'), 'utf-8', (err, content) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    return res.end('<h1>Server Error</h1>');
                }
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(content);
            });
        } else if (req.url === '/dogs') {
            fs.readFile(path.join(__dirname, 'views', 'dogs.html'), 'utf-8', (err, content) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    return res.end('<h1>Server Error</h1>');
                }
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(content);
            });
        } else if (req.url === '/api/users') {
            const users = [
                { name: 'Vasya', age: 20 },
                { name: 'Elena', age: 23 }
            ];
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(users));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('<h1>Page Not Found</h1>');
        }
    } else if (req.method === 'POST') {
        let body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            body = Buffer.concat(body).toString();
            const message = decodeURIComponent(body.split('=')[1]);

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
                <h1>Ваше сообщение: ${message}</h1>
            `);
        });

        req.on('error', (err) => {
            console.error('Request error:', err);
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('<h1>Server Error</h1>');
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Method Not Allowed</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000...');
});
