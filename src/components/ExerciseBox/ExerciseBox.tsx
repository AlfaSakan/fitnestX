import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { colors } from '../../assets/colors';
import { ArrowRightCircleIcon } from '../../assets/Images/svg';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { workoutType } from '../../screens/WorkoutTrackerScreen/WorkoutDetail1';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';
import FlexRowContainer from '../Container/FlexRowContainer';
import Margin from '../Margin';
import TypographyRegular from '../Typography/TypographyRegular';

interface ExerciseBoxType {
  item: workoutType;
  onPress: () => void;
  index: number;
}

const { width } = Dimensions.get('screen');

const ExerciseBox: React.FC<ExerciseBoxType> = ({ item, onPress, index }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FlexRowContainer>
        <View style={styles.displayFlex}>
          <Image style={styles.imageExerciseBox} source={item.image} />
          <View style={styles.marginLeft}>
            <TypographyRegular
              text={item.name}
              fontFamily={fontFamily.medium}
              fontSize={fontSize.mediumText}
              lineHeight={lineHeight.mediumText}
            />
            <TypographyRegular
              text={item.repetition ? `${item.repetition}x` : item.time}
              fontFamily={fontFamily.medium}
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              color={colors.gray2}
            />
          </View>
        </View>
        <ArrowRightCircleIcon colorIcon={colors.gray2} />
      </FlexRowContainer>
      <Margin margin={15} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    paddingHorizontal: responsiveWidth(30),
    paddingBottom: responsiveHeight(90),
  },
  loveBox: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  displayFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageExerciseBox: {
    width: responsiveWidth(60),
    height: responsiveWidth(60),
  },
  marginLeft: {
    marginLeft: responsiveWidth(10),
  },
  center: {
    position: 'absolute',
    width,
    bottom: responsiveHeight(40),
    alignItems: 'center',
  },
});

export default ExerciseBox;
