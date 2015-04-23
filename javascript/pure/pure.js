'use strict';

var http = require('http');
var statusHelper = require('../helpers/statusHelper');

/**
 * Create an HTTP server that always yield 200 HTTP status code
 * @param  {number} port
 * @param  {function} [f]    callback
 */
function createServer(port, f) {
  f = f || noop;
  http.createServer(handler).listen(port, f);
  return statusHelper.changeStatus;
}

/**
 * Request handler
 * @param  {Request} req
 * @param  {Response} res
 */
function handler(req, res) {

  // catch-all handler
  res.writeHead(statusHelper.statusCode(), {
    'Content-Type': 'application/json'
  });
  res.end();
}

function noop() {}

module.exports = createServer;

// for tests
exports.handler = handler;
