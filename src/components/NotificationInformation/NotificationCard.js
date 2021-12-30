import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import {fontFamily, fontSize, lineHeight} from '../../assets/Typography';
import {responsiveWidth} from '../../utils/responsiveDimension';
import DotVerticalThree from '../Dots/DotsVerticalThree';
import TypographyRegular from '../Typography/TypographyRegular';

export default function NotificationCard({
  image,
  text,
  description,
  colorImage,
  onPress,
  onPressDot,
  backgroundColor,
  padding,
  borderRadius,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor, padding, borderRadius}]}>
      <View style={styles.flexDirection}>
        <View style={[styles.circleBackground, {backgroundColor: colorImage}]}>
          <Image style={styles.image} source={image} resizeMode="contain" />
        </View>
        <View>
          <TypographyRegular
            text={text}
            fontFamily={fontFamily.medium}
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
          />
          <TypographyRegular
            text={description}
            fontFamily={fontFamily.regular}
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            color={colors.gray1}
          />
        </View>
      </View>
      <TouchableOpacity onPress={onPressDot}>
        <DotVerticalThree />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circleBackground: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderRadius: responsiveWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  image: {
    width: 26,
    height: 26,
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
