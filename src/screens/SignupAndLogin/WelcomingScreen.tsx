import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { MainStackNavigation, SignupAndLoginStackType } from '../../utils/types/navigation';
import GreetingScreen from '../../components/templates/GreetingScreen';

import { useAppSelector } from '../../config/redux/app/hooks';

type MainNavigationType = NativeStackScreenProps<MainStackNavigation, 'SignupAndLoginStackScreen'>;

export default function WelcomingScreen({ navigation }: MainNavigationType) {
  const { firstName } = useAppSelector((state) => state.user);

  const navigateToHome = () => {
    navigation.navigate('BottomNavbarStackScreen', { screen: 'HomeTab' });
  };

  return <GreetingScreen onPressFooter={navigateToHome} name={firstName} />;
}
