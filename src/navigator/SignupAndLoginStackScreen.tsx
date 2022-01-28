import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ChooseYourGoals,
  LoginScreen,
  RegisterAccountData,
  SignupScreen,
  WelcomingScreen,
} from '../screens/SignupAndLogin';
import { SignupAndLoginStackType } from '../utils/types/navigation';

const SignupAndLoginStack = createNativeStackNavigator<SignupAndLoginStackType>();

export default function SignupAndLoginStackScreen({}) {
  return (
    <SignupAndLoginStack.Navigator initialRouteName="SignupScreen">
      <SignupAndLoginStack.Screen
        name="RegisterAccountData"
        component={RegisterAccountData}
        options={{ headerShown: false }}
      />
      <SignupAndLoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <SignupAndLoginStack.Screen
        name="ChooseYourGoals"
        component={ChooseYourGoals}
        options={{ headerShown: false }}
      />
      <SignupAndLoginStack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <SignupAndLoginStack.Screen
        name="WelcomingScreen"
        component={WelcomingScreen}
        options={{ headerShown: false }}
      />
    </SignupAndLoginStack.Navigator>
  );
}
