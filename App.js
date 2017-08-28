'use strict'

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

var BoardView = require('./boardView.js')
var WordView = require('./word.js')
var CountdownTimer = require('./countdownTimer.js')

export default class App extends React.Component {

  // componentDidMount() {
  //   Font.loadAsync({
  //     'Questa': require('./assets/fonts/Questa.otf'),
  //   })
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <CountdownTimer/>
        </View>
        <View style={styles.top}>
          <WordView/>
        </View>
        <View style={styles.bottom}>
          <BoardView/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#001f3f',
  },
  top: {
    flex: 2,
  },
  bottom: {
    flex: 4,
  }
})
