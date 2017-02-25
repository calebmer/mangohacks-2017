import React, { Component } from 'react';
import { View, Text } from 'react-native';
import UnitTimePicker from '../common/UnitTimePicker';

export default class EntryInput extends Component {
  state = {};

  render() {
    return (
      <View>
        <UnitTimePicker
          label="Start Time"
          unitTime={0.2133}
          onUnitTimeChange={console.log}
        />
        <UnitTimePicker
          label="End Time"
          unitTime={0.72}
          onUnitTimeChange={console.log}
        />
      </View>
    );
  }
}
