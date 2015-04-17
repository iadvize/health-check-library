'use strict';

require('../boostrap.test');
var plugin = require('./register');

describe('health-check-library', function () {
  var server;

  beforeEach(function () {
    var Hapi = require('hapi');
    server = new Hapi.Server();
    server.connection({
      port: 8080
    });
  });

  describe('.register', function () {
    it('should return a function', function () {
      t.isFunction(plugin.register(server));
    });

    it('should register the health plugin', function (done) {
      plugin.register(server);
      server.inject({
        method: 'get',
        url: '/_health'
      }, function (res) {
        t.strictEqual(500, res.statusCode);
        done();
      });
    });

    it('should yield 200 is healty was set to true', function (done) {
      var healthy = plugin.register(server);
      server.inject({
        method: 'get',
        url: '/_health'
      }, function (res) {
        t.strictEqual(500, res.statusCode);
        healthy(true);

        server.inject({
          method: 'get',
          url: '/_health'
        }, function (res) {
          t.strictEqual(200, res.statusCode);
          done();
        });
      });
    });

    it('should not yield 200 on non-registered route', function (done) {
      plugin.register(server);
      server.inject({
        method: 'get',
        url: '/_health2'
      }, function (res) {
        t.strictEqual(404, res.statusCode);
        done();
      });
    });
  });

});
