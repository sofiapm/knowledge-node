
var auth = require('./fixtures/auth.json');
var assert = require('assert');
var knowledge = require('../lib/knowledge');
var Knowledge = new knowledge({ serverKey: auth.serverKey });

module.exports = {
  
  'test types()': function () {
    var allTypes = Knowledge.types;
    assert.equal(allTypes.book, 'Book');
  },

  'test buildParams() with all attributes': function () {
    var query = 'Harry Potter';
    var types = [
      Knowledge.types.book,
      Knowledge.types.bookSeries
    ];
    var limit = 5;
    var indent = true;

    var parameters = Knowledge.buildParams(query, types, limit, indent);
    assert.equal(parameters.query, query);
    assert.equal(parameters.types, types);
    assert.equal(parameters.limit, limit);
    assert.equal(parameters.indent, indent);
  },

  'test buildParams() without not required attributes': function () {
    var query = 'Harry Potter';
    var types = [
      'Book',
      'BookSeries'
    ];

    var parameters = Knowledge.buildParams(query, types);
    assert.equal(parameters.query, query);
    assert.equal(parameters.types, types);
    assert.equal(parameters.limit, 20);
    assert.equal(parameters.indent, true);
  },

  'test search()': function () {
    var query = 'Harry Potter';
    var types = [
      'Book',
      'BookSeries'
    ];

    var params = Knowledge.buildParams(query, types);
    return Knowledge.search(params)
                    .then(body => {
                        assert.ok(body);
                    })
                    .catch(error => {
                        assert.ifError(error);
                    });
  },
};
