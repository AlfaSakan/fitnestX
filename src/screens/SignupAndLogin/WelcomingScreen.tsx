import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { MainStackNavigation, SignupAndLoginStackType } from '../../types/navigation';
import GreetingScreen from '../Master/GreetingScreen';

type WelcomingNavigationType = NativeStackScreenProps<SignupAndLoginStackType, 'WelcomingScreen'>;
type MainNavigationType = NativeStackScreenProps<MainStackNavigation, 'SignupAndLoginStackScreen'>;

export default function WelcomingScreen() {
  const { navigation } = useNavigation<MainNavigationType>();

  const navigateToHome = () => {
    navigation.navigate('BottomNavbarStackScreen');
  };

  return <GreetingScreen onPressFooter={navigateToHome} />;
}
