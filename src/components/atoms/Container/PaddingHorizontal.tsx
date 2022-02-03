import React from 'react';
import { StyleSheet, View } from 'react-native';
import { responsiveWidth } from '../../../utils/functions/responsiveDimension';

interface PaddingHorizontalProps {
  paddingHorizontal?: number;
  children: React.ReactNode;
}

const PaddingHorizontal: React.FC<PaddingHorizontalProps> = ({
  children,
  paddingHorizontal = responsiveWidth(30),
}) => {
  return <View style={[styles.paddingContainer, { paddingHorizontal }]}>{children}</View>;
};

export default PaddingHorizontal;

const styles = StyleSheet.create({
  paddingContainer: {
    alignItems: 'center',
  },
});
