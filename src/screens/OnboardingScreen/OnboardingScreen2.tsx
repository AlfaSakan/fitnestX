import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { images } from '../../assets/images';
import { OnboardingStackType } from '../../utils/types/navigation';
import OnboardingTemplate from '../../components/templates/OnboardingTemplate';

type OnboardingNavigationType = NativeStackScreenProps<OnboardingStackType, 'Onboarding2'>;

export default function OnboardingScreen2({ navigation }: OnboardingNavigationType) {
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
