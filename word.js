'use strict'

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from 'react-native'
import { font } from 'expo'

var {width, height} = require('Dimensions').get('window')

var SIZE = 4 // four-by-four grid
var CELL_SIZE = Math.floor(width * .2) // 20% of the screen width
var CELL_PADDING = Math.floor(CELL_SIZE * .05) // 5% of the cell size
var BORDER_RADIUS = CELL_PADDING * 2
var TILE_SIZE = CELL_SIZE - CELL_PADDING * 2
var LETTER_SIZE = Math.floor(TILE_SIZE * .75)

var WordView = React.createClass({

  renderTiles() {
    var result = []
      for (var col = 0; col < SIZE; col++) {
        var id = col
        var letter = String.fromCharCode(65 + id)
        var style = {
          left: col * CELL_SIZE + CELL_PADDING,
        }
        result.push(this.renderTile(id, style, letter))
    }
    return result
  },

  renderTile(id, style, letter) {
    //      v- New
    return <Animated.View key={id} style={[styles.tile, style]}>
             <Text style={styles.letter}>{letter}</Text>
           </Animated.View>
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
    opacity: .3,
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

module.exports = WordView
