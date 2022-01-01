import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { MainStackNavigation, SignupAndLoginStackType } from '../../types/navigation';
import GreetingScreen from '../Master/GreetingScreen';

import { useAppSelector } from '../../app/hooks';

type MainNavigationType = NativeStackScreenProps<MainStackNavigation, 'SignupAndLoginStackScreen'>;

export default function WelcomingScreen({ navigation }: MainNavigationType) {
  const { firstName } = useAppSelector((state) => state.user);

  const navigateToHome = () => {
    navigation.navigate('BottomNavbarStackScreen');
  };

  return <GreetingScreen onPressFooter={navigateToHome} name={firstName} />;
}
