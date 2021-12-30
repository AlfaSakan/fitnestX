import React from 'react';
import {Text} from 'react-native';
import {colors} from '../../assets/colors';

export default function TypographyRegular({
  text = 'isi text',
  fontFamily = 'Poppins-Regular',
  fontSize = 18,
  color = colors.black,
  lineHeight = 27,
  textAlign = 'left',
  textDecorationLine,
  marginLeft,
  marginRight,
}) {
  return (
    <Text
      style={{
        fontFamily,
        fontSize,
        color,
        lineHeight,
        textAlign,
        textDecorationLine,
        marginLeft,
        marginRight,
      }}>
      {text}
    </Text>
  );
}
