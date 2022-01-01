import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';
import TypographyRegular from '../Typography/TypographyRegular';

interface ButtonSquareGradientType {
  buttonColor?: string[];
  color?: string;
  propFontFamily?: string;
  propFontSize?: number;
  propLineHeight?: number;
  text: string;
  position?: 'absolute' | 'relative';
  bottom?: number;
  right?: number;
  top?: number;
  left?: number;
}

const ButtonSquareGradient: React.FC<ButtonSquareGradientType> = ({
  buttonColor = colors.blueLinear,
  color = colors.white,
  propFontFamily = fontFamily.medium,
  propFontSize = fontSize.smallText,
  propLineHeight = lineHeight.smallText,
  text,
  position,
  bottom,
  right,
  top,
  left,
}) => {
  return (
    <LinearGradient
      style={[styles.unitBox, { position, bottom, right, top, left }]}
      colors={buttonColor}
    >
      <TypographyRegular
        text={text}
        fontFamily={propFontFamily}
        fontSize={propFontSize}
        lineHeight={propLineHeight}
        color={color}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  unitBox: {
    width: responsiveWidth(48),
    height: responsiveWidth(48),
    borderRadius: responsiveWidth(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonSquareGradient;
