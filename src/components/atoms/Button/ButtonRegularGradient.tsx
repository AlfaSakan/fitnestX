import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../../utils/functions/responsiveDimension';
import TypographyGradient from '../Typography/TypographyGradient';
import TypographyRegular from '../Typography/TypographyRegular';

interface ButtonRegularType {
  color?: string;
  text: string;
  position?: 'absolute' | 'relative';
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  onPress?(): void;
  buttonColor?: string[];
  width?: number;
  height?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

const ButtonRegularGradient: React.FC<ButtonRegularType> = ({
  color = colors.white,
  text,
  position = 'relative',
  top,
  right,
  left,
  bottom,
  onPress,
  buttonColor = colors.blueLinear,
  paddingVertical = responsiveHeight(10),
  paddingHorizontal = responsiveWidth(40),
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.button,
          { position, bottom, right, top, left, paddingHorizontal, paddingVertical },
        ]}
        colors={buttonColor}
      >
        <TypographyRegular
          text={text}
          fontFamily={fontFamily.semiBold}
          fontSize={fontSize.smallText}
          lineHeight={lineHeight.smallText}
          color={color}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: responsiveHeight(99),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonRegularGradient;
