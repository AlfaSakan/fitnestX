import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { images } from '../../assets/images';

import { OnboardingStackType } from '../../utils/types/navigation';

import OnboardingTemplate from '../../components/templates/OnboardingTemplate';

type OnboardingNavigationType = NativeStackScreenProps<OnboardingStackType, 'Onboarding1'>;

export default function OnboardingScreen1({ navigation }: OnboardingNavigationType) {
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
