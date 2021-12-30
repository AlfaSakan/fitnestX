import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../assets/colors';
import {fontFamily, fontSize, lineHeight} from '../../assets/Typography';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsiveDimension';
import TypographyRegular from '../Typography/TypographyRegular';

export default function ButtonSquare({
  isLogo = false,
  image,
  buttonColor = colors.blueLinear,
  color = colors.white,
  propFontFamily = fontFamily.medium,
  propFontSize = fontSize.smallText,
  propLineHeight = lineHeight.smallText,
  text,
  isGradient = false,
  position,
  bottom,
  right,
  top,
  left,
}) {
  if (isLogo) {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
      </View>
    );
  }
  if (isGradient) {
    return (
      <LinearGradient
        style={[styles.unitBox, {position, bottom, right, top, left}]}
        colors={buttonColor}>
        <TypographyRegular
          text={text}
          fontFamily={propFontFamily}
          fontSize={propFontSize}
          lineHeight={propLineHeight}
          color={color}
        />
      </LinearGradient>
    );
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 14,
    borderColor: colors.gray3,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
  unitBox: {
    width: responsiveWidth(48),
    height: responsiveWidth(48),
    borderRadius: responsiveWidth(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
