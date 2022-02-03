import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { SignupAndLoginStackType } from '../../utils/types/navigation';
import { GenderType } from '../../utils/types/gender';

import { useAppDispatch } from '../../config/redux/app/hooks';
import {
  setDateOfBirth,
  setGender,
  setHeight,
  setWeight,
} from '../../config/redux/features/user/userInformation';

import RegisterAccountTemplate from '../../components/templates/RegisterAccountTemplate';

type RegisterAccountNavigationType = NativeStackScreenProps<
  SignupAndLoginStackType,
  'RegisterAccountData'
>;

export default function RegisterAccountData({ navigation }: RegisterAccountNavigationType) {
  const [genderInput, setGenderInput] = useState<GenderType>('male');
  const [dobInput, setDobInput] = useState(0);
  const [weightInput, setWeightInput] = useState(0);
  const [heightInput, setHeightInput] = useState(0);
  const [isDropdownGender, setIsDropdownGender] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState(new Date());

  const dispatch = useAppDispatch();

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

  const chooseGender = (sex: GenderType) => {
    setGenderInput(sex);
    handleDropdownGender();
  };

  const navigateNextScreen = () => {
    if (!isValid) {
      createOneButtonAlert();
      return;
    }

    dispatch(setGender(genderInput));
    dispatch(setDateOfBirth(dobInput));
    dispatch(setHeight(heightInput));
    dispatch(setWeight(weightInput));

    navigation.navigate('ChooseYourGoals');
  };

  const handleHeight = (value: string) => {
    if (isNaN(Number(value))) {
      return;
    }
    setHeightInput(Number(value));
  };

  const handleWeight = (value: string) => {
    if (isNaN(Number(value))) {
      return;
    }
    setWeightInput(Number(value));
  };

  const handleCalendar = () => {
    setOpenCalendar(!openCalendar);
  };

  const onOpenCalendar = () => {
    setOpenCalendar(true);
  };

  const onCancelDatePicker = () => {
    setOpenCalendar(false);
  };

  const onConfirmDatePicker = (date: Date) => {
    setOpenCalendar(false);
    setDate(date);
    setDobInput(date.getTime());
  };

  const onDateChange = (value: Date) => {
    setDate(value);
    setDobInput(value.getTime());
  };

  useEffect(() => {
    setIsValid(true);
    if (dobInput === 0 || weightInput === 0 || heightInput === 0) {
      setIsValid(false);
    }
  }, [genderInput, dobInput, heightInput, weightInput]);

  return (
    <RegisterAccountTemplate
      chooseGender={chooseGender}
      date={date}
      genderInput={genderInput}
      heightInput={heightInput}
      weightInput={weightInput}
      handleHeight={handleHeight}
      handleWeight={handleWeight}
      isDropdownGender={isDropdownGender}
      handleDropdownGender={handleDropdownGender}
      onCancelDatePicker={handleCalendar}
      onConfirmDatePicker={onConfirmDatePicker}
      onOpenCalendar={handleCalendar}
      onPressButton={navigateNextScreen}
      openCalendar={openCalendar}
      onDateChange={onDateChange}
    />
  );
}
