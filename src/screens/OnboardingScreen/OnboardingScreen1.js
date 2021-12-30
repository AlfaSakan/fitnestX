import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {images} from '../../assets/images';
import {fontFamily, fontSize, lineHeight} from '../../assets/Typography';
import OnboardingTemplate from '../Master/OnboardingTemplate';

const {width, height} = Dimensions.get('screen');

export default function OnboardingScreen1({navigation}) {
  const footerOnPress = () => {
    navigation.navigate('Onboarding2');
  };

  return (
    <OnboardingTemplate
      image={images.onboarding1}
      textTitle="Track Your Goal"
      textBody="Don't worry if you have trouble determining your goal, We can help you determine your goals and track your goals."
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
