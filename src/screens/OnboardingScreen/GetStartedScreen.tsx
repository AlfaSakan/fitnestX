import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackType } from '../../utils/types/navigation';
import LandingTemplate from '../../components/templates/LandingTemplate';

type GetStartedNavigationType = NativeStackScreenProps<OnboardingStackType, 'GetStarted'>;

export default function GetStartedScreen({ navigation }: GetStartedNavigationType) {
  const navigateNextScreen = () => {
    navigation.navigate('Onboarding1');
  };

  return (
    <LandingTemplate
      buttonLabel="Get Started"
      onClickButton={navigateNextScreen}
      isAnimate={false}
    />
  );
}
