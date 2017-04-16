var config = require('../config/default.json');
var qs = require('qs');

var Helpers = function () {}

Helpers.prototype.stringify = function (attributes) {
    return qs.stringify(attributes, { indices: false });
}

Helpers.prototype.buildUrl = function (params) {
    return config.url.concat(this.stringify(params));
}

Helpers.prototype.getTypes = function () {
    return config.types;
}

module.exports = new Helpers();
