import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import { LockIcon, MessageIcon } from '../../assets/Images/svg';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import ButtonLargeGradient from '../atoms/Button/ButtonLargeGradient';
import ButtonSquare from '../atoms/Button/ButtonSquare';
import BaseContainer from '../atoms/Container/BaseContainer';
import LineSeparatorWithText from '../atoms/LineSeparator/LineSeparatorWithText';
import Margin from '../atoms/Margin/Margin';
import TextInputCustom from '../atoms/TextInputCustom/TextInputCustom';
import TypographyGradient from '../atoms/Typography/TypographyGradient';
import TypographyRegular from '../atoms/Typography/TypographyRegular';

interface Props {
  email: string;
  password: string;
  onChangeInput: (value: string, type: string) => void;
  isHide: boolean;
  handleIsHidePassword: () => void;
  onPressRegister: () => void;
  onPressLogin: () => void;
}

const { width, height } = Dimensions.get('window');

const LoginTemplate: React.FC<Props> = ({
  email,
  password,
  onChangeInput,
  isHide,
  handleIsHidePassword,
  onPressRegister,
  onPressLogin,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TypographyRegular
          text="Hey there,"
          fontSize={fontSize.largeText}
          lineHeight={lineHeight.largeText}
          color={colors.black}
        />
        <TypographyRegular
          text="Welcome Back"
          fontFamily={fontFamily.bold}
          fontSize={fontSize.h4}
          lineHeight={lineHeight.h4}
          color={colors.black}
        />
        <Margin margin={30} />
        <TextInputCustom
          placeholder="Email"
          image={<MessageIcon />}
          value={email}
          onChangeText={(value) => onChangeInput(value, 'email')}
        />
        <TextInputCustom
          placeholder="Password"
          image={<LockIcon />}
          value={password}
          onChangeText={(value) => onChangeInput(value, 'password')}
          isPassword={true}
          isHide={isHide}
          onPressEye={handleIsHidePassword}
        />
        <TouchableOpacity>
          <TypographyRegular
            text="Forgot your password?"
            fontFamily={fontFamily.medium}
            fontSize={fontSize.mediumText}
            lineHeight={lineHeight.mediumText}
            color={colors.gray2}
            textDecorationLine="underline"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <ButtonLargeGradient
          text="Login"
          buttonColor={colors.blueLinear}
          color={colors.white}
          onPress={onPressLogin}
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
            text="Don't have an account yet? "
          />
          <TouchableOpacity onPress={onPressRegister}>
            <TypographyGradient style={styles.textGradient} color={colors.purpleLinear}>
              Register
            </TypographyGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    paddingTop: responsiveHeight(40),
    paddingBottom: responsiveHeight(20),
    backgroundColor: colors.white,
    height,
    width,
    justifyContent: 'space-between',
  },
  textInputContainer: {
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(30),
  },
  containerSeparator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    // position: 'absolute',
    // bottom: responsiveHeight(60),
  },
  textGradient: {
    fontSize: fontSize.mediumText,
    lineHeight: lineHeight.mediumText,
    fontFamily: fontFamily.regular,
  },
});
export default LoginTemplate;
