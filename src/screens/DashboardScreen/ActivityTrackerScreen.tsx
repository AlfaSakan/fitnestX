import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import ArrowDown2Icon from '../../assets/Images/svg/ArrowDown2Icon';
import PlusIcon from '../../assets/Images/svg/PlusIcon';
import { fontFamily, fontSize, lineHeight, mediumTypography } from '../../assets/Typography';

import ButtonCheck from '../../components/atoms/Button/ButtonCheck';
import Margin from '../../components/atoms/Margin/Margin';
import NotificationCard from '../../components/molecules/NotificationInformation/NotificationCard';
import TypographyGradient from '../../components/atoms/Typography/TypographyGradient';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import BaseContainerWithHeader from '../../components/organisms/BaseContainerWithHeader';
import PickerModal from '../../components/molecules/Picker/PickerModal';
import TextInputCustom from '../../components/atoms/TextInputCustom/TextInputCustom';
import FlexRowContainer from '../../components/atoms/Container/FlexRowContainer';
import TextInputClock from '../../components/atoms/TextInputCustom/TextInputClock';

import { HomeStackType } from '../../utils/types/navigation';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import { deleteActivity, getActivity, postActivity } from '../api/activity';
import { useLoad } from '../../config/LoaderContext/LoaderContext';

type ActivityTrackerNavigationType = NativeStackScreenProps<HomeStackType, 'ActivityTrackerScreen'>;

interface ActivitiesDocument {
  typeActivity: string;
  waterInMiliLiter?: number;
  time: number;
  meal?: string;
  _id: string;
}

