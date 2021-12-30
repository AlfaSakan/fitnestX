import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../../assets/colors';
import ArrowRight2Icon from '../../assets/Images/svg/ArrowRight2Icon';
import LoveIcon from '../../assets/Images/svg/LoveIcon';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import BaseContainer from '../../components/Container/BaseContainer';
import FlexRowContainer from '../../components/Container/FlexRowContainer';
import HeaderTitleBack from '../../components/Header/HeaderTitleBack';
import Margin from '../../components/Margin';
import TypographyRegular from '../../components/Typography/TypographyRegular';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';
import CalendarIcon from '../../assets/Images/svg/CalendarIcon';
import ContentContainer from '../../components/Container/ContentContainer';
import { ArrowRightCircleIcon, SwapIcon } from '../../assets/Images/svg';
import { images } from '../../assets/images';
import ButtonLarge from '../../components/Button/ButtonLarge';
import ButtonLargeGradient from '../../components/Button/ButtonLargeGradient';
import ExerciseBox from '../../components/ExerciseBox/ExerciseBox';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { WorkoutStackType } from '../../types/navigation';

type dataType = {
  workout: workoutType[];
}[];

export type workoutType = {
  name: string;
  time: string;
  repetition: string;
  image: ImageSourcePropType;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  calories: string;
};

