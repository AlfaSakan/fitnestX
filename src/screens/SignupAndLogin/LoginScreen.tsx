import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { MainStackNavigation, SignupAndLoginStackType } from '../../utils/types/navigation';
import LoginTemplate from '../../components/templates/LoginTemplate';
import UserFirebase from '../../config/firebase/userFirebase';
import { FirebaseError } from 'firebase/app';
import { useNavigation } from '@react-navigation/native';

type LoginNavigationType = NativeStackScreenProps<SignupAndLoginStackType, 'LoginScreen'>;
type MainNavigationNavigationProp = NativeStackNavigationProp<
  MainStackNavigation,
  'SignupAndLoginStackScreen'
>;

export default function LoginScreen({ navigation }: LoginNavigationType) {
  const [inputLogin, setInputLogin] = useState({
    email: '',
    password: '',
  });
  const [isHide, setIsHide] = useState(true);

  const mainNavigation = useNavigation<MainNavigationNavigationProp>();

  const userFirebase = new UserFirebase();

  const onChangeInput = useCallback((value, type) => {
    setInputLogin((prev) => ({ ...prev, [type]: value }));
  }, []);

  const handleIsHidePassword = () => {
    setIsHide(!isHide);
  };

  const navigateToRegister = () => {
    navigation.navigate('SignupScreen');
  };

  const onPressLogin = async () => {
    const resultLogin = await userFirebase.signInUser(
      inputLogin.email.toLowerCase(),
      inputLogin.password
    );

    if (resultLogin instanceof FirebaseError || !resultLogin) {
      return;
    }

    mainNavigation.navigate('BottomNavbarStackScreen', { screen: 'HomeTab' });
  };

  return (
    <LoginTemplate
      email={inputLogin.email}
      onChangeInput={onChangeInput}
      password={inputLogin.password}
      handleIsHidePassword={handleIsHidePassword}
      isHide={isHide}
      onPressRegister={navigateToRegister}
      onPressLogin={onPressLogin}
    />
  );
}