export default function ActivityTrackerScreen({ navigation }: ActivityTrackerNavigationType) {
  const [isModal, setIsModal] = useState(false);
  const [number, setNumber] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [isMorning, setIsMorning] = useState(true);
  const [isWeekly, setIsWeekly] = useState(true);

  const { dispatch } = useLoad();

  const [activities, setActivities] = useState([{ day: 'Sun', progress: 0 }]);

  const [latestActivities, setLatestActivities] = useState([
    {
      _id: '',
      typeActivity: 'waterInTake',
      waterInMiliLiter: 300,
      time: 1646095141589,
    },
    {
      _id: '',
      typeActivity: 'mealPlanner',
      meal: 'Fitbar',
      time: 1646095141589,
    },
  ]);

  const propCardLatestActivity = {
    colorImage: colors.blue,
    backgroundColor: colors.white,
    padding: responsiveWidth(20),
    borderRadius: responsiveWidth(16),
  };

  const numberHandler = (value: string) => {
    if (isNaN(Number(value))) return;

    setNumber(value);
  };

  const hoursHandler = (value: string, isHours12: boolean) => {
    if (!value) {
      setHours('');
      return;
    }

    if (isNaN(Number(value))) return;

    if (Number(value) > 12) {
      setHours('12');
      return;
    }

    setHours(value);
  };

  const minutesHandler = (value: string) => {
    if (!value) {
      setMinutes('');
      return;
    }

    if (isNaN(Number(value))) return;

    if (Number(hours) === 12) {
      setMinutes('00');
      return;
    }

    if (Number(value) >= 60) {
      setMinutes('59');
      return;
    }

    setMinutes(value);
  };

  const onOptionLatestActivity = async (selectedValue: ActivitiesDocument) => {
    try {
      await deleteActivity(selectedValue._id);
      await hitAPIActivity();
    } catch (error) {
      console.log(error);
    }
  };

  const doneHandler = async () => {
    if (!number) return;

    const timeDrinkingWater = new Date();

    if (hours) {
      timeDrinkingWater.setHours(Number(hours) + (isMorning ? 0 : 12));
    }
    if (minutes) {
      timeDrinkingWater.setMinutes(Number(minutes));
    }
    if (timeDrinkingWater.getTime() > new Date().getTime()) {
      timeDrinkingWater.setDate(timeDrinkingWater.getDate() - 1);
    }

    setHours('');
    setMinutes('');
    setNumber('');
    setIsModal(false);
    await postActivity({
      time: timeDrinkingWater.getTime(),
      waterInMiliLiter: Number(number),
      typeActivity: 'waterInTake',
    });
    await hitAPIActivity();
  };

  const activityProgressWeekly = (datas: Array<ActivitiesDocument>) => {
    setActivities([
      { day: 'Sun', progress: 0 },
      { day: 'Mon', progress: 0 },
      { day: 'Tue', progress: 0 },
      { day: 'Wed', progress: 0 },
      { day: 'Thu', progress: 0 },
      { day: 'Fri', progress: 0 },
      { day: 'Sat', progress: 0 },
    ]);
    datas.forEach((data) => {
      if (data.typeActivity === 'waterInTake') {
        const day = new Date(data.time).getDay();
        setActivities((prev) => {
          const dayPick = prev[day];
          dayPick.progress = dayPick.progress + (data?.waterInMiliLiter ?? 0) / 8000;

          return prev;
        });
      }
    });
  };

  const activityProgressMonthly = (datas: Array<ActivitiesDocument>) => {
    setActivities([
      { day: 'Jan', progress: 0 },
      { day: 'Feb', progress: 0 },
      { day: 'Mar', progress: 0 },
      { day: 'Apr', progress: 0 },
      { day: 'May', progress: 0 },
      { day: 'Jun', progress: 0 },
      { day: 'Jul', progress: 0 },
      { day: 'Aug', progress: 0 },
      { day: 'Sep', progress: 0 },
      { day: 'Oct', progress: 0 },
      { day: 'Nov', progress: 0 },
      { day: 'Dec', progress: 0 },
    ]);
    datas.forEach((data) => {
      if (data.typeActivity === 'waterInTake') {
        const month = new Date(data.time).getMonth();
        setActivities((prev) => {
          const monthPick = prev[month];
          monthPick.progress = monthPick.progress + (data?.waterInMiliLiter ?? 0) / 8000;

          return prev;
        });
      }
    });
  };

  const hitAPIActivity = async () => {
    try {
      dispatch({ type: 'loading' });

      const res = await getActivity();
      const { waterProgress } = res.result;
      setLatestActivities(waterProgress);
      if (isWeekly) {
        activityProgressWeekly(waterProgress);
      } else {
        activityProgressMonthly(waterProgress);
      }

      dispatch({ type: 'loaded' });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'loaded' });
    }
  };

  useEffect(() => {
    hitAPIActivity();
  }, []);

  return (
    <BaseContainerWithHeader title="Activity Tracker" navigation={navigation}>
      <View style={{ paddingHorizontal: responsiveWidth(30) }}>
        <View style={styles.body1Container}>
          <View style={styles.displayFlex}>
            <TypographyRegular text="Today Target" />
            <TouchableOpacity onPress={() => setIsModal(true)}>
              <LinearGradient style={styles.buttonPlus} colors={colors.blueLinear}>
                <PlusIcon colorIcon={colors.white} width={30} height={30} />
              </LinearGradient>
            </TouchableOpacity>
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
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
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
        {latestActivities
          .sort((a, b) => b.time - a.time)
          .map((activity, index) => {
            const timeAgo = new Date().getTime() - activity.time;

            const minutesAgo = Math.round(timeAgo / 1000 / 60);
            const hoursAgo = Math.round(minutesAgo / 60);
            const daysAgo = Math.round(hoursAgo / 24);

            let description: string;

            if (daysAgo > 0) {
              description = `About ${daysAgo} days ago`;
            } else if (hoursAgo > 0) {
              description = `About ${hoursAgo} hours ago`;
            } else {
              description = `About ${minutesAgo} minutes ago`;
            }

            switch (activity.typeActivity) {
              case 'waterInTake':
                return (
                  <View key={index}>
                    <Margin margin={15} />
                    <NotificationCard
                      image={images.drinkImage}
                      text={`Drinking ${activity?.waterInMiliLiter}ml Water`}
                      description={description}
                      onPressDot={() => onOptionLatestActivity(activity)}
                      {...propCardLatestActivity}
                    />
                  </View>
                );
              case 'mealPlanner':
                return (
                  <View key={index}>
                    <Margin margin={15} />
                    <NotificationCard
                      image={images.eatSnack}
                      text="Eat Snack (Fitbar)"
                      description={description}
                      {...propCardLatestActivity}
                    />
                  </View>
                );
              default:
                return;
            }
          })}
      </View>
      <PickerModal visible={isModal} dismiss={setIsModal}>
        <TextInputCustom
          placeholder="Enter the number of milliliters"
          value={number}
          onChangeText={numberHandler}
        />
        <View style={{ alignItems: 'center' }}>
          <TextInputClock
            value1={hours}
            onChangeText1={hoursHandler}
            value2={minutes}
            onChangeText2={minutesHandler}
            onEndEditing1={(e) => {
              if (hours.length === 1) {
                setHours(`0${hours}`);
              }
            }}
            onEndEditing2={(e) => {
              if (minutes.length === 1) {
                setMinutes(`0${minutes}`);
              }
            }}
            toggleAmPm={setIsMorning}
            isMorning={isMorning}
          />
        </View>
        <Margin margin={15} />
        <FlexRowContainer>
          <ButtonCheck
            buttonColor={colors.blueLinear}
            borderRadius={10}
            width={120}
            color={colors.white}
            text="Cancel"
            onPress={() => setIsModal(false)}
            {...mediumTypography}
          />
          <ButtonCheck
            buttonColor={colors.blueLinear}
            borderRadius={10}
            width={120}
            color={colors.white}
            text="Done"
            onPress={doneHandler}
            {...mediumTypography}
          />
        </FlexRowContainer>
      </PickerModal>
    </BaseContainerWithHeader>
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

  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#00000040',
  },
  containerModal: {
    width: responsiveWidth(340),
    minHeight: responsiveHeight(200),
    maxHeight: responsiveHeight(400),
    zIndex: 3,
    borderRadius: responsiveWidth(10),
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
