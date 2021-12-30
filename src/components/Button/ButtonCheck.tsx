import React, { ReactElement } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import TypographyRegular from '../Typography/TypographyRegular';

type ButtonCheckType = {
  onPress?(): void;
  position?: "absolute" | "relative" | undefined;
  bottom?: number | undefined;
  right?: number | undefined;
  left?: number | undefined;
  top?: number | undefined;
  text?: string;
  color?: string;
  buttonColor: (string | number)[];
  width?: number;
  height?: number;
  borderRadius?: number;
  image?: ReactElement<any, any>;
  paddingVertical?: number;
};

const ButtonCheck: React.FC<ButtonCheckType> = ({
  onPress,
  position,
  bottom,
  right,
  left,
  top,
  text,
  color,
  buttonColor,
  width,
  height,
  borderRadius,
  image = null,
  paddingVertical = 8,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.button,
          {
            position,
            bottom,
            right,
            top,
            left,
            width,
            height,
            borderRadius,
            paddingVertical,
          },
        ]}
        colors={buttonColor}
      >
        <TypographyRegular
          text={text}
          fontFamily={fontFamily.regular}
          fontSize={fontSize.smallText}
          lineHeight={lineHeight.smallText}
          color={color}
        />
        {/* {image ? <Image style={styles.image} source={image} /> : null} */}
        {image}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonCheck;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  image: {
    width: 15,
    height: 15,
  },
});
