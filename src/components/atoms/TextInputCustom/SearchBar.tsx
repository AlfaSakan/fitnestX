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
import { FilterSearch } from '../../../assets/Images/svg';
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
  isHide?: boolean;
  color?: string;
  onPressEye?(): void;
  keyboardType?: KeyboardTypeOptions;
  propfontFamily?: string;
  propfontSize?: number;
  proplineHeight?: number;
  isValid?: boolean;
}

const SearchBar: React.FC<TextInputCustomType> = ({
  placeholder,
  value,
  onChangeText,
  image,
  backgroundColor = colors.white,
  isHide = false,
  color = colors.black,
  propfontFamily = fontFamily.regular,
  propfontSize = fontSize.smallText,
  proplineHeight = lineHeight.smallText,
  onPressEye,
  keyboardType,
  isValid = true,
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
      />
      <FilterSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: responsiveHeight(15),
    flexDirection: 'row',
    paddingVertical: Platform.OS === 'android' ? responsiveHeight(1) : responsiveHeight(15),
    paddingHorizontal: responsiveHeight(15),
    borderRadius: responsiveWidth(15),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  textInput: {
    flex: 1,
    marginLeft: responsiveWidth(10),
  },
});

export default SearchBar;
