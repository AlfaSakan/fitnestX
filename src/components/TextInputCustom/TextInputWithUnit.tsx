import React, { ReactElement } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import HideIcon from '../../assets/Images/svg/HideIcon';
import ShowIcon from '../../assets/Images/svg/ShowIcon';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';
import ButtonSquare from '../Button/ButtonSquare';
import ButtonSquareGradient from '../Button/ButtonSquareGradient';

export type TextInputWithUnitType = {
  placeholder: string;
  value: string;
  onChangeText(value: string): void;
  image: ReactElement<any, any>;
  backgroundColor?: string;
  isHide?: boolean;
  color?: string;
  propfontFamily?: string;
  propfontSize?: number;
  proplineHeight?: number;
  gradientColor?: string[];
  maxLength?: number;
  unit?: string;
};

const TextInputWithUnit: React.FC<TextInputWithUnitType> = ({
  placeholder,
  value,
  onChangeText,
  image,
  backgroundColor = colors.gray4,
  isHide = false,
  color = colors.black,
  propfontFamily = fontFamily.regular,
  propfontSize = fontSize.smallText,
  proplineHeight = lineHeight.smallText,
  unit = 'cm',
  gradientColor = colors.purpleLinear,
  maxLength = 100,
}) => {
  return (
    <View style={styles.unitContainer}>
      <View
        style={[
          styles.container,
          {
            backgroundColor,
            marginBottom: 0,
            flex: 1,
            marginRight: responsiveWidth(10),
          },
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
          maxLength={maxLength}
        />
      </View>
      <ButtonSquareGradient
        text={unit}
        propFontSize={fontSize.smallText}
        propLineHeight={lineHeight.smallText}
        propFontFamily={fontFamily.regular}
        buttonColor={gradientColor}
      />
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
    // width: '100%',
    padding: responsiveWidth(15),
    borderRadius: responsiveWidth(14),
    alignItems: 'center',
  },
  image1: {
    width: responsiveWidth(18),
    height: responsiveWidth(18),
    marginRight: responsiveWidth(10),
  },
  textInput: {
    flex: 1,
    marginLeft: responsiveWidth(10),
  },
});

export default TextInputWithUnit;
