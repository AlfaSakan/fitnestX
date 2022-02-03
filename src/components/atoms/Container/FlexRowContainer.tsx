import React, { ReactChild, ReactElement } from 'react';
import { FlexAlignType, StyleSheet, View } from 'react-native';
import { colors } from '../../../assets/colors';

interface FlexRowContainerType {
  children?: React.ReactNode;
  backgroundColor?: string;
  alignItems?: FlexAlignType;
}

const FlexRowContainer: React.FC<FlexRowContainerType> = ({
  children,
  backgroundColor,
  alignItems = 'center',
}) => {
  return <View style={[styles.body1Container, { backgroundColor, alignItems }]}>{children}</View>;
};

const styles = StyleSheet.create({
  body1Container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default FlexRowContainer;
