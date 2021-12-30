import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {images} from '../../assets/images';
import {fontFamily, fontSize, lineHeight} from '../../assets/Typography';
import OnboardingTemplate from '../Master/OnboardingTemplate';

const {width, height} = Dimensions.get('screen');

export default function OnboardingScreen2({navigation}) {
  const footerOnPress = () => {
    navigation.navigate('Onboarding3');
  };

  return (
    <OnboardingTemplate
      image={images.onboarding2}
      textTitle="Get Burn"
      textBody="Let's keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever."
      onPress={footerOnPress}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width,
  },
});
