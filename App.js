'use strict'

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

var BoardView = require('./boardView.js')
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
        <View style={styles.container}>
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
    backgroundColor: '#644B62',
  },
  top: {
    flex: 1,
  },
  bottom: {
    flex: 2,
  }
})
