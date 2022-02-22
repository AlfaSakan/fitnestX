import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../assets/colors';
import { responsiveWidth } from '../../../utils/functions/responsiveDimension';

interface ContentContainerType {
  children: React.ReactNode;
  backgroundColor?: string;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  isShadow?: boolean;
}

const ContentContainer: React.FC<ContentContainerType> = ({
  children,
  backgroundColor = colors.blue,
  padding = responsiveWidth(20),
  paddingHorizontal = padding,
  paddingVertical = padding,
  isShadow = true,
}) => {
  return (
    <View
      style={[
        isShadow ? styles.body1Container : styles.bodyContainer,
        { backgroundColor, padding, paddingHorizontal, paddingVertical },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  body1Container: {
    borderRadius: 22,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  bodyContainer: {
    borderRadius: 22,
  },
});

export default ContentContainer;
