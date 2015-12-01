var vows = require('vows')
var assert = require('assert')
var dictionary = require('..')

vows.describe('chord.dictionary').addBatch({
  'data': function () {
    assert.equal(dictionary.names.length, 108)
  },
  'dictionary function': {
    'get chords': function () {
      assert.deepEqual(dictionary('Maj7'), {
        name: 'Maj7', aliases: [ 'maj7', 'M7' ],
        intervals: ['1', '3', '5', '7'],
        steps: [[ 0, 0 ], [ 4, -2 ], [ 1, 0 ], [ 5, -2 ]],
        binary: '100010010001', decimal: 2193
      })
    },
    'aliases': function () {
      assert.deepEqual(dictionary('M7'), dictionary('Maj7'))
    },
    'binary and decimal': function () {
      assert.deepEqual(dictionary('100010010001'), dictionary('Maj7'))
      assert.deepEqual(dictionary(2193), dictionary('Maj7'))
      assert.deepEqual(dictionary('2193'), dictionary('Maj7'))
    }
  }
}).export(module)
