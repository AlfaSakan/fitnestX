import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {images} from '../../assets/images';
import {fontFamily, fontSize, lineHeight} from '../../assets/Typography';
import OnboardingTemplate from '../Master/OnboardingTemplate';

const {width, height} = Dimensions.get('screen');

export default function OnboardingScreen3({navigation}) {
  const footerOnPress = () => {
    navigation.navigate('Onboarding4');
  };

  return (
    <OnboardingTemplate
      image={images.onboarding3}
      textTitle="Eat Well"
      textBody="Let's start a healthy lifestyle with us, we can determine your diet every day. Healthy eating is fun."
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
