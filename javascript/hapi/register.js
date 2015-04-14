'use strict';

var assert = require('assert');
var plugin = require('./');

module.exports = {
  register: function (server) {
    assert.equal(typeof server, 'object', 'an hapi server must be specified to require(\'health-check-library\').register(server);');

    server.register({
      register: plugin
    }, function (err) {
      if (err) {
        throw err; // fail fast, no need to go further
      }
    });
  }
};
