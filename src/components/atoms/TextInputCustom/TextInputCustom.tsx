import React, { ReactElement } from 'react';
import {
  KeyboardTypeOptions,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../../../assets/colors';
import HideIcon from '../../../assets/Images/svg/HideIcon';
import ShowIcon from '../../../assets/Images/svg/ShowIcon';
import { fontFamily, fontSize, lineHeight } from '../../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../../utils/functions/responsiveDimension';

interface TextInputCustomType {
  placeholder: string;
  value: string;
  onChangeText(value: string): void;
  image?: React.ReactNode;
  backgroundColor?: string;
  isPassword?: boolean;
  isHide?: boolean;
  color?: string;
  onPressEye?(): void;
  keyboardType?: KeyboardTypeOptions;
  propfontFamily?: string;
  propfontSize?: number;
  proplineHeight?: number;
  isValid?: boolean;
  testID?: string;
}

const TextInputCustom: React.FC<TextInputCustomType> = ({
  placeholder,
  value,
  onChangeText,
  image,
  backgroundColor = colors.gray4,
  isPassword = false,
  isHide = false,
  color = colors.black,
  propfontFamily = fontFamily.regular,
  propfontSize = fontSize.smallText,
  proplineHeight = lineHeight.smallText,
  onPressEye,
  keyboardType,
  isValid = true,
  testID,
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor, borderColor: colors.danger, borderWidth: isValid ? 0 : 1 },
      ]}
    >
      {image}
      <TextInput
        style={[
          styles.textInput,
          {
            fontFamily: propfontFamily,
            fontSize: propfontSize,
            lineHeight: proplineHeight,
            color,
          },
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isHide}
        placeholderTextColor={colors.gray2}
        keyboardType={keyboardType}
        testID={testID}
      />
      {isPassword && (
        <TouchableOpacity onPress={onPressEye}>
          {isHide ? <HideIcon /> : <ShowIcon />}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  unitContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(15),
  },
  container: {
    marginBottom: responsiveHeight(15),
    flexDirection: 'row',
    paddingVertical: Platform.OS === 'android' ? responsiveHeight(1) : responsiveHeight(15),
    paddingHorizontal: responsiveHeight(10),
    borderRadius: responsiveWidth(14),
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginLeft: responsiveWidth(10),
  },
});

export default TextInputCustom;
