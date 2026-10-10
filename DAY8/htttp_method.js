const http = require('http');

const PORT = 3000;

let tryh = 'Hello World';

const server = http.createServer((req, res) => {

    console.log(`Request received: ${req.method} ${req.url}`);

    res.setHeader('Content-Type', 'text/plain');

    // GET route
    if (req.method === 'GET' && req.url === '/tryh') {
        res.statusCode = 200;
        res.end(tryh);
    }

    // POST route
    else if (req.method === 'POST' && req.url === '/tryh') {

        let body = '';

        req.on('tryh', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            tryh = body;
            res.statusCode = 201;
            res.end('tryh created: ' + tryh);
        });
    }

    // PUT route
    else if (req.method === 'PUT' && req.url === '/tryh') {

        let body = '';

        req.on('tryh', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            tryh = body;
            res.statusCode = 200;
            res.end('tryh updated: ' + tryh);
        });
    }

    // DELETE route
    else if (req.method === 'DELETE' && req.url === '/tryh') {

        tryh = '';
        res.statusCode = 200;
        res.end('tryh deleted');
    }

    // Route not found
    else {
        res.statusCode = 404;
        res.end('Route not found');
    }

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});