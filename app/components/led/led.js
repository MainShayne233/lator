import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Led extends Component {


  render() {
    return (
      <View
        style={ledStyle}
        >
        <Text
          style={ledValueStyle}
          >
          {this.props.ledValue.join('')}
        </Text>
      </View>
    )
  }

}

const scale = 64
const ledStyle = {
  width: scale * 5,
  height: scale,
  borderWidth: 1,
}

const ledValueStyle = {
  fontSize: 30,
  paddingTop: 15,
}
