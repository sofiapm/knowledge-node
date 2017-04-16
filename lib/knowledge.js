'use strict'

var Promise = require('bluebird');
var validation = require('./validations.js');
var helpers = require('./helpers.js');
var request = require('request');

var Knowledge = function(options) {

    this.server_key = options.serverKey;
    this.types = helpers.getTypes();
}
    

Knowledge.prototype.buildParams = function (query, types, limit, indent) {
    validation.validateQuery(query);
    validation.validateTypesArray(types);

    return {
        query,
        limit: limit || 20,
        indent: indent || true,
        key: this.server_key,
        types
    };
};

Knowledge.prototype.search = function (parameters) {
    var url = helpers.buildUrl(parameters);

    return new Promise((resolve, reject) => {
        return request.get({url, json: true }, (err,httpResponse,body) => {
            if (err || httpResponse.statusCode !== 200) {
                reject(err || body);
            } else{
                resolve(body);
            }
        });
    });
}


module.exports = function (options) {
    return new  Knowledge(options);
};