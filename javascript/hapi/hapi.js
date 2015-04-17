'use strict';

var statusHelper = require('../helpers/statusHelper');

/**
 * HAPI Plugin
 * @param  {object}         server  a reference to the server the plugin is being loaded in
 * @param  {object,null}    options whatever options the user passes to the plugin
 * @param  {Function} next    [description]
 */
exports.register = function (server, f) {
  server.register({
    register: plugin
  }, f);
  return statusHelper.changeStatus;
};

function plugin(server, options, next) {
  server.route({
    method: 'GET',
    path: '/_health',
    handler: function (request, reply) {
      reply().code(statusHelper.statusCode());
    }
  });
};

plugin.attributes = {
  pkg: require('../../package.json')
};
