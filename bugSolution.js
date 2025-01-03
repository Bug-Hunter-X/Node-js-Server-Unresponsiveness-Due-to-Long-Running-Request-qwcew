// Solution using async/await
const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate long-running operation
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Solution using Promises
// const http = require('http');

// const server = http.createServer((req, res) => {
//   new Promise((resolve) => setTimeout(resolve, 5000))
//     .then(() => {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end('Hello World!');
//     })
//     .catch((error) => {
//       console.error('Error handling request:', error);
//       res.writeHead(500, { 'Content-Type': 'text/plain' });
//       res.end('Internal Server Error');
//     });
// });

// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });