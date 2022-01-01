import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../assets/colors';
import { responsiveHeight } from '../../utils/responsiveDimension';

interface BaseContainerType {
  children: React.ReactNode;
  backgroundColor?: string;
}

const BaseContainer: React.FC<BaseContainerType> = ({
  children,
  backgroundColor = colors.white,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.body}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginTop: responsiveHeight(40),
  },
});

export default BaseContainer;
