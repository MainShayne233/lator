import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Button extends Component {

  handleButtonPress() {
    this.props.handleButtonPress(this.props.label)
  }

  render() {
    return (
      <View
        style={buttonContainerStyle}
        >
        <TouchableOpacity
          style={buttonStyle}
          onPress={this.handleButtonPress.bind(this)}
          >
          <Text
            style={buttonLabelStyle}
            >
            {this.props.label}
          </Text>
        </TouchableOpacity>
      </View>

    )
  }

}

const scale = 75
const buttonContainerStyle = {
  width: scale,
  height: scale,
  borderWidth: 1,
}

const buttonStyle = {
  width: scale - 5,
  height: scale - 5,
}

const buttonLabelStyle = {
  fontSize: 30,
  textAlign: 'center',
  paddingTop: 15,
}
