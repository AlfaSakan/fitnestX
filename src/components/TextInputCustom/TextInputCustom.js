import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import HideIcon from '../../assets/Images/svg/HideIcon';
import ShowIcon from '../../assets/Images/svg/ShowIcon';
import {fontFamily, fontSize, lineHeight} from '../../assets/Typography';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsiveDimension';
import ButtonSquare from '../Button/ButtonSquare';

export default function TextInputCustom({
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
  isUnit = false,
  gradientColor = colors.purpleLinear,
  imageRight,
  keyboardType,
  maxLength = 100,
}) {
  if (isUnit) {
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
          ]}>
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
        <ButtonSquare
          isGradient={true}
          text={isUnit}
          fontSize={fontSize.smallText}
          lineHeight={lineHeight.smallText}
          fontFamily={fontFamily.regular}
          buttonColor={gradientColor}
        />
      </View>
    );
  }
  return (
    <View style={[styles.container, {backgroundColor}]}>
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
      {isPassword && (
        <TouchableOpacity onPress={onPressEye}>
          {isHide ? <HideIcon /> : <ShowIcon />}
        </TouchableOpacity>
      )}
    </View>
  );
}

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
