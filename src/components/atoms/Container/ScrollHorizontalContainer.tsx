import React, { memo } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { responsiveWidth } from '../../../utils/functions/responsiveDimension';

const { width } = Dimensions.get('window');

const ScrollHorizontalContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={{ width, right: responsiveWidth(30) }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

export default memo(ScrollHorizontalContainer);
