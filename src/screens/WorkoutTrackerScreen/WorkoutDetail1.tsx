import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';

import { colors } from '../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { ArrowRight2Icon, CalendarIcon, LoveIcon, SwapIcon } from '../../assets/Images/svg';

import BaseContainer from '../../components/atoms/Container/BaseContainer';
import FlexRowContainer from '../../components/atoms/Container/FlexRowContainer';
import HeaderTitleBack from '../../components/atoms/Header/HeaderTitleBack';
import Margin from '../../components/atoms/Margin/Margin';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import ContentContainer from '../../components/atoms/Container/ContentContainer';
import ButtonLargeGradient from '../../components/atoms/Button/ButtonLargeGradient';
import ExerciseBox from '../../components/molecules/ExerciseBox/ExerciseBox';

import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import { workoutType } from '../../utils/functions/datadummies';

import { WorkoutStackType } from '../../utils/types/navigation';
import { images } from '../../assets/images';

type WorkoutDetail1NavigationType = NativeStackScreenProps<WorkoutStackType, 'WorkoutDetail1'>;

const { width } = Dimensions.get('screen');

const tools = [
  {
    name: 'Barbell',
    image: images.barbelImage,
  },
  {
    name: 'Skipping Rope',
    image: images.skippingRopeImage,
  },
  {
    name: 'Bottle 1 Liter',
    image: images.waterBottleImage,
  },
];

export default function WorkoutDetail1({ route, navigation }: WorkoutDetail1NavigationType) {
  const { data } = route.params;
  const { listExercise } = data;

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
                text={`${tools.length} Items`}
                fontFamily={fontFamily.medium}
                fontSize={fontSize.smallText}
                lineHeight={lineHeight.smallText}
                color={colors.gray2}
              />
            </FlexRowContainer>
            <Margin margin={15} />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {tools.map((tool, index) => {
              return (
                <View key={index.toString()}>
                  <View style={styles.wrapImageTools}>
                    <Image style={{ transform: [{ scale: 0.5 }] }} source={tool.image} />
                  </View>
                  <TypographyRegular
                    fontSize={fontSize.smallText}
                    lineHeight={lineHeight.smallText}
                    text={tool.name}
                  />
                </View>
              );
            })}
          </ScrollView>

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
            {listExercise.map((exercise, index) => {
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
  wrapImageTools: {
    width: responsiveWidth(130),
    height: responsiveWidth(130),
    borderRadius: responsiveWidth(12),
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray4,
  },
});
