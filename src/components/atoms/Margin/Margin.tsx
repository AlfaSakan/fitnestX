import React from 'react';
import { View } from 'react-native';
import { responsiveHeight } from '../../../utils/functions/responsiveDimension';

export default function Margin({ margin }: {margin: number}) {
  return <View style={{ marginBottom: responsiveHeight(margin) }} />;
}
