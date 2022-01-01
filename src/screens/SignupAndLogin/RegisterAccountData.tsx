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
import ButtonLargeGradient from '../../components/Button/ButtonLargeGradient';
import Margin from '../../components/Margin';
import TextInputDropdown from '../../components/TextInputCustom/TextInputDropdown';
import TextInputWithUnit from '../../components/TextInputCustom/TextInputWithUnit';
import TypographyRegular from '../../components/Typography/TypographyRegular';
import { SignupAndLoginStackType } from '../../types/navigation';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  setDateOfBirth,
  setGender,
  setHeight,
  setWeight,
} from '../../features/user/userInformation';
import { genderType } from '../../types/gender';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const { width, height } = Dimensions.get('screen');

type RegisterAccountNavigationType = NativeStackScreenProps<
  SignupAndLoginStackType,
  'RegisterAccountData'
>;

export default function RegisterAccountData({ navigation }: RegisterAccountNavigationType) {
  // const [gender, setGender] = useState('');
  // const [dateOfBirth, setDateOfBirth] = useState('');
  // const [inputWeight, setInputWeight] = useState('');
  // const [inputHeight, setInputHeight] = useState('');
  const [isDropdownGender, setIsDropdownGender] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState(new Date());

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state);
  const { gender, height, weight, dateOfBirth } = user;

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

  const chooseGender = (sex: genderType) => {
    dispatch(setGender(sex));
    setIsDropdownGender(false);
  };

  const navigateNextScreen = () => {
    if (!isValid) {
      createOneButtonAlert();
      return;
    }
    navigation.navigate('ChooseYourGoals');
  };

  const handleHeight = (value: string) => {
    // setInputHeight(value);
    if (isNaN(Number(value))) {
      return;
    }
    dispatch(setHeight(Number(value)));
  };

  const handleWeight = (value: string) => {
    // setInputWeight(value);
    if (isNaN(Number(value))) {
      return;
    }
    dispatch(setWeight(Number(value)));
  };

  useEffect(() => {
    setIsValid(true);
    if (dateOfBirth === '' || weight === 0 || height === 0) {
      setIsValid(false);
    }
  }, [gender, dateOfBirth, height, weight]);

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
            // value={dateOfBirth}
            value={moment(date).format('DD MMMM YYYY')}
            // value={date.toString()}
            image={<CalendarIcon />}
            placeholder="Date of Birth"
            onPress={() => setOpenCalendar(true)}
          />
          <TextInputWithUnit
            placeholder="Your Weight"
            value={weight === 0 ? '' : weight.toString()}
            image={<WeightScale1Icon />}
            unit="KG"
            onChangeText={handleWeight}
            maxLength={3}
          />
          <TextInputWithUnit
            placeholder="Your Height"
            value={height === 0 ? '' : height.toString()}
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
      <DatePicker
        modal
        mode="date"
        open={openCalendar}
        date={date}
        onConfirm={(date) => {
          setOpenCalendar(false);
          setDate(date);
          dispatch(setDateOfBirth(moment(date).format('DD MMMM YYYY')));
        }}
        onCancel={() => {
          setOpenCalendar(false);
        }}
        // onDateChange={(newValue) => {
        //   setDate(newValue);
        //   dispatch(setDateOfBirth(moment(newValue).format('DD MMMM YYYY')));
        // }}
      />
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
              <TouchableOpacity style={styles.chooseGender} onPress={() => chooseGender('male')}>
                <TypographyRegular
                  text="Male"
                  fontSize={fontSize.largeText}
                  lineHeight={lineHeight.largeText}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.chooseGender} onPress={() => chooseGender('female')}>
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
