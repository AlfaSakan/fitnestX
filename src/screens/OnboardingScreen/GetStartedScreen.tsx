import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackType } from '../../utils/types/navigation';
import LandingTemplate from '../../components/templates/LandingTemplate';

import { getUser } from '../api/user';
import fetchApi from '../../service/fetchApi';

type GetStartedNavigationType = NativeStackScreenProps<OnboardingStackType, 'GetStarted'>;

export default function GetStartedScreen({ navigation }: GetStartedNavigationType) {
  const navigateNextScreen = async () => {
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
