import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { images } from '../../assets/images';
import { OnboardingStackType } from '../../utils/types/navigation';
import OnboardingTemplate from '../../components/templates/OnboardingTemplate';

type OnboardingNavigationType = NativeStackScreenProps<OnboardingStackType, 'Onboarding3'>;

const OnboardingScreen3 = ({ navigation }: OnboardingNavigationType) => {
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
};

export default OnboardingScreen3;
