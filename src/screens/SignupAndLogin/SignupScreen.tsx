import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import LockIcon from '../../assets/Images/svg/LockIcon';
import MessageIcon from '../../assets/Images/svg/MessageIcon';
import ProfileIcon from '../../assets/Images/svg/ProfileIcon';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import ButtonLarge from '../../components/Button/ButtonLarge';
import ButtonLargeGradient from '../../components/Button/ButtonLargeGradient';
import ButtonSquare from '../../components/Button/ButtonSquare';
import LineSeparator from '../../components/LineSeparator';
import LineSeparatorWithText from '../../components/LineSeparatorWithText';
import Margin from '../../components/Margin';
import TextInputCustom from '../../components/TextInputCustom/TextInputCustom';
import TypographyGradient from '../../components/Typography/TypographyGradient';
import TypographyRegular from '../../components/Typography/TypographyRegular';
import TypographyWithCheckBox from '../../components/Typography/TypographyWithCheckBox';
import { SignupAndLoginStackType } from '../../types/navigation';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';

type SignupNavigationType = NativeStackScreenProps<SignupAndLoginStackType, 'SignupScreen'>;

export default function SignupScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);

  const { navigation } = useNavigation<SignupNavigationType>();

  const handleFirstName = (value: string) => {
    setFirstName(value);
  };

  const handleLastName = (value: string) => {
    setLastName(value);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
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
    navigation.navigate('RegisterAccountData');
  };

  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };

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
          value={email}
          onChangeText={handleEmail}
        />
        <TextInputCustom
          image={<LockIcon />}
          placeholder="Password"
          value={password}
          isPassword={true}
          isHide={isHidePassword}
          onChangeText={handlePassword}
          onPressEye={handleVisiblePassword}
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
