import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { MainStackNavigation, SignupAndLoginStackType } from '../../utils/types/navigation';
import LoginTemplate from '../../components/templates/LoginTemplate';
import { useNavigation } from '@react-navigation/native';
import { createSession } from '../api/session';
import { getUser } from '../api/user';
import { UserType } from '../../utils/types';
import { setUserData } from '../../config/redux/features/user/userInformation';
import { useAppDispatch } from '../../config/redux/app/hooks';

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

  const dispatch = useAppDispatch();

  const mainNavigation = useNavigation<MainNavigationNavigationProp>();

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
    try {
      await createSession(inputLogin.email, inputLogin.password);

      const user = await getUser();

      if (!user) return;

      const userData = user.result as UserType;

      dispatch(setUserData(userData));

      mainNavigation.navigate('BottomNavbarStackScreen', { screen: 'HomeTab' });
    } catch (error) {
      console.log(error);
    }
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
