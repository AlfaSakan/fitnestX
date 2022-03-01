import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputEndEditingEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../assets/colors';
import { fontFamily, fontSize, lineHeight, smallTypography } from '../../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../../utils/functions/responsiveDimension';
import TypographyRegular from '../Typography/TypographyRegular';

interface Props {
  placeholder?: string;
  value1: string;
  onChangeText1(value: string, time: boolean): void;
  value2: string;
  onChangeText2(value: string): void;
  backgroundColor?: string;
  color?: string;
  propfontFamily?: string;
  propfontSize?: number;
  proplineHeight?: number;
  onEndEditing1?: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
  onEndEditing2?: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
  toggleAmPm?: (value: boolean) => void;
  isMorning?: boolean;
}

const TextInputClock: React.FC<Props> = ({
  placeholder = '00',
  value1,
  onChangeText1,
  value2,
  onChangeText2,
  backgroundColor = colors.gray4,
  color = colors.black,
  propfontFamily = fontFamily.regular,
  propfontSize = fontSize.smallText,
  proplineHeight = lineHeight.smallText,
  onEndEditing1,
  onEndEditing2,
  toggleAmPm = () => {},
  isMorning = true,
}) => {

  return (
    <View style={styles.displayFlex}>
      <TextInput
        value={value1}
        onChangeText={(value) => onChangeText1(value, isMorning)}
        style={[
          styles.containerTextInput,
          {
            marginRight: responsiveWidth(5),
            backgroundColor,
            fontFamily: propfontFamily,
            fontSize: propfontSize,
            lineHeight: proplineHeight,
            color,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.gray2}
        keyboardType="number-pad"
        onEndEditing={onEndEditing1}
      />
      <View style={{ marginBottom: responsiveHeight(15) }}>
        <TypographyRegular color={colors.gray1} text=":" />
      </View>
      <TextInput
        value={value2}
        onChangeText={onChangeText2}
        style={[
          styles.containerTextInput,
          {
            marginHorizontal: responsiveWidth(5),
            backgroundColor,
            fontFamily: propfontFamily,
            fontSize: propfontSize,
            lineHeight: proplineHeight,
            color,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.gray2}
        keyboardType="number-pad"
        onEndEditing={onEndEditing2}
      />
      <TouchableOpacity
        onPress={() => {
          toggleAmPm(!isMorning);
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors.blueLinear}
          style={styles.containerTextInput}
        >
          <TypographyRegular
            {...smallTypography}
            color={colors.white}
            text={isMorning ? 'AM' : 'PM'}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default TextInputClock;

const styles = StyleSheet.create({
  displayFlex: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerTextInput: {
    width: responsiveWidth(50),
    marginBottom: responsiveHeight(15),
    paddingHorizontal: responsiveWidth(15),
    paddingVertical: responsiveHeight(15),
    borderRadius: responsiveWidth(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
