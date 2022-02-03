import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  GetStartedScreen,
  LandingScreen,
  OnboardingScreen1,
  OnboardingScreen2,
  OnboardingScreen3,
  OnboardingScreen4,
} from '../screens/OnboardingScreen';
import { OnboardingStackType } from '../utils/types/navigation';

const OnboardingStack = createNativeStackNavigator<OnboardingStackType>();

export default function OnboardingStackScreen({}) {
  return (
    <OnboardingStack.Navigator initialRouteName="LandingScreen">
      <OnboardingStack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <OnboardingStack.Screen
        name="GetStarted"
        component={GetStartedScreen}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <OnboardingStack.Screen
        name="Onboarding1"
        component={OnboardingScreen1}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <OnboardingStack.Screen
        name="Onboarding2"
        component={OnboardingScreen2}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <OnboardingStack.Screen
        name="Onboarding3"
        component={OnboardingScreen3}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
      <OnboardingStack.Screen
        name="Onboarding4"
        component={OnboardingScreen4}
        options={{ headerShown: false, animation: 'slide_from_right' }}
      />
    </OnboardingStack.Navigator>
  );
}
