import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../assets/colors';
import { responsiveWidth } from '../../../utils/functions/responsiveDimension';

interface ContentContainerType {
  children: React.ReactNode;
  backgroundColor?: string;
  padding?: number;
}

const ContentContainer: React.FC<ContentContainerType> = ({
  children,
  backgroundColor = colors.blue,
  padding = responsiveWidth(20),
}) => {
  return <View style={[styles.body1Container, { backgroundColor, padding }]}>{children}</View>;
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
});

export default ContentContainer;
