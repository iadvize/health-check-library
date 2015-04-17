'use strict';

module.exports = {
  statusCode: 500,
  changeStatus: function(newStatus) {
    this.statusCode = newStatus ? 200 : 400;
  }
};
