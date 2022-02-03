import React from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { colors } from '../../../assets/colors';
import { responsiveHeight } from '../../../utils/functions/responsiveDimension';

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
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <ScrollView>
        <View style={styles.body}>{children}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingTop: responsiveHeight(Platform.OS === 'android' ? 10 : 40),
    paddingBottom: responsiveHeight(40),
  },
});

export default BaseContainer;
