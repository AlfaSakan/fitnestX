import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../../assets/Typography';
import { responsiveWidth } from '../../../utils/functions/responsiveDimension';

const { width } = Dimensions.get('window');

interface TypographyWithCheckBoxType {
  onValueChange(value: boolean): void;
  toggleValue: boolean;
  propFontSize?: number;
  propFontFamily?: string;
  propLineHeight?: number;
  color?: string;
  style?: {};
  text?: string;
  testID?: string;
}

const TypographyWithCheckBox: React.FC<TypographyWithCheckBoxType> = React.memo(
  function TypographyWithCheckBox({
    onValueChange,
    toggleValue = false,
    propFontSize = fontSize.largeText,
    propFontFamily = fontFamily.regular,
    propLineHeight = lineHeight.largeText,
    color = colors.gray2,
    style = {},
    text = `By continuing you accept our <u>Privacy Policy</u> and <u>Term of Use</u>`,
    testID,
  }) {
    const textStyle = {
      fontFamily: propFontFamily,
      fontSize: propFontSize,
      lineHeight: propLineHeight,
      color,
      marginLeft: responsiveWidth(10),
      ...style,
    };

    return (
      <View style={styles.container}>
        <CheckBox
          boxType="square"
          disabled={false}
          value={toggleValue}
          onValueChange={onValueChange}
          style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
          testID={testID}
        />
        <Text style={styles.textStyle}>
          By continuing you accept our{' '}
          <Text style={{ textDecorationLine: 'underline' }}>Privacy Policy</Text> and{' '}
          <Text style={{ textDecorationLine: 'underline' }}>Term of Use</Text>
        </Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  textStyle: {
    width: width * 0.7,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.caption,
    lineHeight: lineHeight.caption,
    color: colors.gray2,
    textAlign: 'left',
  },
});

export default TypographyWithCheckBox;
