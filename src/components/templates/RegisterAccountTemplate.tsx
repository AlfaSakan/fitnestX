import moment from 'moment';
import React from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import { CalendarIcon, SwapIcon, TwoUserIcon, WeightScale1Icon } from '../../assets/Images/svg';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import { GenderType } from '../../utils/types/gender';
import ButtonLargeGradient from '../atoms/Button/ButtonLargeGradient';
import Margin from '../atoms/Margin/Margin';
import TextInputDropdown from '../atoms/TextInputCustom/TextInputDropdown';
import TextInputWithUnit from '../atoms/TextInputCustom/TextInputWithUnit';
import TypographyRegular from '../atoms/Typography/TypographyRegular';

interface Props {
  genderInput: GenderType;
  weightInput: number;
  heightInput: number;
  handleDropdownGender: () => void;
  date: Date;
  handleWeight: (value: string) => void;
  isDropdownGender: boolean;
  onPressButton: () => void;
  onCancelDatePicker: () => void;
  onConfirmDatePicker: (date: Date) => void;
  chooseGender: (value: GenderType) => void;
  openCalendar: boolean;
  handleHeight: (value: string) => void;
  onOpenCalendar: () => void;
  onDateChange: (value: Date) => void;
}

const RegisterAccountTemplate: React.FC<Props> = ({
  genderInput,
  handleDropdownGender,
  date,
  weightInput,
  handleWeight,
  heightInput,
  isDropdownGender,
  onPressButton,
  chooseGender,
  openCalendar,
  handleHeight,
  onCancelDatePicker,
  onConfirmDatePicker,
  onOpenCalendar,
  onDateChange,
}) => {
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
            value={genderInput}
            placeholder="Choose Gender"
            onPress={handleDropdownGender}
          />
          <TextInputDropdown
            value={moment(date).format('DD MMMM YYYY')}
            image={<CalendarIcon />}
            placeholder="Date of Birth"
            onPress={onOpenCalendar}
            testID="date input"
          />
          <TextInputWithUnit
            placeholder="Your Weight"
            value={weightInput === 0 ? '' : weightInput.toString()}
            image={<WeightScale1Icon />}
            unit="KG"
            onChangeText={handleWeight}
            maxLength={3}
            testID="weight"
          />
          <TextInputWithUnit
            placeholder="Your Height"
            value={heightInput === 0 ? '' : heightInput.toString()}
            onChangeText={handleHeight}
            image={<SwapIcon />}
            unit="CM"
            maxLength={3}
            testID="height"
          />
          <Margin margin={30} />
          <ButtonLargeGradient
            text="Next >"
            buttonColor={colors.blueLinear}
            color={colors.white}
            onPress={onPressButton}
          />
          <Margin margin={40} />
        </View>
      </ScrollView>
      <DatePicker
        modal
        mode="date"
        open={openCalendar}
        date={date}
        onConfirm={onConfirmDatePicker}
        onCancel={onCancelDatePicker}
        onDateChange={onDateChange}
        testID="datePicker"
      />
      <Modal
        visible={isDropdownGender}
        transparent={true}
        onRequestClose={handleDropdownGender}
        animationType="fade"
      >
        <TouchableWithoutFeedback onPress={handleDropdownGender}>
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
};

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

export default RegisterAccountTemplate;
