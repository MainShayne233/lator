import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from './button'

export default class NumberPad extends Component {

  renderRows() {
    const rows = this.numberPadRows()
    return rows.map((row, index) => {
      return (
        <View
          style={{flexDirection: 'row'}}
          key={index}
          >
          {this.renderRow(row)}
        </View>
      )
    })
  }

  renderRow(row) {
    return row.map((button, index) => {
      return (
        <Button
          key={index}
          label={button}
          handleButtonPress={this.props.handleButtonPress}
        />
      )
    })
  }

  render() {
    return (
      <View>
        {this.renderRows()}
      </View>
    )
  }

  numberPadRows() {
    return [
      [7,   8,    9, 'DEL', 'AC',],
      [4,   5,    6,   '*',  '/',],
      [1,   2,    3,   '+',  '-',],
      [0, '.',  'π', 'ANS',  '=',],
    ]
  }
}
