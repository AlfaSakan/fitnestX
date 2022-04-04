import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dimensions, Image, ImageSourcePropType, ScrollView, StyleSheet, View } from 'react-native';

import { colors } from '../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { ArrowRight2Icon, CalendarIcon, LoveIcon, SwapIcon } from '../../assets/Images/svg';

import FlexRowContainer from '../../components/atoms/Container/FlexRowContainer';
import Margin from '../../components/atoms/Margin/Margin';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import ContentContainer from '../../components/atoms/Container/ContentContainer';
import ExerciseBox from '../../components/molecules/ExerciseBox/ExerciseBox';

import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import { ExerciseInterface, workoutType } from '../../utils/functions/datadummies';

import { WorkoutStackType } from '../../utils/types/navigation';
import { images } from '../../assets/images';
import BaseContainerGradient from '../../components/organisms/BaseContainerWithHeader/BaseContainerGradient';

type WorkoutDetail1NavigationType = NativeStackScreenProps<WorkoutStackType, 'WorkoutDetail1'>;

const { width } = Dimensions.get('screen');

const tools = [
  {
    name: 'Barbell',
    image: images.barbelImage,
  },
  {
    name: 'SZ-Bar',
    image: images.szBar,
  },
  {
    name: 'Dumbbell',
    image: images.barbelImage,
  },
  {
    name: 'Gym mat',
    image: images.gymMat,
  },
  {
    name: 'Swiss Ball',
    image: images.swissBall,
  },
  {
    name: 'Pull-up bar',
    image: images.pullUpBar,
  },
  {
    name: 'none (bodyweight exercise)',
    image: '',
  },
  {
    name: 'Bench',
    image: images.bench,
  },
  {
    image: images.inclineBench,
    name: 'Incline bench',
  },
  {
    name: 'Kettlebell',
    image: images.kettleBell,
  },
  {
    name: 'Skipping Rope',
    image: images.skippingRopeImage,
  },
];

export default function WorkoutDetail1({ route, navigation }: WorkoutDetail1NavigationType) {
  const { data, name } = route.params;

  const [equips, setEquips] = useState<{ name: string; image: ImageSourcePropType }[]>([]);

  useEffect(() => {
    const arrayNum: number[] = [];
    data.forEach((exercise) => {
      arrayNum.push(...exercise.equipment);
    });

    const equipNum: { [key: number]: number } = {};
    arrayNum.forEach((num) => {
      equipNum[num - 1] = num - 1;
    });

    Object.entries(equipNum).forEach(([_, value]) => {
      setEquips((prev) => [...prev, tools[value]]);
    });
  }, []);

  const navigateToDetailWorkout = (value: ExerciseInterface) => () => {
    navigation.navigate('WorkoutDetail2', { data: value });
  };

  const navigateToProgress = (value: ExerciseInterface[]) => () => {
    navigation.navigate('WorkoutProgress', { data: value });
  };

  return (
    <BaseContainerGradient
      isButtonBottom
      buttonText="Get Started"
      navigation={navigation}
      title=""
      onPressButton={navigateToProgress(data)}
    >
      <View style={{ height: 260 }} />
      <View style={styles.bodyContainer}>
        <FlexRowContainer>
          <View>
            <TypographyRegular
              text={name}
              fontFamily={fontFamily.bold}
              fontSize={fontSize.largeText}
              lineHeight={lineHeight.largeText}
            />
            <TypographyRegular
              // text={`${data.length} exercises | ${data.minutes}mins | 320 Calories Burn`}
              text={`${data.length} exercises | 320 Calories Burn`}
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
          {equips.map((equip, index) => {
            if (!equip.image) return;

            return (
              <View key={index.toString()}>
                <View style={styles.wrapImageTools}>
                  <Image
                    style={{
                      // transform: [{ scale: 0.5 }],
                      width: responsiveWidth(100),
                      height: responsiveWidth(100),
                    }}
                    source={equip.image ?? images.barbelImage}
                    resizeMode="contain"
                  />
                </View>
                <TypographyRegular
                  fontSize={fontSize.smallText}
                  lineHeight={lineHeight.smallText}
                  text={equip.name}
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
          {data.map((exercise, index) => {
            return (
              <View key={exercise.uuid}>
                <Margin margin={5} />
                <ExerciseBox
                  key={index}
                  item={exercise}
                  onPress={navigateToDetailWorkout(exercise)}
                />
                <Margin margin={5} />
              </View>
            );
          })}
        </View>
      </View>
    </BaseContainerGradient>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    paddingHorizontal: responsiveWidth(30),
    paddingBottom: responsiveHeight(90),
    paddingTop: responsiveHeight(40),
    flex: 1,
    borderTopRightRadius: responsiveWidth(40),
    borderTopLeftRadius: responsiveWidth(40),
    backgroundColor: colors.white,
    zIndex: 100,
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
