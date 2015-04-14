'use strict';

/**
 * HAPI Plugin
 * @param  {object}         server  a reference to the server the plugin is being loaded in
 * @param  {object,null}    options whatever options the user passes to the plugin
 * @param  {Function} next    [description]
 */
exports.register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/_health',
    handler: function (request, reply) {
      reply().code(200);
    }
  });
};

exports.register.attributes = {
  pkg: require('../../package.json')
};