import React from 'react';
import {View} from 'react-native';
import {colors} from '../../assets/colors';

export default function DotComponent({
  marginRight,
  marginBottom,
  color = colors.black,
}) {
  return (
    <View
      style={{
        width: 4,
        height: 4,
        backgroundColor: color,
        borderRadius: 2,
        marginRight,
        marginBottom,
      }}
    />
  );
}
