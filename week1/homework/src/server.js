'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {
  let state = 10;

  const server = http.createServer((request, response) => {
    const data = {
      state: state,
    };

    if (request.method === 'GET') {
      if (request.url === '/state') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(data));
        // return state;
      } else if (request.url === '/add') {
        data.state++;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(data));
        // return state;
      } else if (request.url === '/subtract') {
        data.state--;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(data));
        // return state;
      } else if (request.url === '/reset') {
        data.state = 10;
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(data));
        // return state;
      } else {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.end(`${response.statusCode} Not Found`);
      }
    }
  });

  return server;
}

module.exports = {
  createServer,
};
