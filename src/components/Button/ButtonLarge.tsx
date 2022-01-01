import React from 'react';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';
import TypographyGradient from '../Typography/TypographyGradient';
import TypographyRegular from '../Typography/TypographyRegular';

interface ButtonLargeType {
  color?: string[];
  text?: string;
  position?: 'absolute' | 'relative';
  top?: number | string;
  right?: number | string;
  left?: number | string;
  bottom?: number | string;
  onPress?: () => void;
  buttonColor?: string;
}

const ButtonLarge: React.FC<ButtonLargeType> = ({
  color = colors.blueLinear,
  text,
  position = 'relative',
  top,
  right,
  left,
  bottom,
  onPress,
  buttonColor = colors.white,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { position, bottom, right, top, left, backgroundColor: buttonColor }]}
      onPress={onPress}
    >
      <TypographyGradient color={color} style={styles.buttonText}>
        {text}
      </TypographyGradient>
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

export default ButtonLarge;
