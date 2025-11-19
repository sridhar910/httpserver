// server.js
// Node.js HTTP server that returns "Hello REST API"

const http = require('http'); // Import HTTP module

const hostname = '127.0.0.1'; // Localhost
const port = 3000;            // Port number

// Create HTTP server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status code
    res.setHeader('Content-Type', 'text/plain'); // Set response type
    res.end('Hello REST API'); // Response body
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});