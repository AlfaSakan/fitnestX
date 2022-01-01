import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { programsType } from '../../screens/SignupAndLogin/ChooseYourGoals';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';
import Margin from '../Margin';
import TypographyRegular from '../Typography/TypographyRegular';

const { width } = Dimensions.get('screen');

interface CardProgramType {
  item: programsType;
  index: number;
}

const CardProgram: React.FC<CardProgramType> = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        key={index}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors.blueLinear}
        style={styles.cardProgramGradient}
      >
        <View style={styles.cardProgram}>
          <Image source={item.image} style={styles.image} resizeMode="contain" />
          <Margin margin={19.77} />
          <TypographyRegular
            text={item.title}
            fontFamily={fontFamily.semiBold}
            fontSize={fontSize.mediumText}
            lineHeight={lineHeight.mediumText}
            color={colors.white}
          />
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: colors.white,
              width: responsiveWidth(50),
            }}
          />
          <Margin margin={20} />
          <TypographyRegular
            text={item.message}
            textAlign="center"
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            color={colors.white}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width,
  },
  cardProgramGradient: {
    width: responsiveWidth(275),
    height: responsiveHeight(478),
    borderRadius: responsiveWidth(22),
  },
  cardProgram: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(30),
    paddingTop: responsiveHeight(36),
  },
  image: {
    width: responsiveWidth(205.88),
    height: responsiveHeight(294.23),
  },
});

export default CardProgram;
