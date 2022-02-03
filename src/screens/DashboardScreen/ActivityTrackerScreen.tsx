import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import ArrowDown2Icon from '../../assets/Images/svg/ArrowDown2Icon';
import PlusIcon from '../../assets/Images/svg/PlusIcon';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import ButtonCheck from '../../components/atoms/Button/ButtonCheck';
import HeaderTitleBack from '../../components/atoms/Header/HeaderTitleBack';
import Margin from '../../components/atoms/Margin/Margin';
import NotificationCard from '../../components/molecules/NotificationInformation/NotificationCard';
import TypographyGradient from '../../components/atoms/Typography/TypographyGradient';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import { HomeStackType } from '../../utils/types/navigation';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';

const activities = [
  { day: 'Sun', progress: 0.2 },
  { day: 'Mon', progress: 0.5 },
  { day: 'Tue', progress: 0.3 },
  { day: 'Wed', progress: 0.9 },
  { day: 'Thu', progress: 0.6 },
  { day: 'Fri', progress: 0.6 },
  { day: 'Sat', progress: 0.4 },
];

type ActivityTrackerNavigationType = NativeStackScreenProps<HomeStackType, 'ActivityTrackerScreen'>;

export default function ActivityTrackerScreen({ navigation }: ActivityTrackerNavigationType) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderTitleBack title="Activity Tracker" onPressBack={() => navigation.goBack()} />
        <Margin margin={30} />
        <View style={{ paddingHorizontal: responsiveWidth(30) }}>
          <View style={styles.body1Container}>
            <View style={styles.displayFlex}>
              <TypographyRegular text="Today Target" />
              <LinearGradient style={styles.buttonPlus} colors={colors.blueLinear}>
                <PlusIcon colorIcon={colors.white} width={30} height={30} />
              </LinearGradient>
            </View>
            <Margin margin={15} />
            <View style={styles.displayFlex}>
              <View style={styles.displayFlex2}>
                <Image style={styles.glassImage} source={images.glassOfWater} />
                <View>
                  <TypographyGradient color={colors.blueLinear}>
                    <TypographyRegular
                      text="8L"
                      fontFamily={fontFamily.medium}
                      fontSize={fontSize.mediumText}
                      lineHeight={lineHeight.mediumText}
                    />
                  </TypographyGradient>
                  <TypographyRegular
                    text="Water Intake"
                    fontSize={fontSize.smallText}
                    lineHeight={lineHeight.smallText}
                    color={colors.gray1}
                  />
                </View>
              </View>
              <View style={styles.displayFlex2}>
                <Image style={styles.glassImage} source={images.bootsYellow} />
                <View>
                  <TypographyGradient color={colors.blueLinear}>
                    <TypographyRegular
                      text="2400"
                      fontFamily={fontFamily.medium}
                      fontSize={fontSize.mediumText}
                      lineHeight={lineHeight.mediumText}
                    />
                  </TypographyGradient>
                  <TypographyRegular
                    text="Foot Steps"
                    fontSize={fontSize.smallText}
                    lineHeight={lineHeight.smallText}
                    color={colors.gray1}
                  />
                </View>
              </View>
            </View>
          </View>
          <Margin margin={30} />
          <View style={styles.displayFlex}>
            <TypographyRegular text="Activity Progress" />
            <ButtonCheck
              buttonColor={colors.blueLinear}
              borderRadius={50}
              text="Weekly"
              color={colors.white}
              // image={images.arrowDownWhite}
              image={<ArrowDown2Icon colorIcon={colors.white} />}
            />
          </View>
          <Margin margin={15} />
          <View style={styles.activityGraph}>
            {activities.map((dayActivity, index) => {
              return (
                <View key={index} style={{ alignItems: 'center' }}>
                  <View style={styles.graphyContainer}>
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={index % 2 === 0 ? colors.blueLinear : colors.purpleLinear}
                      style={[styles.graphyActive, { width: '100%', flex: dayActivity.progress }]}
                    />
                  </View>
                  <Margin margin={7} />
                  <TypographyRegular
                    text={dayActivity.day}
                    fontSize={fontSize.smallText}
                    lineHeight={lineHeight.smallText}
                    color={colors.gray1}
                  />
                </View>
              );
            })}
          </View>
          <Margin margin={30} />
          <View style={styles.displayFlex}>
            <TypographyRegular
              fontFamily={fontFamily.semiBold}
              fontSize={fontSize.largeText}
              lineHeight={lineHeight.largeText}
              text="Latest Activity"
            />
            <TypographyRegular
              text="See more"
              color={colors.gray2}
              fontFamily={fontFamily.medium}
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
            />
          </View>
          <Margin margin={15} />
          <NotificationCard
            image={images.drinkImage}
            colorImage={colors.blue}
            text="Drinking 300ml Water"
            description="About 3 minutes ago"
            backgroundColor={colors.white}
            padding={responsiveWidth(20)}
            borderRadius={responsiveWidth(16)}
          />
          <Margin margin={15} />
          <NotificationCard
            image={images.eatSnack}
            colorImage={colors.blue}
            text="Eat Snack (Fitbar)"
            description="About 10 minutes ago"
            backgroundColor={colors.white}
            padding={responsiveWidth(20)}
            borderRadius={responsiveWidth(16)}
          />
          <Margin margin={15} />
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
  },
  displayFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  displayFlex2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    height: responsiveHeight(60),
    width: responsiveWidth(130),
    padding: 10,
    justifyContent: 'flex-start',
  },
  body1Container: {
    borderRadius: 22,
    padding: 20,
    backgroundColor: colors.blue,
  },
  buttonPlus: {
    // padding: 5,
    borderRadius: 8,
  },
  plusImage: {
    width: 14,
    height: 14,
  },
  glassImage: {
    width: responsiveWidth(25),
    height: responsiveHeight(34),
    marginRight: responsiveWidth(8),
  },
  activityGraph: {
    padding: responsiveWidth(20),
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: responsiveWidth(20),
  },
  graphyContainer: {
    height: responsiveHeight(135),
    width: responsiveWidth(22),
    borderRadius: responsiveWidth(20),
    backgroundColor: colors.gray4,
    justifyContent: 'flex-end',
  },
  graphyActive: {
    flex: 1,
    borderRadius: responsiveWidth(20),
  },
});
