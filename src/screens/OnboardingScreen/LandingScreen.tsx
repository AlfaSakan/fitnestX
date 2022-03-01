import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import LandingTemplate from '../../components/templates/LandingTemplate';
import { MainStackNavigation, OnboardingStackType } from '../../utils/types/navigation';
import { colors } from '../../assets/colors';
import { useAppDispatch } from '../../config/redux/app/hooks';
import { setUserData } from '../../config/redux/features/user/userInformation';
import { getUser } from '../api/user';
import { UserType } from '../../utils/types';

type LandingScreenNavigation = NativeStackScreenProps<OnboardingStackType, 'LandingScreen'>;

type MainNavigationNavigationProp = NativeStackNavigationProp<
  MainStackNavigation,
  'OnboardingStackScreen'
>;

const LandingScreen = ({ navigation }: LandingScreenNavigation) => {
  const mainNavigate = useNavigation<MainNavigationNavigationProp>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(async () => {
      try {
        const user = await getUser();

        if (!user) {
          navigation.replace('GetStarted');
          return;
        }

        const userData = user.result as UserType;

        dispatch(setUserData(userData));

        mainNavigate.replace('BottomNavbarStackScreen', { screen: 'HomeTab' });
      } catch (error) {
        console.log(error);
        navigation.replace('GetStarted');
      }
    }, 5000);
  }, []);

  return (
    <LandingTemplate backgroundColors={[colors.white, colors.white]} xColor={colors.purple1} />
  );
};

export default LandingScreen;
