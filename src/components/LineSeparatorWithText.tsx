import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../assets/colors';
import { fontSize } from '../assets/Typography';
import { responsiveWidth } from '../utils/responsiveDimension';
import LineSeparator from './LineSeparator';
import TypographyRegular from './Typography/TypographyRegular';

export default function LineSeparatorWithText({ text = 'Or' }) {
  return (
    <View style={styles.containerSeparator}>
      <LineSeparator color={colors.gray3} marginRight={responsiveWidth(10)} />
      <TypographyRegular text={text} fontSize={fontSize.smallText} />
      <LineSeparator color={colors.gray3} marginLeft={responsiveWidth(10)} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
