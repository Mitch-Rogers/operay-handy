'use strict'

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Switch, AppRegistry, ScrollView } from 'react-native'

const timerOptions = [250]

var TimerWrapper = React.createClass({

  getInitialState () {
    return {time: 250, int: null, isMinutes: false}
  },

  toggleTime(){
    let time = this.state.time
    if (time == 0 ) time = null
    this.setState({isMinutes: !this.state.isMinutes, time: time})
  },

  startTimer(time) {
    clearInterval(this.state.int)
    var _this= this
    var int = setInterval(function() {
      var tl = _this.state.time - 1
      if (tl == 0) clearInterval(int)
      _this.setState({time: tl})
    }, 1000)
    return this.setState({time: time, int: int})
  },

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Timer style={styles.container} time={this.state.time}/>
        </View>
      </View>
    )
  }
})

// var Button = React.createClass({
//   startTimer(event) {
//     let time = (this.props.isMinutes) ? this.props.time*60 : this.props.time
//     return this.props.startTimer(time)
//   },
//
//   render() {
//     return (
//       <TouchableOpacity onPress={this.startTimer}>
//         <Text style={styles.button}>{this.props.time} {(this.props.isMinutes) ? 'minutes' : 'seconds'}</Text>
//       </TouchableOpacity>
//     )
//   }
// })

var Timer = React.createClass({
  render() {
    if (this.props.time == null || this.props.time == 0) return <View><Text  style={styles.heading}> </Text></View>
    return (
      <View>
        <Text style={styles.heading}>{this.props.time}</Text>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  heading: {
    color: '#BEE1D2',
    flex: 1,
    fontSize: 70,
    paddingTop: 40,
    margin: 10
  },
  instructions: {
    color: '#333333',
    marginBottom: 15,
  },
  // button: {
  //   color: '#111',
  //   marginBottom: 15,
  //   borderWidth: 1,
  //   borderColor: 'blue',
  //   padding: 10,
  //  	borderRadius: 20,
  //   fontWeight: '600'
  // },
  // buttons: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'flex-start'
  // }
})

AppRegistry.registerComponent('timer', () => TimerWrapper)

module.exports = TimerWrapper
