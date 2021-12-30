import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {images} from '../../assets/images';
import {fontFamily, fontSize, lineHeight} from '../../assets/Typography';
import OnboardingTemplate from '../Master/OnboardingTemplate';

const {width, height} = Dimensions.get('screen');

export default function OnboardingScreen4({navigation}) {
  const footerOnPress = () => {
    navigation.navigate('SignupAndLoginStackScreen');
  };

  return (
    <OnboardingTemplate
      image={images.onboarding4}
      textTitle="Improve Sleep Quality"
      textBody="Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning."
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
