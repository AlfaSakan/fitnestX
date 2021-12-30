import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import CalendarIcon from '../../assets/Images/svg/CalendarIcon';
import SwapIcon from '../../assets/Images/svg/SwapIcon';
import TwoUserIcon from '../../assets/Images/svg/TwoUserIcon';
import WeightScale1Icon from '../../assets/Images/svg/WeightScale1Icon';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import ButtonLarge from '../../components/Button/ButtonLarge';
import ButtonLargeGradient from '../../components/Button/ButtonLargeGradient';
import Margin from '../../components/Margin';
import TextInputDropdown from '../../components/TextInputCustom/TextInputDropdown';
import TextInputWithUnit from '../../components/TextInputCustom/TextInputWithUnit';
import TypographyRegular from '../../components/Typography/TypographyRegular';
import { SignupAndLoginStackType } from '../../types/navigation';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';

const { width, height } = Dimensions.get('screen');

type RegisterAccountNavigationType = NativeStackScreenProps<
  SignupAndLoginStackType,
  'RegisterAccountData'
>;

export default function RegisterAccountData() {
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [inputWeight, setInputWeight] = useState('');
  const [inputHeight, setInputHeight] = useState('');
  const [isDropdownGender, setIsDropdownGender] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const { navigation } = useNavigation<RegisterAccountNavigationType>();

  const createOneButtonAlert = () =>
    Alert.alert('Please insert data incorrect way', '', [
      {
        text: 'Continue',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);

  const handleDropdownGender = () => {
    setIsDropdownGender(!isDropdownGender);
  };

  const chooseGender = (sex: string) => {
    setGender(sex);
    setIsDropdownGender(false);
  };

  const navigateNextScreen = () => {
    // if (!isValid) {
    //   createOneButtonAlert();
    //   return;
    // }
    navigation.navigate('WelcomingScreen');
    console.log('Kesini dong');
  };

  const handleHeight = (value: string) => {
    setInputHeight(value);
  };

  const handleWeight = (value: string) => {
    setInputWeight(value);
  };

  useEffect(() => {
    if (gender === '' || dateOfBirth === '' || inputWeight === '' || inputHeight === '') {
      setIsValid(false);
    } else if (inputHeight || inputWeight) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [gender, dateOfBirth, inputHeight, inputWeight]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={images.womenInBall} resizeMode="contain" />
        <Margin margin={30} />
        <View style={styles.body}>
          <TypographyRegular
            text="Let's complete your profile"
            fontSize={fontSize.h4}
            lineHeight={lineHeight.h4}
            fontFamily={fontFamily.bold}
            color={colors.black}
          />
          <TypographyRegular
            text="It will help us to know more about you!"
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            color={colors.gray1}
          />
          <Margin margin={30} />
          <TextInputDropdown
            image={<TwoUserIcon />}
            isDropdown={true}
            value={gender}
            placeholder="Choose Gender"
            onPress={handleDropdownGender}
          />
          <TextInputDropdown
            value={dateOfBirth}
            image={<CalendarIcon />}
            placeholder="Date of Birth"
            onPress={() => {}}
          />
          <TextInputWithUnit
            placeholder="Your Weight"
            value={inputWeight}
            image={<WeightScale1Icon />}
            unit="KG"
            onChangeText={handleWeight}
            maxLength={3}
          />
          <TextInputWithUnit
            placeholder="Your Height"
            value={inputHeight}
            onChangeText={handleHeight}
            image={<SwapIcon />}
            unit="CM"
            maxLength={3}
          />
          <Margin margin={30} />
          <ButtonLargeGradient
            text="Next >"
            buttonColor={colors.blueLinear}
            color={colors.white}
            onPress={navigateNextScreen}
          />
          <Margin margin={40} />
        </View>
      </ScrollView>
      <Modal
        visible={isDropdownGender}
        transparent={true}
        onRequestClose={() => setIsDropdownGender(false)}
        animationType="fade"
      >
        <TouchableWithoutFeedback onPress={() => setIsDropdownGender(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TypographyRegular
                text="Select your gender"
                fontSize={fontSize.largeText}
                lineHeight={lineHeight.largeText}
              />
              <Margin margin={30} />
              <TouchableOpacity style={styles.chooseGender} onPress={() => chooseGender('Male')}>
                <TypographyRegular
                  text="Male"
                  fontSize={fontSize.largeText}
                  lineHeight={lineHeight.largeText}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.chooseGender} onPress={() => chooseGender('Female')}>
                <TypographyRegular
                  text="Female"
                  fontSize={fontSize.largeText}
                  lineHeight={lineHeight.largeText}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    paddingHorizontal: responsiveWidth(30),
    alignItems: 'center',
  },
  image: {
    // width,
    width: responsiveWidth(375),
    height: responsiveHeight(350),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    paddingTop: responsiveWidth(20),
    width: responsiveWidth(200),
    height: responsiveWidth(200),
    borderRadius: responsiveWidth(14),
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  chooseGender: {
    backgroundColor: colors.gray4,
    width: '100%',
    alignItems: 'center',
    paddingVertical: responsiveWidth(7),
    marginBottom: 5,
  },
});
