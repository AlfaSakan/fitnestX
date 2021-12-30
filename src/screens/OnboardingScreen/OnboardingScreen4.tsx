import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { images } from '../../assets/images';
import { MainStackNavigation, OnboardingStackType } from '../../types/navigation';
import OnboardingTemplate from '../Master/OnboardingTemplate';

const { width, height } = Dimensions.get('screen');

type OnboardingNavigationType = NativeStackScreenProps<OnboardingStackType, 'Onboarding4'>;
type MainNavigationType = NativeStackScreenProps<MainStackNavigation, 'OnboardingStackScreen'>;

export default function OnboardingScreen4() {
  const { navigation } = useNavigation<MainNavigationType>();

  const footerOnPress = () => {
    // mainNavigation.navigation.navigate('SignupAndLoginStackScreen');
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
