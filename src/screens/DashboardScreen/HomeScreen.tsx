import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import { latestWorkout } from '../../utils/functions/datadummies';

import { MainStackNavigation } from '../../utils/types/navigation';

import { useAppSelector } from '../../config/redux/app/hooks';

import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import NotificationIcon from '../../assets/Images/svg/NotificationIcon';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { ArrowDown2Icon } from '../../assets/Images/svg';

import ButtonCheck from '../../components/atoms/Button/ButtonCheck';
import Margin from '../../components/atoms/Margin/Margin';
import TypographyGradient from '../../components/atoms/Typography/TypographyGradient';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import WaterInTake from '../../components/molecules/HomeComponent/WaterInTake';
import HistoryWorkoutCard from '../../components/molecules/CardProgram/HistoryWorkoutCard';
import BodyMassIndex from '../../components/molecules/HomeComponent/BodyMassIndex';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { useLoad } from '../../config/LoaderContext/LoaderContext';
import { getActivity } from '../api/activity';

type HomeNavigationType = NativeStackScreenProps<MainStackNavigation, 'BottomNavbarStackScreen'>;

export interface ActivitiesDocument {
  typeActivity: string;
  waterInMiliLiter: number;
  time: number;
  _id: string;
}

export default function HomeScreen({ navigation }: HomeNavigationType) {
  const [bmiCalc, setBmiCalc] = useState(0);
  const [waterInTake, setWaterIntake] = useState<ActivitiesDocument[]>([]);

  const { firstName, lastName, weight, height } = useAppSelector((state) => state.user);

  const { dispatch } = useLoad();

  const hitAPIActivity = async () => {
    try {
      dispatch({ type: 'loading' });

      const res = await getActivity();
      const { waterProgress } = res.result;
      setWaterIntake(waterProgress);

      dispatch({ type: 'loaded' });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'loaded' });
    }
  };

  useEffect(() => {
    setBmiCalc(weight / Math.pow(height / 100, 2));
    hitAPIActivity();
  }, []);

  const navigateToNotif = () => {
    navigation.navigate('HomeStackScreen', { screen: 'NotificationScreen' });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View>
            <TypographyRegular
              text="Welcome Back,"
              fontFamily={fontFamily.regular}
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              color={colors.gray2}
            />
            <TypographyRegular
              text={`${firstName} ${lastName}`}
              fontFamily={fontFamily.bold}
              fontSize={fontSize.h4}
              lineHeight={lineHeight.h4}
            />
          </View>
          <TouchableOpacity style={styles.notificationIcon} onPress={navigateToNotif}>
            <NotificationIcon />
          </TouchableOpacity>
        </View>

        <Margin margin={30} />
        <BodyMassIndex bmi={bmiCalc} />

        <Margin margin={30} />
        <View style={styles.boxContainer}>
          <TypographyRegular
            text="Today Target"
            fontFamily={fontFamily.semiBold}
            fontSize={fontSize.mediumText}
            lineHeight={lineHeight.mediumText}
          />
          <ButtonCheck
            text="Check"
            buttonColor={colors.blueLinear}
            borderRadius={responsiveHeight(24)}
            color={colors.white}
            onPress={() =>
              navigation.navigate('HomeStackScreen', { screen: 'ActivityTrackerScreen' })
            }
          />
        </View>

        <Margin margin={30} />
        <TypographyRegular
          text="Activity Status"
          fontFamily={fontFamily.semiBold}
          fontSize={fontSize.largeText}
          lineHeight={lineHeight.largeText}
        />
        <Margin margin={15} />
        <View>
          <Margin margin={16} />
          <View style={styles.headerContainer}>
            <View style={styles.waterIntakeContainer}>
              <WaterInTake data={waterInTake} />
            </View>
            <View>
              <View style={styles.squareContainer}>
                <TypographyRegular
                  text="Sleep"
                  fontFamily={fontFamily.medium}
                  fontSize={fontSize.smallText}
                  lineHeight={lineHeight.smallText}
                />
                <TypographyGradient color={colors.blueLinear}>
                  <TypographyRegular
                    text="8h 20m"
                    fontFamily={fontFamily.semiBold}
                    fontSize={fontSize.mediumText}
                    lineHeight={lineHeight.mediumText}
                  />
                </TypographyGradient>
                <Image
                  style={styles.sleepGraphImage}
                  source={images.sleepGraph}
                  resizeMode="contain"
                />
              </View>
              <Margin margin={15} />
              <View style={styles.squareContainer}>
                <TypographyRegular
                  text="Calories"
                  fontFamily={fontFamily.medium}
                  fontSize={fontSize.smallText}
                  lineHeight={lineHeight.smallText}
                />
                <TypographyGradient color={colors.blueLinear}>
                  <TypographyRegular
                    text="760 kCal"
                    fontFamily={fontFamily.semiBold}
                    fontSize={fontSize.mediumText}
                    lineHeight={lineHeight.mediumText}
                  />
                </TypographyGradient>
              </View>
            </View>
          </View>
        </View>
        <Margin margin={30} />
        <View style={styles.headerContainer}>
          <TypographyRegular
            text="Workout Progress"
            fontFamily={fontFamily.semiBold}
            fontSize={fontSize.largeText}
            lineHeight={lineHeight.largeText}
          />
          <ButtonCheck
            text="Check"
            buttonColor={colors.blueLinear}
            borderRadius={responsiveHeight(50)}
            color={colors.white}
            image={<ArrowDown2Icon />}
          />
        </View>
        <Margin margin={30} />
        <View style={styles.headerContainer}>
          <TypographyRegular
            text="Latest Workout"
            fontFamily={fontFamily.semiBold}
            fontSize={fontSize.largeText}
            lineHeight={lineHeight.largeText}
          />
          <TouchableOpacity>
            <TypographyRegular
              text="See More"
              fontFamily={fontFamily.medium}
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              color={colors.gray2}
            />
          </TouchableOpacity>
        </View>
        <Margin margin={15} />
        <View>
          {latestWorkout.map((workout, index) => {
            return (
              <View key={index}>
                <HistoryWorkoutCard
                  image={images.program2}
                  colorImage={colors.blue}
                  text={workout.type}
                  description={`${workout.caloriesBurn} Calories Burn | ${workout.time} minutes`}
                  backgroundColor={colors.white}
                  paddingHorizontal={responsiveWidth(15)}
                  paddingTop={responsiveHeight(15)}
                  paddingBottom={responsiveHeight(10)}
                  borderRadius={responsiveWidth(16)}
                  progress={workout.progress}
                />
                <Margin margin={15} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white2,
    paddingTop: responsiveHeight(40),
    paddingHorizontal: responsiveWidth(30),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationIcon: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderRadius: responsiveWidth(8),
    backgroundColor: colors.gray4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifImage: {
    width: responsiveWidth(18),
    height: responsiveWidth(18),
  },
  boxContainer: {
    width: responsiveWidth(315),
    height: responsiveHeight(57),
    borderRadius: responsiveWidth(16),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(20),
    backgroundColor: colors.blue,
  },
  heartRateContainer: {
    width: responsiveWidth(315),
    height: responsiveHeight(150),
    backgroundColor: colors.blue,
    borderRadius: responsiveWidth(20),
  },
  heartText: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.mediumText,
    lineHeight: lineHeight.mediumText,
  },
  waterIntakeContainer: {
    width: responsiveWidth(150),
    height: responsiveHeight(315),
    borderRadius: responsiveWidth(20),
    backgroundColor: colors.white,
  },
  squareContainer: {
    width: responsiveWidth(150),
    height: responsiveHeight(150),
    borderRadius: responsiveWidth(20),
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(20),
    paddingTop: responsiveWidth(20),
  },
  sleepGraphImage: {
    width: responsiveWidth(110),
    height: responsiveHeight(78),
  },
});
