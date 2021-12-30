import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../assets/colors';
import {responsiveHeight} from '../../utils/responsiveDimension';

export default function BaseContainer({
  children,
  backgroundColor = colors.white,
}) {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.body}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginTop: responsiveHeight(40),
  },
});
