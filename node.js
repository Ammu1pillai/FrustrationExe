const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process'); // To open the browser

// Create a basic HTTP server
const server = http.createServer((req, res) => {
    // Serve landing.html as the default page
    if (req.url === '/' || req.url === '/landing.html') {
        const filePath = path.join(__dirname, 'landing.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    // Serve window.html
    else if (req.url === '/window.html') {
        const filePath = path.join(__dirname, 'window.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    // Handle the "Try Again" button request
    else if (req.url === '/stop-server' && req.method === 'POST') {
        // Respond to the client
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Server will stop in 2 seconds...' }));

        // Stop the server after 2 seconds
        setTimeout(() => {
            console.log('Stopping server...');
            server.close(() => {
                console.log('Server has been stopped.');
                process.exit(0); // Exit the process
            });
        }, 2000); // 2 seconds delay
    }
    // Handle other routes
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Start the server on port 8000
const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    // Open the browser automatically
    const url = `http://localhost:${PORT}`;
    switch (process.platform) {
        case 'darwin': // macOS
            exec(`open ${url}`);
            break;
        case 'win32': // Windows
            exec(`start ${url}`);
            break;
        case 'linux': // Linux
            exec(`xdg-open ${url}`);
            break;
        default:
            console.log(`Please open your browser and navigate to ${url}`);
    }
});