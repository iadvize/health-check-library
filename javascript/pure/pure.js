'use strict';

var http = require('http');
var url = require('url');


/**
 * Create an HTTP server that always yield 200 HTTP status code
 * @param  {number} port
 * @param  {function} [f]    callback
 */
function createServer(port, f) {
  f = f || noop;
  http.createServer(handler).listen(port, f);
}

/**
 * Request handler
 * @param  {Request} req
 * @param  {Response} res
 */
function handler(req, res) {
  // catch-all handler
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end();
}


function noop() {}

module.exports = createServer;
exports.handler = handler; // for tests
