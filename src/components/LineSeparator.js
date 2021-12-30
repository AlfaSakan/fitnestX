import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../assets/colors';

export default function LineSeparator({
  marginLeft = 0,
  marginRight = 0,
  color = colors.black,
}) {
  return (
    <View
      style={[styles.line, {marginLeft, marginRight, borderColor: color}]}
    />
  );
}

const styles = StyleSheet.create({
  line: {
    flex: 1,
    borderBottomWidth: 1,
  },
});
