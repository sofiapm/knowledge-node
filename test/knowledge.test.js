'use strict'

const auth = require('./fixtures/auth.json');
const assert = require('assert');
const knowledge = require('../lib/knowledge');
const Knowledge = new knowledge({ serverKey: auth.serverKey });

module.exports = {
  
  'test types()': function () {
    const allTypes = Knowledge.types();
    assert.equal(allTypes.book, 'Book');
  },

  'test buildParams() with all attributes': function () {
    const query = 'Harry Potter';
    const types = [
      'Book',
      'BookSeries'
    ];
    const limit = 5;
    const indent = true;

    const parameters = Knowledge.buildParams(query, types, limit, indent);
    assert.equal(parameters.query, query);
    assert.equal(parameters.types, types);
    assert.equal(parameters.limit, limit);
    assert.equal(parameters.indent, indent);
  },

  'test buildParams() without not required attributes': function () {
    const query = 'Harry Potter';
    const types = [
      'Book',
      'BookSeries'
    ];

    const parameters = Knowledge.buildParams(query, types);
    assert.equal(parameters.query, query);
    assert.equal(parameters.types, types);
    assert.equal(parameters.limit, 20);
    assert.equal(parameters.indent, true);
  },

  'test request()': function () {
    const query = 'Harry Potter';
    const types = [
      'Book',
      'BookSeries'
    ];

    const params = Knowledge.buildParams(query, types);
    return Knowledge.request(params)
                    .then(body => {
                        assert.ok(body);
                    })
                    .catch(error => {
                        assert.ifError(error);
                    });
  },
};