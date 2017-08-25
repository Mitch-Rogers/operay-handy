'use strict'

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

var BoardView = require('./boardView.js')

export default class App extends React.Component {

  // componentDidMount() {
  //   Font.loadAsync({
  //     'Questa': require('./assets/fonts/Questa.otf'),
  //   })
  // }

  render() {
    return (
      <View style={styles.container}>
               <BoardView/>
             </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#644B62',
  },
})
