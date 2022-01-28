import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../assets/colors';
import { ArrowRight2GradientIcon } from '../../../assets/Images/svg';
import { fontFamily, fontSize, lineHeight } from '../../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../../utils/functions/responsiveDimension';
import DotVerticalThree from '../../atoms/Dots/DotsVerticalThree';
import TypographyRegular from '../../atoms/Typography/TypographyRegular';

interface HistoryWorkoutCardProps {
  image: ImageSourcePropType;
  text: string;
  description?: string;
  colorImage?: string;
  onPress?(): void;
  onPressDot?(): void;
  backgroundColor?: string;
  paddingHorizontal?: number;
  paddingTop?: number;
  paddingBottom?: number;
  borderRadius?: number;
  colorsParam?: string[];
  progress?: number;
}

const HistoryWorkoutCard: React.FC<HistoryWorkoutCardProps> = ({
  image,
  text,
  description,
  colorImage,
  onPress,
  onPressDot,
  backgroundColor,
  paddingTop,
  paddingBottom,
  paddingHorizontal,
  borderRadius,
  colorsParam = colors.blueLinear,
  progress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor, paddingHorizontal, paddingTop, paddingBottom, borderRadius },
      ]}
    >
      <View style={styles.flexDirection}>
        <View style={[styles.circleBackground, { backgroundColor: colorImage }]}>
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
            fontSize={fontSize.caption}
            lineHeight={lineHeight.caption}
            color={colors.gray1}
          />
          <View style={styles.parameter}>
            <LinearGradient colors={colorsParam} style={{ flex: progress }} />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onPressDot}>
        {/* <DotVerticalThree /> */}
        <LinearGradient colors={colors.purpleLinear} style={styles.borderWorkoutBtn}>
          <View style={styles.workoutBtn}>
            <ArrowRight2GradientIcon />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default HistoryWorkoutCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circleBackground: {
    width: responsiveWidth(50),
    height: responsiveWidth(50),
    borderRadius: responsiveWidth(25),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  image: {
    width: 38,
    height: 38,
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  parameter: {
    marginTop: responsiveHeight(9),
    height: responsiveHeight(10),
    width: responsiveWidth(191),
    borderRadius: responsiveHeight(10),
    backgroundColor: colors.gray4,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  borderWorkoutBtn: {
    width: responsiveWidth(24),
    height: responsiveWidth(24),
    borderRadius: responsiveWidth(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  workoutBtn: {
    width: responsiveWidth(22),
    height: responsiveWidth(22),
    borderRadius: responsiveWidth(22),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
