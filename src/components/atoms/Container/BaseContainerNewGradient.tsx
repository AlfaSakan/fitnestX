import React from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../assets/colors';
import { responsiveHeight } from '../../../utils/functions/responsiveDimension';

interface BaseContainerType {
  children: React.ReactNode;
  backgroundColor?: (string | number)[];
}

const BaseContainerNewGradient: React.FC<BaseContainerType> = ({
  children,
  backgroundColor = colors.blueLinear,
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={backgroundColor}
      style={[styles.container]}
    >
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <ScrollView>
        <View style={styles.body}>{children}</View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingTop: responsiveHeight(Platform.OS === 'android' ? 10 : 15),
    // paddingBottom: responsiveHeight(60),
  },
});

export default BaseContainerNewGradient;
