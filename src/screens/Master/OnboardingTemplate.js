import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import {fontFamily, fontSize, lineHeight} from '../../assets/Typography';
import ButtonCircle from '../../components/Button/ButtonCircle';
import TypographyRegular from '../../components/Typography/TypographyRegular';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsiveDimension';

const {width, height} = Dimensions.get('screen');

export default function OnboardingTemplate({image, textTitle, textBody, onPress}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageStyle} />
      <View style={styles.boxText}>
        <TypographyRegular
          text={textTitle}
          fontFamily={fontFamily.bold}
          fontSize={fontSize.h2}
          lineHeight={lineHeight.h2}
        />
        <TypographyRegular
          text={textBody}
          color={colors.gray1}
          fontFamily={fontFamily.regular}
          fontSize={fontSize.mediumText}
          lineHeight={lineHeight.mediumText}
        />
      </View>
      <ButtonCircle onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width,
    height: responsiveHeight(406),
  },
  boxText: {
    marginTop: responsiveHeight(64),
    paddingHorizontal: responsiveWidth(30),
  },
  cornerPosition: {
    position: 'absolute',
    bottom: responsiveHeight(40),
    right: responsiveWidth(30),
  },
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowStyle: {
    width: 18,
    height: 18,
  },
});
