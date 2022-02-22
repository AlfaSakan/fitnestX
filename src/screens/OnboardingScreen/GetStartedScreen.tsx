import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackType } from '../../utils/types/navigation';
import LandingTemplate from '../../components/templates/LandingTemplate';

import Toast from 'react-native-toast-message';

type GetStartedNavigationType = NativeStackScreenProps<OnboardingStackType, 'GetStarted'>;

export default function GetStartedScreen({ navigation }: GetStartedNavigationType) {
  const navigateNextScreen = () => {
    navigation.navigate('Onboarding1');
    // showToast();
  };

  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }

  return (
    <LandingTemplate
      buttonLabel="Get Started"
      onClickButton={navigateNextScreen}
      isAnimate={false}
    />
  );
}
