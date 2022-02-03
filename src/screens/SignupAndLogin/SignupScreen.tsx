import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { SignupAndLoginStackType } from '../../utils/types/navigation';
import SignUpTemplate from '../../components/templates/SignUpTemplate';
import { regexValidateEmail, regexValidatePassword } from '../../utils/functions/RegularExpression';
import UserFirebase from '../../config/firebase/userFirebase';
import { FirebaseError } from 'firebase/app';
import { User } from 'firebase/auth';

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

  const userFirebase = new UserFirebase();

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

  const handleFirstName = (value: string) => {
    setFirstNameState(value);
  };

  const handleLastName = (value: string) => {
    setLastNameState(value);
  };

  const handleEmail = (value: string) => {
    setEmailState(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleToggle = (value: boolean) => {
    setIsCheck(value);
  };

  const handleVisiblePassword = () => {
    setIsHidePassword(!isHidePassword);
  };

  const navigateNextScreen = async () => {
    try {
      if (!regexValidateEmail.test(emailState)) {
        setIsEmailValid(false);
        EmailAlert();
        return;
      }

      if (!regexValidatePassword.test(password)) {
        setIsPasswordValid(false);
        passwordAlert();
        return;
      }

      if (!isNotEmpty) {
        createOneButtonAlert();
        return;
      }

      const result = await userFirebase.signUpUser(emailState, password);

      if (result instanceof FirebaseError || !result) {
        throw result;
      }

      const resultSetName = await userFirebase.setNameUser(
        firstNameState,
        lastNameState,
        result.uid
      );

      if (resultSetName instanceof FirebaseError || !resultSetName) {
        throw resultSetName;
      }

      navigation.navigate('RegisterAccountData');
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Failed to Sign Up', `${errorMessage} (${errorCode})`, [
          {
            text: 'Continue',
            style: 'cancel',
          },
        ]);
      }
    }
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
      handleFirstName={handleFirstName}
      handleLastName={handleLastName}
      emailState={emailState}
      handleEmail={handleEmail}
      isEmailValid={isEmailValid}
      handlePassword={handlePassword}
      handleToggle={handleToggle}
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
