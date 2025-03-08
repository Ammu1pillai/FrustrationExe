import http.server
import socketserver
import threading
import os

# Define the port
PORT = 8000

# Create a custom handler to serve files
class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Serve landing.html as the default page
        if self.path == '/' or self.path == '/landing.html':
            self.path = '/landing.html'  # Redirect root to landing.html
        elif self.path == '/stop-server':
            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b'Server will stop in 2 seconds...')
            threading.Thread(target=self.stop_server).start()
            return
        # Serve other files (e.g., window.html, images, etc.)
        super().do_GET()

    def stop_server(self):
        print("Stopping server...")
        os._exit(0)  # Forcefully stop the server

# Start the server
def start_server():
    with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
        print(f"Serving at http://localhost:{PORT}")
        httpd.serve_forever()

# Run the server in a separate thread
server_thread = threading.Thread(target=start_server)
server_thread.start()

# Wait for a signal to stop the server
try:
    while True:
        pass
except KeyboardInterrupt:
    os._exit(0)