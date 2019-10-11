import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Hostelpage extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome to the main hostel page!</Text>
      </View>
    );
  }
}