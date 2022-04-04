import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { colors } from '../../../assets/colors';
import { images } from '../../../assets/images';
import { ArrowRightCircleIcon } from '../../../assets/Images/svg';
import { fontFamily, fontSize, lineHeight } from '../../../assets/Typography';
import { getImageApi } from '../../../screens/api/exercisePublic';
import { ExerciseInterface, ImageInterface } from '../../../utils/functions/datadummies';
import { responsiveHeight, responsiveWidth } from '../../../utils/functions/responsiveDimension';
import FlexRowContainer from '../../atoms/Container/FlexRowContainer';
import Margin from '../../atoms/Margin/Margin';
import TypographyRegular from '../../atoms/Typography/TypographyRegular';

interface ExerciseBoxType {
  item: ExerciseInterface;
  onPress: () => void;
}

const { width } = Dimensions.get('screen');

const ExerciseBox: React.FC<ExerciseBoxType> = ({ item, onPress }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const results = (await getImageApi(item.exercise_base)) as ImageInterface[];

        if (results.length === 0) return;
        setImage(results[0].image);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <TouchableOpacity onPress={onPress}>
      <FlexRowContainer>
        <View style={styles.displayFlex}>
          <Image
            style={styles.imageExerciseBox}
            source={image ? { uri: image } : images.vectorExercises}
            resizeMode="contain"
          />
          <View style={styles.marginLeft}>
            <TypographyRegular
              text={item.name}
              fontFamily={fontFamily.medium}
              fontSize={fontSize.mediumText}
              lineHeight={lineHeight.mediumText}
            />
            <TypographyRegular
              // text={item.repetition ? `${item.repetition}x` : item.time}
              text="10"
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
