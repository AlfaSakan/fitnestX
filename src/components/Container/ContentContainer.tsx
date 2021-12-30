import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../assets/colors';

type ContentContainerType = {
  children: React.ReactNode;
  backgroundColor?: string;
  padding?: number;
};

const ContentContainer: React.FC<ContentContainerType> = ({
  children,
  backgroundColor = colors.blue,
  padding = 20,
}) => {
  return <View style={[styles.body1Container, { backgroundColor, padding }]}>{children}</View>;
};

const styles = StyleSheet.create({
  body1Container: {
    borderRadius: 22,
  },
});

export default ContentContainer;
