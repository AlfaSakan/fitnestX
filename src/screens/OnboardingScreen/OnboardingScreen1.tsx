import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { images } from '../../assets/images';
import { OnboardingStackType } from '../../types/navigation';
import OnboardingTemplate from '../Master/OnboardingTemplate';

const { width, height } = Dimensions.get('screen');

type OnboardingNavigationType = NativeStackScreenProps<OnboardingStackType, 'Onboarding1'>;

export default function OnboardingScreen1() {
  const { navigation } = useNavigation<OnboardingNavigationType>();

  const footerOnPress = () => {
    navigation.navigate('Onboarding2');
  };

  return (
    <OnboardingTemplate
      image={images.onboarding1}
      textTitle="Track Your Goal"
      textBody="Don't worry if you have trouble determining your goal, We can help you determine your goals and track your goals."
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
