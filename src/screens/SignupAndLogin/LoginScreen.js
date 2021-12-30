import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import {fontFamily, fontSize, lineHeight} from '../../assets/Typography';
import ButtonLarge from '../../components/Button/ButtonLarge';
import ButtonSquare from '../../components/Button/ButtonSquare';
import LineSeparator from '../../components/LineSeparator';
import LineSeparatorWithText from '../../components/LineSeparatorWithText';
import Margin from '../../components/Margin';
import TextInputCustom from '../../components/TextInputCustom/TextInputCustom';
import TypographyGradient from '../../components/Typography/TypographyGradient';
import TypographyRegular from '../../components/Typography/TypographyRegular';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsiveDimension';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHide, setIsHide] = useState(true);

  const handlePassword = value => {
    setPassword(value);
  };

  const handleIsHidePassword = () => {
    setIsHide(!isHide);
  };

  const navigateToRegister = () => {
    navigation.navigate('SignupScreen');
  };

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
          image={images.messageRegular}
          value={email}
          onChangeText={setEmail}
        />
        <TextInputCustom
          placeholder="Password"
          image={images.lockRegular}
          value={password}
          onChangeText={handlePassword}
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
        <ButtonLarge
          text="Login"
          isTextGradient={false}
          buttonColor={colors.blueLinear}
          color={colors.white}
        />
        <Margin margin={20} />
        <LineSeparatorWithText />
        <Margin margin={20} />
        <View
          style={[
            styles.containerSeparator,
            {width: responsiveWidth(130), justifyContent: 'space-between'},
          ]}>
          <ButtonSquare isLogo={true} image={images.googleLogo} />
          <ButtonSquare isLogo={true} image={images.facebookLogo} />
        </View>
        <Margin margin={20} />
        <View style={styles.containerSeparator}>
          <TypographyRegular
            fontSize={fontSize.mediumText}
            lineHeight={lineHeight.mediumText}
            text="Don't have an account yet? "
          />
          <TouchableOpacity onPress={navigateToRegister}>
            <TypographyGradient
              style={styles.textGradient}
              color={colors.purpleLinear}>
              Register
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
    alignItems: 'center',
    paddingTop: responsiveHeight(40),
    backgroundColor: colors.white,
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
    position: 'absolute',
    bottom: responsiveHeight(40),
  },
  textGradient: {
    fontSize: fontSize.mediumText,
    lineHeight: lineHeight.mediumText,
    fontFamily: fontFamily.regular,
  },
});
