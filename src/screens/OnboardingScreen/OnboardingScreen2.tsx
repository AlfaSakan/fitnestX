import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { images } from '../../assets/images';
import { OnboardingStackType } from '../../utils/types/navigation';
import OnboardingTemplate from '../Master/OnboardingTemplate';

const { width, height } = Dimensions.get('screen');

type OnboardingNavigationType = NativeStackScreenProps<OnboardingStackType, 'Onboarding2'>;

export default function OnboardingScreen2({ navigation }: OnboardingNavigationType) {
  const footerOnPress = () => {
    navigation.navigate('Onboarding3');
  };

  return (
    <OnboardingTemplate
      image={images.onboarding2}
      textTitle="Get Burn"
      textBody="Let's keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever."
      onPress={footerOnPress}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width,
  },
});
