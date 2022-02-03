import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { images } from '../../assets/images';
import { MainStackNavigation } from '../../utils/types/navigation';
import OnboardingTemplate from '../../components/templates/OnboardingTemplate';

type MainNavigationType = NativeStackScreenProps<MainStackNavigation, 'OnboardingStackScreen'>;

export default function OnboardingScreen4({ navigation }: MainNavigationType) {
  const footerOnPress = () => {
    navigation.navigate('SignupAndLoginStackScreen', { screen: 'SignupScreen' });
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
