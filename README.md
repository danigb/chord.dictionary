  # chord.dictionary

[![Build Status](https://travis-ci.org/danigb/chord.dictionary.svg?branch=master)](https://travis-ci.org/danigb/chord.dictionary)
[![Climate](https://codeclimate.com/github/danigb/chord.dictionary/badges/gpa.svg)](https://codeclimate.com/github/danigb/chord.dictionary)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/chord.dictionary.svg)](https://www.npmjs.com/package/chord.dictionary)
[![license](https://img.shields.io/npm/l/chord.dictionary.svg)](https://www.npmjs.com/package/chord.dictionary)
[![tonal](https://img.shields.io/badge/tonal-chord.dictionary-yellow.svg)](https://www.npmjs.com/browse/keyword/tonal)

A dictionary of music chords. A [json file]() with chord definitions (currently 106) and a wrapper function:

```js
var chord = require('chord.dictionary')
chord('Maj7') // => { name: 'Maj7', aliases: ['M7', 'maj7']
               //      intervals:  [ '1', '3', '5', '7' ],
               //      steps: [ ... ]
               //      binary: '100010010001', decimal: 2193 }
```

This is part of [tonal](https://github.com/danigb/tonal)

## Installation

Install via npm: `npm install --save chord.dictionary`. For browsers use the browserify or similar tool or get [tonal.chord](https://github.com/danigb/tonal.chord)

## Usage

You can get or require [json data file]() directly:

```js
var data = require('chord.dictionary/chords.json')
```

Or use the function:

```js
var chord = require('chord.dictionary')
chord('Maj7') // => { name: 'Maj7', ... }
```

The function returns a data object with the following properties:

- name: the name of the chord
- aliases: an array with the alternative names of the chord
- intervals: an array with the intervals
- steps: an array with the intervals in __array notation__
- binary: a binary representation of the chord set
- decimal: the decimal representation of the chord set

You can get an array of available names:

```js
var chord = require('chord.dictionary')
chord.names // => ['Maj7', 'm7', ...]
chord.names.length // => 107
```

## License

MIT License
