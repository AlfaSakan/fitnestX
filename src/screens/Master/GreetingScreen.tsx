import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import ButtonLarge from '../../components/Button/ButtonLarge';
import ButtonLargeGradient from '../../components/Button/ButtonLargeGradient';
import Margin from '../../components/Margin';
import TypographyRegular from '../../components/Typography/TypographyRegular';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';

export type GreetingScreenType = {
  image?: ImageSourcePropType;
  title?: string;
  description?: string;
  buttonText?: string;
  onPressFooter?(): void;
  description2?: string;
};

const GreetingScreen: React.FC<GreetingScreenType> = ({
  image = images.coupleImage,
  title = 'Welcome, Stefani',
  description = "You are all set now, let's reach your goals together with us",
  buttonText = 'Go To Home',
  onPressFooter = () => {},
  description2,
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Margin margin={44} />
      <View style={styles.descBox}>
        <TypographyRegular
          text={title}
          fontFamily={fontFamily.bold}
          textAlign="center"
          fontSize={fontSize.h4}
          lineHeight={lineHeight.h4}
        />
        <Margin margin={15} />
        <TypographyRegular
          text={description}
          textAlign="center"
          fontSize={fontSize.smallText}
          lineHeight={lineHeight.smallText}
          color={colors.gray1}
        />
        {description2 && (
          <TypographyRegular
            text={description2}
            textAlign="center"
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            color={colors.gray1}
          />
        )}
      </View>
      <View style={styles.buttonPosition}>
        <ButtonLargeGradient
          buttonColor={colors.blueLinear}
          color={colors.white}
          text={buttonText}
          onPress={onPressFooter}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: responsiveHeight(102),
    alignItems: 'center',
  },
  image: {
    width: 277.56,
    height: 304,
  },
  descBox: {
    // width: responsiveWidth(214),
    paddingHorizontal: responsiveWidth(30),
    alignItems: 'center',
  },
  buttonPosition: {
    position: 'absolute',
    bottom: responsiveHeight(40),
  },
});

export default GreetingScreen;
