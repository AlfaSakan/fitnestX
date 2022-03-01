import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useAppDispatch } from '../../config/redux/app/hooks';

import { SignupAndLoginStackType } from '../../utils/types/navigation';
import { regexSimplePassword, regexValidateEmail } from '../../utils/functions/RegularExpression';
import { toastError } from '../../utils/types/toastError';

import SignUpTemplate from '../../components/templates/SignUpTemplate';
import {
  setEmail,
  setFirstName,
  setLastName,
} from '../../config/redux/features/user/userInformation';

type SignupNavigationType = NativeStackScreenProps<SignupAndLoginStackType, 'SignupScreen'>;

export default function SignupScreen({ navigation }: SignupNavigationType) {
  const [firstNameState, setFirstNameState] = useState('');
  const [lastNameState, setLastNameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [password, setPassword] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isNotEmpty, setIsNotEmpty] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const dispatch = useAppDispatch();

  const createOneButtonAlert = () =>
    Alert.alert('Please insert data in correct way', '', [
      {
        text: 'Continue',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);

  const EmailAlert = () =>
    Alert.alert('Please insert email correctly', '', [
      {
        text: 'Continue',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);

  const passwordAlert = () =>
    Alert.alert(
      'password must have 6 to 16 characters, \nat least one number, \none special character',
      '',
      [
        {
          text: 'Continue',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ]
    );

  const handleVisiblePassword = () => {
    setIsHidePassword(!isHidePassword);
  };

  const navigateNextScreen = async () => {
    if (!regexValidateEmail.test(emailState)) {
      setIsEmailValid(false);
      EmailAlert();
      return;
    }

    if (!regexSimplePassword.test(password)) {
      setIsPasswordValid(false);
      passwordAlert();
      return;
    }

    if (!isNotEmpty) {
      createOneButtonAlert();
      return;
    }

    dispatch(setEmail(emailState));
    dispatch(setFirstName(firstNameState));
    dispatch(setLastName(lastNameState));

    navigation.navigate('RegisterAccountData', { password });
  };

  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  useEffect(() => {
    setIsNotEmpty(false);
    if (
      firstNameState !== '' &&
      lastNameState !== '' &&
      emailState !== '' &&
      password !== '' &&
      isCheck
    ) {
      setIsNotEmpty(true);
    }
  }, [firstNameState, lastNameState, emailState, password, isCheck]);

  useEffect(() => {
    setIsPasswordValid(true);
  }, [password]);

  useEffect(() => {
    setIsEmailValid(true);
  }, [emailState]);

  return (
    <SignUpTemplate
      firstName={firstNameState}
      lastName={lastNameState}
      handleFirstName={setFirstNameState}
      handleLastName={setLastNameState}
      emailState={emailState}
      handleEmail={setEmailState}
      isEmailValid={isEmailValid}
      handlePassword={setPassword}
      handleToggle={setIsCheck}
      isCheck={isCheck}
      isHidePassword={isHidePassword}
      isPasswordValid={isPasswordValid}
      password={password}
      handleVisiblePassword={handleVisiblePassword}
      onClickLogin={navigateToLogin}
      onClickRegister={navigateNextScreen}
    />
  );
}
