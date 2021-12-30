import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../assets/colors';

export default function FlexRowContainer({
  children,
  backgroundColor,
  alignItems = 'center',
}) {
  return (
    <View style={[styles.body1Container, {backgroundColor, alignItems}]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  body1Container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
