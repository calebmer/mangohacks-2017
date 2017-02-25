import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';
import EntryView from './entry/EntryView';

export default class App extends Component {
  render() {
    return <View style={styles.container}><EntryView /></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
});
