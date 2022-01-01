import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import NotificationIcon from '../../assets/Images/svg/NotificationIcon';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import ButtonCheck from '../../components/Button/ButtonCheck';
import Margin from '../../components/Margin';
import TypographyGradient from '../../components/Typography/TypographyGradient';
import TypographyRegular from '../../components/Typography/TypographyRegular';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';
import { ArrowDown2Icon } from '../../assets/Images/svg';
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackType, MainStackNavigation } from '../../types/navigation';

import { useAppSelector } from '../../app/hooks';
import { useNavigation } from '@react-navigation/native';
import WaterInTake from '../../components/HomeComponent/WaterInTake';

type HomeNavigationType = NativeStackScreenProps<HomeStackType, 'HomeScreen'>;

export default function HomeScreen({ navigation }: HomeNavigationType) {
  const { firstName, lastName } = useAppSelector((state) => state.user);

  const mainNavigation =
    useNavigation<NativeStackNavigationProp<MainStackNavigation, 'BottomNavbarStackScreen'>>();

  const navigateToNotif = () => {
    mainNavigation.navigate('NotificationScreen');
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
            onPress={() => navigation.navigate('ActivityTrackerScreen')}
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
          {/* <View style={styles.heartRateContainer}>
            <TypographyRegular
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              fontFamily={fontFamily.medium}
              text="Heart Rate"
            />
            <TypographyGradient color={colors.blueLinear}>
              <Text style={styles.heartText}>78 BPM</Text>
            </TypographyGradient>
          </View> */}
          <Margin margin={16} />
          <View style={styles.headerContainer}>
            <View style={styles.waterIntakeContainer}>
              <WaterInTake />
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
        <Margin margin={15} />
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