const dataExercises: dataType = [
  {
    workout: [
      {
        name: 'Warm Up',
        time: '5 minutes',
        repetition: '',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
      {
        name: 'Jumping Jack',
        time: '',
        repetition: '12',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
      {
        name: 'Skipping',
        time: '',
        repetition: '15',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
    ],
  },
  {
    workout: [
      {
        name: 'Warm Up',
        time: '5 minutes',
        repetition: '',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
      {
        name: 'Jumping Jack',
        time: '',
        repetition: '12',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
      {
        name: 'Skipping',
        time: '',
        repetition: '15',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
    ],
  },
  {
    workout: [
      {
        name: 'Warm Up',
        time: '5 minutes',
        repetition: '',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
      {
        name: 'Jumping Jack',
        time: '',
        repetition: '12',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
      {
        name: 'Skipping',
        time: '',
        repetition: '15',
        image: images.vectorExercises,
        difficulty: 'easy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat. Mauris sed libero a nibh mollis sollicitudin. Phasellus at sem sed justo ultricies dignissim. Vivamus at augue ultricies quam efficitur tristique in id est. Suspendisse viverra, turpis placerat suscipit mattis, purus ex mattis metus, ut finibus arcu eros ut nunc. Suspendisse potenti.',
        calories: '390',
      },
    ],
  },
];

type WorkoutDetail1NavigationType = NativeStackScreenProps<WorkoutStackType, 'WorkoutDetail1'>;
type WorkoutDetail1RouteType = RouteProp<WorkoutStackType, 'WorkoutDetail1'>;

const { width } = Dimensions.get('screen');

export default function WorkoutDetail1() {
  const {
    params: { data },
  } = useRoute<WorkoutDetail1RouteType>();
  const { navigation } = useNavigation<WorkoutDetail1NavigationType>();

  const navigateToDetailWorkout = (value: workoutType) => {
    navigation.navigate('WorkoutDetail2', { data: value });
  };

  return (
    <BaseContainer backgroundColor={colors.white2}>
      <ScrollView>
        <HeaderTitleBack title="" onPressBack={() => navigation.goBack()} />
        <View style={styles.bodyContainer}>
          <FlexRowContainer>
            <View>
              <TypographyRegular
                text={data.name}
                fontFamily={fontFamily.bold}
                fontSize={fontSize.largeText}
                lineHeight={lineHeight.largeText}
              />
              <TypographyRegular
                text={`${data.exercises} exercises | ${data.minutes}mins | 320 Calories Burn`}
                fontSize={fontSize.smallText}
                lineHeight={lineHeight.smallText}
                color={colors.gray1}
              />
            </View>
            <View style={styles.loveBox}>
              <LoveIcon />
            </View>
          </FlexRowContainer>
          <Margin margin={20} />
          <ContentContainer>
            <FlexRowContainer>
              <View style={styles.displayFlex}>
                <CalendarIcon width={20} height={20} />
                <TypographyRegular
                  text="Schedule Workout"
                  fontSize={fontSize.smallText}
                  lineHeight={lineHeight.smallText}
                  color={colors.gray1}
                  marginLeft={responsiveWidth(10)}
                />
              </View>
              <View style={styles.displayFlex}>
                <TypographyRegular
                  text="5/27 09:00 AM"
                  fontSize={fontSize.caption}
                  lineHeight={lineHeight.caption}
                  color={colors.gray1}
                  marginRight={responsiveWidth(10)}
                />
                <ArrowRight2Icon width={18} height={18} />
              </View>
            </FlexRowContainer>
          </ContentContainer>
          <Margin margin={15} />
          <ContentContainer backgroundColor={colors.pink}>
            <FlexRowContainer>
              <View style={styles.displayFlex}>
                <SwapIcon width={20} height={20} />
                <TypographyRegular
                  text="Difficulity"
                  fontSize={fontSize.smallText}
                  lineHeight={lineHeight.smallText}
                  color={colors.gray1}
                  marginLeft={responsiveWidth(10)}
                />
              </View>
              <View style={styles.displayFlex}>
                <TypographyRegular
                  text="Beginner"
                  fontSize={fontSize.caption}
                  lineHeight={lineHeight.caption}
                  color={colors.gray1}
                  marginRight={responsiveWidth(10)}
                />
                <ArrowRight2Icon width={18} height={18} />
              </View>
            </FlexRowContainer>
          </ContentContainer>
          <Margin margin={30} />
          <View>
            <FlexRowContainer>
              <TypographyRegular
                text="You'll Need"
                fontFamily={fontFamily.bold}
                fontSize={fontSize.largeText}
                lineHeight={lineHeight.largeText}
              />
              <TypographyRegular
                text="5 Items"
                fontFamily={fontFamily.medium}
                fontSize={fontSize.smallText}
                lineHeight={lineHeight.smallText}
                color={colors.gray2}
              />
            </FlexRowContainer>
            <Margin margin={15} />
          </View>
          <Margin margin={30} />
          <View>
            <FlexRowContainer>
              <TypographyRegular
                text="Excercises"
                fontFamily={fontFamily.bold}
                fontSize={fontSize.largeText}
                lineHeight={lineHeight.largeText}
              />
              <TypographyRegular
                text="3 Sets"
                fontFamily={fontFamily.medium}
                fontSize={fontSize.smallText}
                lineHeight={lineHeight.smallText}
                color={colors.gray2}
              />
            </FlexRowContainer>
            <Margin margin={20} />
            {dataExercises.map((exercise, index) => {
              if (!exercise?.workout) return;
              if (exercise.workout.length === 0) return;

              return (
                <View key={index}>
                  <TypographyRegular
                    text={`Set ${index + 1}`}
                    fontFamily={fontFamily.medium}
                    fontSize={fontSize.smallText}
                    lineHeight={lineHeight.smallText}
                  />
                  <Margin margin={15} />
                  {exercise.workout.map((item, index) => {
                    return (
                      <ExerciseBox
                        key={index}
                        item={item}
                        index={index}
                        onPress={() => navigateToDetailWorkout(item)}
                      />
                    );
                  })}
                  <Margin margin={5} />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.center}>
        <ButtonLargeGradient
          text="Get Started"
          // onPress={navigateNextScreen}
          // position="absolute"
          // bottom={responsiveHeight(40)}
          onPress={() => {}}
          color={colors.white}
          buttonColor={colors.blueLinear}
        />
      </View>
    </BaseContainer>
  );
}

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
