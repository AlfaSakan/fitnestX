import React from 'react';
import { Text } from 'react-native';
import { colors } from '../../assets/colors';

type TypographyRegularType = {
  text?: string;
  fontFamily?: string;
  fontSize?: number;
  color?: string;
  lineHeight?: number;
  textAlign?: 'left' | 'auto' | 'right' | 'center' | 'justify' | undefined;
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through' | undefined;
  marginLeft?: number | string;
  marginRight?: number | string;
};

const TypographyRegular: React.FC<TypographyRegularType> = ({
  text = 'isi text',
  fontFamily = 'Poppins-Regular',
  fontSize = 18,
  color = colors.black,
  lineHeight = 27,
  textAlign = 'left',
  textDecorationLine,
  marginLeft,
  marginRight,
}) => {
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
      }}
    >
      {text}
    </Text>
  );
};

export default TypographyRegular;
