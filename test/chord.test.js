var vows = require('vows')
var assert = require('assert')
var chords = require('..')

vows.describe('chord.dictionary').addBatch({
  'names': function () {
    assert.equal(chords.names.length, 108)
  },
  'chords data': {
    'chord data object': function () {
      assert.deepEqual(chords.data['Maj7'], {
        name: 'Maj7', aliases: [ 'maj7', 'M7' ],
        intervals: ['1', '3', '5', '7'],
        steps: [[ 0, 0 ], [ 4, -2 ], [ 1, 0 ], [ 5, -2 ]],
        binary: '100010010001', decimal: 2193
      })
    },
    'aliases': function () {
      assert.deepEqual(chords.data['M7'], chords.data['Maj7'])
    },
    'binary and decimal': function () {
      assert.deepEqual(chords.data['100010010001'], chords.data['Maj7'])
      assert.deepEqual(chords.data[2193], chords.data['Maj7'])
      assert.deepEqual(chords.data['2193'], chords.data['Maj7'])
    }
  }
}).export(module)
