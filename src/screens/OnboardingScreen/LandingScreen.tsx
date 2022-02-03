import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import LandingTemplate from '../../components/templates/LandingTemplate';
import { MainStackNavigation, OnboardingStackType } from '../../utils/types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../assets/colors';
import UserFirebase from '../../config/firebase/userFirebase';
import { LoginType } from '../../utils/types/loginType';
import { useAppDispatch, useAppSelector } from '../../config/redux/app/hooks';
import { FirebaseError } from 'firebase/app';
import { setLoginDispatch } from '../../config/redux/features/login';
import { setEmail } from '../../config/redux/features/user/userInformation';

type LandingScreenNavigation = NativeStackScreenProps<OnboardingStackType, 'LandingScreen'>;

type MainNavigationNavigationProp = NativeStackNavigationProp<
  MainStackNavigation,
  'OnboardingStackScreen'
>;

const LandingScreen = ({ navigation }: LandingScreenNavigation) => {
  const mainNavigate = useNavigation<MainNavigationNavigationProp>();

  const dispatch = useAppDispatch();

  const userFirebase = new UserFirebase();

  useEffect(() => {
    setTimeout(async () => {
      try {
        const userDataStorage = await AsyncStorage.getItem('user');
        if (userDataStorage) {
          const dataStorage = JSON.parse(userDataStorage) as LoginType;

          dispatch(setEmail(dataStorage.email));
          dispatch(setLoginDispatch(dataStorage));

          const checkingDataUser = await userFirebase.getDatabase(dataStorage.uid);

          if (checkingDataUser instanceof FirebaseError || !checkingDataUser) {
            navigation.replace('GetStarted');
            return;
          }

          if (!checkingDataUser.goal) {
            mainNavigate.navigate('SignupAndLoginStackScreen', { screen: 'RegisterAccountData' });
            return;
          }

          mainNavigate.replace('BottomNavbarStackScreen', { screen: 'HomeTab' });
          return;
        }

        navigation.replace('GetStarted');
      } catch (error) {
        console.log(error);
      }
    }, 5000);
  }, []);

  return (
    <LandingTemplate backgroundColors={[colors.white, colors.white]} xColor={colors.purple1} />
  );
};

export default LandingScreen;
