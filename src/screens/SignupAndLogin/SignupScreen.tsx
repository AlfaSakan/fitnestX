import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import LockIcon from '../../assets/Images/svg/LockIcon';
import MessageIcon from '../../assets/Images/svg/MessageIcon';
import ProfileIcon from '../../assets/Images/svg/ProfileIcon';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import ButtonLargeGradient from '../../components/atoms/Button/ButtonLargeGradient';
import ButtonSquare from '../../components/atoms/Button/ButtonSquare';
import LineSeparatorWithText from '../../components/atoms/LineSeparator/LineSeparatorWithText';
import Margin from '../../components/atoms/Margin/Margin';
import TextInputCustom from '../../components/atoms/TextInputCustom/TextInputCustom';
import TypographyGradient from '../../components/atoms/Typography/TypographyGradient';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import TypographyWithCheckBox from '../../components/atoms/Typography/TypographyWithCheckBox';
import { SignupAndLoginStackType } from '../../utils/types/navigation';
import { regexValidateEmail, regexValidatePassword } from '../../utils/functions/RegularExpression';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';

import { useAppDispatch, useAppSelector } from '../../config/redux/app/hooks';
import { setFirstName, setLastName, setEmail } from '../../config/redux/features/user/userInformation';

type SignupNavigationType = NativeStackScreenProps<SignupAndLoginStackType, 'SignupScreen'>;

export default function SignupScreen({ navigation }: SignupNavigationType) {
  // const [firstNameState, setFirstNameState] = useState('');
  // const [lastNameState, setLastNameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [password, setPassword] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isNotEmpty, setIsNotEmpty] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const { user } = useAppSelector((state) => state);
  const { firstName, lastName, email } = user;
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

  const handleFirstName = (value: string) => {
    dispatch(setFirstName(value));
  };

  const handleLastName = (value: string) => {
    dispatch(setLastName(value));
  };

  const handleEmail = (value: string) => {
    // dispatch(setEmail(value));
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

  const navigateNextScreen = () => {
    // if (!regexValidateEmail.test(emailState)) {
    //   setIsEmailValid(false);
    //   EmailAlert();
    //   return;
    // }
    // if (!regexValidatePassword.test(password)) {
    //   setIsPasswordValid(false);
    //   passwordAlert();
    //   return;
    // }
    // if (!isNotEmpty) {
    //   createOneButtonAlert();
    //   return;
    // }
    // dispatch(setEmail(emailState.toString()));
    navigation.navigate('RegisterAccountData');
  };

  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  useEffect(() => {
    setIsNotEmpty(false);
    if (firstName !== '' && lastName !== '' && emailState !== '' && password !== '' && isCheck) {
      setIsNotEmpty(true);
    }
  }, [firstName, lastName, emailState, password, isCheck]);

  useEffect(() => {
    setIsPasswordValid(true);
  }, [password]);

  useEffect(() => {
    setIsEmailValid(true);
  }, [emailState]);

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <TypographyRegular
          text="Hey there,"
          fontFamily={fontFamily.regular}
          fontSize={fontSize.largeText}
          lineHeight={lineHeight.largeText}
        />
        <TypographyRegular
          text="Create an Account"
          fontFamily={fontFamily.bold}
          fontSize={fontSize.h4}
          lineHeight={lineHeight.h4}
        />
        <Margin margin={30} />
        <TextInputCustom
          image={<ProfileIcon />}
          placeholder="First Name"
          value={firstName}
          onChangeText={handleFirstName}
        />
        <TextInputCustom
          image={<ProfileIcon />}
          placeholder="Last Name"
          value={lastName}
          onChangeText={handleLastName}
        />
        <TextInputCustom
          image={<MessageIcon />}
          placeholder="Email"
          value={emailState}
          onChangeText={handleEmail}
          isValid={isEmailValid}
        />
        <TextInputCustom
          image={<LockIcon />}
          placeholder="Password"
          value={password}
          isPassword={true}
          isHide={isHidePassword}
          onChangeText={handlePassword}
          onPressEye={handleVisiblePassword}
          isValid={isPasswordValid}
        />
        <TypographyWithCheckBox
          toggleValue={isCheck}
          onValueChange={handleToggle}
          propFontSize={fontSize.largeText}
        />
        <Margin margin={147} />
        <ButtonLargeGradient
          color={colors.white}
          text="Register"
          buttonColor={colors.blueLinear}
          onPress={navigateNextScreen}
        />
        <Margin margin={20} />
        <LineSeparatorWithText />
        <Margin margin={20} />
        <View
          style={[
            styles.containerSeparator,
            { width: responsiveWidth(130), justifyContent: 'space-between' },
          ]}
        >
          <ButtonSquare image={images.googleLogo} />
          <ButtonSquare image={images.facebookLogo} />
        </View>
        <Margin margin={20} />
        <View style={styles.containerSeparator}>
          <TypographyRegular
            fontSize={fontSize.mediumText}
            lineHeight={lineHeight.mediumText}
            text="Already have an account? "
          />
          <TouchableOpacity onPress={navigateToLogin}>
            <TypographyGradient style={styles.textGradient} color={colors.purpleLinear}>
              Login
            </TypographyGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bodyContainer: {
    alignItems: 'center',
    marginTop: responsiveHeight(40),
    paddingHorizontal: responsiveWidth(30),
  },
  containerSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textGradient: {
    fontSize: fontSize.mediumText,
    lineHeight: lineHeight.mediumText,
    fontFamily: fontFamily.regular,
  },
});
