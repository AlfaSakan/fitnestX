import React from 'react';
import {images} from '../../assets/images';
import GreetingScreen from '../Master/GreetingScreen';

export default function CongratulationScreen({navigation}) {
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
