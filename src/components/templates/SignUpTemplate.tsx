import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import { LockIcon, MessageIcon, ProfileIcon } from '../../assets/Images/svg';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { responsiveWidth } from '../../utils/functions/responsiveDimension';
import ButtonLargeGradient from '../atoms/Button/ButtonLargeGradient';
import ButtonSquare from '../atoms/Button/ButtonSquare';
import BaseContainer from '../atoms/Container/BaseContainer';
import PaddingHorizontal from '../atoms/Container/PaddingHorizontal';
import LineSeparatorWithText from '../atoms/LineSeparator/LineSeparatorWithText';
import Margin from '../atoms/Margin/Margin';
import TextInputCustom from '../atoms/TextInputCustom/TextInputCustom';
import TypographyGradient from '../atoms/Typography/TypographyGradient';
import TypographyRegular from '../atoms/Typography/TypographyRegular';
import TypographyWithCheckBox from '../atoms/Typography/TypographyWithCheckBox';

interface SignUpProps {
  firstName: string;
  handleFirstName: (value: string) => void;
  lastName: string;
  handleLastName: (value: string) => void;
  emailState: string;
  handleEmail: (value: string) => void;
  isEmailValid: boolean;
  password: string;
  isHidePassword: boolean;
  handlePassword: (value: string) => void;
  handleVisiblePassword?: () => void;
  isPasswordValid: boolean;
  isCheck: boolean;
  handleToggle: (value: boolean) => void;
  onClickLogin: () => void;
  onClickRegister: () => void;
}

const SignUpTemplate: React.FC<SignUpProps> = ({
  firstName,
  handleFirstName,
  lastName,
  handleLastName,
  emailState,
  handleEmail,
  isEmailValid,
  password,
  isHidePassword,
  handlePassword,
  handleVisiblePassword,
  isPasswordValid,
  isCheck,
  handleToggle,
  onClickLogin,
  onClickRegister,
}) => {
  return (
    <BaseContainer>
      <PaddingHorizontal>
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
          onPress={onClickRegister}
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
          <TouchableOpacity onPress={onClickLogin}>
            <TypographyGradient style={styles.textGradient} color={colors.purpleLinear}>
              Login
            </TypographyGradient>
          </TouchableOpacity>
        </View>
      </PaddingHorizontal>
    </BaseContainer>
  );
};

export default SignUpTemplate;

const styles = StyleSheet.create({
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
