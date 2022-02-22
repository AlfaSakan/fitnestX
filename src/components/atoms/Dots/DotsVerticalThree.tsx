import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../assets/colors';
import { responsiveWidth } from '../../../utils/functions/responsiveDimension';

interface DotVerticalThreeType {
  marginRight?: number;
  marginBottom?: number;
  color?: string;
  backgroundColor?: string;
  radius?: number
}

const DotVerticalThree: React.FC<DotVerticalThreeType> = ({
  marginRight,
  marginBottom = 2,
  color = colors.black,
  backgroundColor = colors.white,
  radius = 4,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View
        style={{
          width: radius,
          height: radius,
          backgroundColor: color,
          borderRadius: radius / 2,
          marginBottom,
        }}
      />
      <View
        style={{
          width: radius,
          height: radius,
          backgroundColor: color,
          borderRadius: radius / 2,
          marginBottom,
        }}
      />
      <View
        style={{
          width: radius,
          height: radius,
          backgroundColor: color,
          borderRadius: radius / 2,
          marginRight,
        }}
      />
    </View>
  );
};

export default DotVerticalThree;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(32),
    height: responsiveWidth(32),
    borderRadius: responsiveWidth(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
