import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../assets/colors';

export default function ContentContainer({
  children,
  backgroundColor = colors.blue,
  padding = 20,
}) {
  return (
    <View style={[styles.body1Container, {backgroundColor, padding}]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  body1Container: {
    borderRadius: 22,
  },
});
