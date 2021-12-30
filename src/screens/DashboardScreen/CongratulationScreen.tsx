import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { images } from '../../assets/images';
import { HomeStackType } from '../../types/navigation';
import GreetingScreen from '../Master/GreetingScreen';

type CongratulationNavigationType = NativeStackScreenProps<HomeStackType, 'CongratulationScreen'>;

export default function CongratulationScreen() {
  const { navigation } = useNavigation<CongratulationNavigationType>();

  return (
    <GreetingScreen
      image={images.womanWithBall}
      title="Congratulations, You Have Finished Your Workout"
      description="Exercises is king and nutrition is queen. Combine the two and you will have a kingdom"
      description2="-Jack Lalanne"
      buttonText="Back To Home"
    />
  );
}
