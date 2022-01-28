import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../../utils/functions/responsiveDimension';
import TypographyGradient from '../Typography/TypographyGradient';
import TypographyRegular from '../Typography/TypographyRegular';

interface ButtonLargeGradientType {
  color?: string;
  text: string;
  position?: 'absolute' | 'relative';
  top?: string | number;
  right?: string | number;
  left?: string | number;
  bottom?: string | number;
  onPress(): void;
  buttonColor: (string | number)[];
}

const ButtonLargeGradient: React.FC<ButtonLargeGradientType> = ({
  color,
  text,
  position = 'relative',
  top,
  right,
  left,
  bottom,
  onPress,
  buttonColor = colors.blueLinear,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.button, { position, bottom, right, top, left }]}
        colors={buttonColor}
      >
        <TypographyRegular
          text={text}
          fontFamily={fontFamily.bold}
          fontSize={fontSize.largeText}
          lineHeight={lineHeight.largeText}
          color={color}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: responsiveWidth(315),
    height: responsiveHeight(60),
    borderRadius: responsiveHeight(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.largeText,
    lineHeight: lineHeight.largeText,
  },
});

export default ButtonLargeGradient;
