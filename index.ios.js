/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import _ from 'lodash'

import NumberPad from './app/components/number_pad/number_pad'
import Led from './app/components/led/led'

export default class lator extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ledValue: [],
      lastEvaluatedValue: ''
    }
  }

  handleButtonPress(label) {
    const newLedValue = this.respondToButton(label)
    this.setState({
      ledValue: newLedValue,
    })
  }

  respondToButton(label) {
    var ledValue = this.state.ledValue
    ledValue = ledValue.join('') === 'Syntax Error' ? [] : ledValue
    if (_.includes(simpleAppendButtons, label)) {
      return ledValue.concat(label)
    } else if (label === 'DEL') {
      return _.dropRight(ledValue)
    } else if (label === 'AC') {
      return []
    } else if (label === 'ANS') {
      return ['not implemented']
    } else if (label === '=') {
      return this.evaluateLedValue().split('')
    } else {
      return ['fell through']
    }
  }

  evaluateLedValue() {
    const ledValue = this.state.ledValue
    const ledValueString = ledValue.join('')
                                   .replace('π', 'Math.PI')
                                   .replace('ANS', this.state.lastEvaluatedValue)
    var result
    try {
      result = String(eval(ledValueString))
    } catch(err) {
      result = 'Syntax Error'
    }
    this.state.lastEvaluatedValue = result
    return result
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>LATOR</Text>
        <Led
          ledValue={this.state.ledValue}
        />
        <NumberPad
          handleButtonPress={this.handleButtonPress.bind(this)}
        />
      </View>
    );
  }
}

const simpleAppendButtons = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  '+', '-', '*', '/', '.', 'π',
  'ANS',
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('lator', () => lator);
