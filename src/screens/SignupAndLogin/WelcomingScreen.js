import React from 'react';
import GreetingScreen from '../Master/GreetingScreen';

export default function WelcomingScreen({navigation}) {
  const navigateToHome = () => {
    navigation.navigate('BottomNavbarStackScreen');
  };

  return <GreetingScreen onPressFooter={navigateToHome} />;
}
