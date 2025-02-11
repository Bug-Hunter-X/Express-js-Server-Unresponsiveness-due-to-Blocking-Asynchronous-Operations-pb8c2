# Express.js Server Unresponsiveness
This repository demonstrates a common issue in Express.js applications:  unresponsiveness caused by long-running asynchronous operations that block the event loop.  The `bug.js` file shows a server that can become unresponsive if the `someDatabaseCall()` function takes a significant amount of time to resolve.

The `bugSolution.js` file offers a solution using asynchronous request handling to prevent the server from becoming unresponsive.

## How to Reproduce
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `node bug.js` to start the server.
5. Send multiple requests to the server simultaneously. Observe how the server can become unresponsive when `someDatabaseCall` is slow (simulated here). Then run `node bugSolution.js` and repeat the test. 

## Solution
The solution involves using techniques such as promises, async/await, or a task queue to handle long-running asynchronous operations without blocking the event loop. This allows the server to handle multiple requests concurrently without becoming unresponsive. Note that the fix simulates a faster database call.