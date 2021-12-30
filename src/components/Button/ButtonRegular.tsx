import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';
import TypographyGradient from '../Typography/TypographyGradient';
import TypographyRegular from '../Typography/TypographyRegular';

export type ButtonRegularType = {
  color?: string[];
  text: string;
  position?: 'absolute' | 'relative';
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  onPress?(): void;
  buttonColor?: string;
  width?: number;
  height?: number;
};

const ButtonRegular: React.FC<ButtonRegularType> = ({
  color = colors.blueLinear,
  text,
  position = 'relative',
  top,
  right,
  left,
  bottom,
  onPress,
  buttonColor = colors.white,
  width = responsiveWidth(94),
  height = responsiveHeight(35),
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          position,
          bottom,
          right,
          top,
          left,
          backgroundColor: buttonColor,
          width,
          height,
        },
      ]}
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
    borderRadius: responsiveHeight(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.caption,
    lineHeight: lineHeight.caption,
  },
});

export default ButtonRegular;
