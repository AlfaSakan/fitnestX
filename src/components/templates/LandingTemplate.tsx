import React, { useEffect } from 'react';
import { Animated, ColorValue, StatusBar, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import ButtonLarge from '../atoms/Button/ButtonLarge';
import TypographyRegular from '../atoms/Typography/TypographyRegular';

import Toast from 'react-native-toast-message';
interface Props {
  onClickButton?: () => void;
  buttonLabel?: string;
  backgroundColors?: (string | number)[];
  xColor?: ColorValue;
  isAnimate?: boolean;
}

const LandingTemplate: React.FC<Props> = ({
  onClickButton,
  buttonLabel,
  backgroundColors = colors.blueLinear,
  xColor = colors.white,
  isAnimate = true,
}) => {
  const opacityAnimate = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacityAnimate, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={backgroundColors}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <Animated.View
          style={[styles.TypographyAnimationStyle, { opacity: isAnimate ? opacityAnimate : 1 }]}
        >
          <View style={styles.brandText}>
            <TypographyRegular
              text="Fitnest"
              color={colors.black}
              fontFamily={fontFamily.bold}
              fontSize={fontSize.h1}
              lineHeight={lineHeight.h1}
            />
            <TypographyRegular
              text={`X`}
              color={xColor}
              fontFamily={fontFamily.bold}
              fontSize={35}
              lineHeight={lineHeight.h1}
            />
          </View>
          <TypographyRegular
            text="Everybody Can Train"
            color={colors.gray1}
            fontFamily={fontFamily.regular}
            fontSize={fontSize.subtitle}
            lineHeight={lineHeight.subtitle}
          />
        </Animated.View>
        {buttonLabel && (
          <ButtonLarge
            text={buttonLabel}
            onPress={onClickButton}
            position="absolute"
            bottom={responsiveHeight(40)}
          />
        )}
      </View>
      <Toast />
    </LinearGradient>
  );
};

export default LandingTemplate;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.white,
    width: responsiveWidth(315),
    height: responsiveHeight(60),
    borderRadius: responsiveHeight(30),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: responsiveHeight(40),
  },
  brandText: {
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.largeText,
    lineHeight: lineHeight.largeText,
  },
  TypographyAnimationStyle: {
    alignItems: 'center',
  },
});
