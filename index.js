'use strict'

var chords = require('./chords.json')
var parse = require('tonal.notation/interval.parse')

/**
 * A chord dictionary. Get chord data from a chord name.
 *
 * The chord data object contains:
 * - name: the name of the chord
 * - aliases: an array with the alternative names of the chord
 * - intervals: an array with the intervals
 * - steps: an array with the intervals in __array notation__
 * - binary: a binary representation of the chord set
 * - decimal: the decimal representation of the chord set
 *
 * @name chord.dictionary
 * @function
 * @param {String} name - the chord name
 * @see dictionary/dictionary
 *
 * @example
 * // get chord data
 * var chord = require('chord.dictionary')
 * chord('Maj7') // => { name: 'Maj7', aliases: ['M7', 'maj7']
 *                //      intervals:  [ ...],
 *                //      binary: '100010010001', decimal: 2193 }
 *
 * @example
 * // get it from aliases, binary or decimal numbers
 * chord('Maj7') === chord('M7') === chord('100010010001') === chord(2913)
 */
module.exports = dictionary(chords)

function dictionary (src) {
  function dict (key) { return dict.data[key] }
  dict.source = src
  dict.names = Object.keys(src)
  var data = dict.data = {}

  dict.names.forEach(function (k) {
    var d = src[k]
    var c = { name: k, aliases: d[1] || [] }
    c.intervals = d[0].split(' ')
    c.steps = c.intervals.map(parse)
    c.binary = binary([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], c.steps)
    c.decimal = parseInt(c.binary, 2)
    data[k] = data[c.binary] = data[c.decimal] = c
    c.aliases.forEach(function (a) { data[a] = c })
  })
  return dict
}

function binary (num, intervals) {
  intervals.forEach(function (i) { num[(i[0] * 7 + i[1] * 12) % 12] = '1' })
  return num.join('')
}
