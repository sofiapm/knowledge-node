'use strict'

const config = require('../config/default.json');
const qs = require('qs');

class Helpers {

    stringify (attributes) {
        return qs.stringify(attributes, { indices: false });
    }

    buildUrl (params) {
        return config.url.concat(this.stringify(params))
    }
}

module.exports = new Helpers();