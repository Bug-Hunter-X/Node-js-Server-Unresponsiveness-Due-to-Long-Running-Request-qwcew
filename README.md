# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js applications where long-running operations block the event loop, causing the server to become unresponsive. The `bug.js` file shows the problematic code, while `bugSolution.js` presents a solution using asynchronous programming.

## Problem

The `bug.js` file creates a simple HTTP server.  However, it includes a `while` loop that simulates a long-running task (5 seconds).  During this time, the server is unable to handle other requests, resulting in unresponsiveness.

## Solution

The `bugSolution.js` file offers two solutions:

1. **Using `async/await`:** This approach makes asynchronous code look and behave a bit more like synchronous code, making it easier to read and understand.
2. **Using Promises:** This offers another, more traditional way to achieve asynchronous operation.

Both solutions prevent blocking the event loop and ensure the server remains responsive.