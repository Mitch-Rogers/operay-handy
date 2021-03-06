'use strict'

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from 'react-native'
import { font } from 'expo'

var WordView = require('./word.js')

var {width, height} = require('Dimensions').get('window')

var SIZE = 4 // four-by-four grid
var CELL_SIZE = Math.floor(width * .2) // 20% of the screen width
var CELL_PADDING = Math.floor(CELL_SIZE * .05) // 5% of the cell size
var BORDER_RADIUS = CELL_PADDING * 2
var TILE_SIZE = CELL_SIZE - CELL_PADDING * 2
var LETTER_SIZE = Math.floor(TILE_SIZE * .75)

var BoardView = React.createClass({

  getInitialState() { // New method
    var tilt = new Array(SIZE * SIZE)
    for (var i = 0; i < tilt.length; i++) {
      tilt[i] = new Animated.Value(0)
    }
    return {tilt} // ES6 shorthand for {opacities: opacities}
  },

  renderTiles() {
    var result = []
    var randomLetters = [global.randomWord]
    var max = 26
    for (var i = randomLetters.length; i < 16; i ++) {
      randomLetters += String.fromCharCode(65 + Math.floor(Math.random() * max))
      max = max - 1
    }
    for (var row = 0; row < SIZE; row++) {
      for (var col = 0; col < SIZE; col++) {
        var id = row * SIZE + col
        var letter = randomLetters[id]
        var tilt = this.state.tilt[id].interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '-60deg']
        })
        var style = {
          left: col * CELL_SIZE + CELL_PADDING,
          top: row * CELL_SIZE + CELL_PADDING,
          transform: [{perspective: CELL_SIZE * 8},
                      {rotateX: tilt}]
        }
        result.push(this.renderTile(id, style, letter))
      }
    }
    return result
  },

  renderTile(id, style, letter) {
    //      v- New
    return <Animated.View key={id} style={[styles.tile, style]}
               onStartShouldSetResponder={() => this.clickTile(id)}>
             <Text style={styles.letter}>{letter}</Text>
           </Animated.View>
  },

  clickTile(id) {
    var tilt = this.state.tilt[id]
    tilt.setValue(1)
    Animated.timing(tilt, {
      toValue: 0, // fully opaque
      duration: 250, // milliseconds
      easing: Easing.guad
    }).start()
  },

  render() {
    return <View style={styles.container}>
             {this.renderTiles()}
           </View>
  },
})

var styles = StyleSheet.create({
  container: {
    width: CELL_SIZE * SIZE,
    height: CELL_SIZE * SIZE,
    backgroundColor: 'transparent',
  },
  tile: {
    position: 'absolute',
    width: TILE_SIZE,
    height: TILE_SIZE,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2',
  },
  letter: {
    color: '#001f3f',
    fontSize: LETTER_SIZE,
    backgroundColor: 'transparent',
  },
})

module.exports = BoardView
