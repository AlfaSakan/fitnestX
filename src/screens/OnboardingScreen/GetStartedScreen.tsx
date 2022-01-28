import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { colors } from '../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';

import { OnboardingStackType } from '../../utils/types/navigation';

import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';

import { useAppDispatch, useAppSelector } from '../../config/redux/app/hooks';

import ButtonLarge from '../../components/atoms/Button/ButtonLarge';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';

type GetStartedNavigationType = NativeStackScreenProps<OnboardingStackType, 'GetStarted'>;

export default function GetStartedScreen({ navigation }: GetStartedNavigationType) {
  const [colorTransition, setColorTransition] = useState();
  const { value, value2 } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const navigateNextScreen = () => {
    navigation.navigate('Onboarding1');
    // dispatch(incremented());
    // dispatch(amountAdded(3));
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={colors.blueLinear}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
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
            color={colors.white}
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
        <ButtonLarge
          text="Get Started"
          onPress={navigateNextScreen}
          position="absolute"
          bottom={responsiveHeight(40)}
        />
      </View>
    </LinearGradient>
  );
}

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
});
