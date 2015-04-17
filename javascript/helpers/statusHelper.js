'use strict';
var statusCode = 500;
module.exports = {
  statusCode: function () {
    return statusCode;
  },
  changeStatus: function (newStatus) {
    statusCode = newStatus ? 200 : 400;
  }
};
