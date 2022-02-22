import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import {
  fontFamily,
  fontSize,
  lineHeight,
  mediumTypography,
  titleTypography,
} from '../../assets/Typography';
import ButtonCheck from '../../components/atoms/Button/ButtonCheck';
import ContentContainer from '../../components/atoms/Container/ContentContainer';
import FlexRowContainer from '../../components/atoms/Container/FlexRowContainer';
import Margin from '../../components/atoms/Margin/Margin';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import BaseContainerWithHeader from '../../components/organisms/BaseContainerWithHeader';
import ScheduleCard from '../../components/organisms/Card/ScheduleCard';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import { SleepTrackerStackType } from '../../utils/types/navigation';

const todayScheduleData = [
  {
    name: 'Bedtime',
    date: new Date(2022, 1, 23, 22),
  },
  {
    name: 'Alarm',
    date: new Date(2022, 1, 23, 7),
  },
];

type Params = NativeStackScreenProps<SleepTrackerStackType, 'SleepTracker'>;

const SleepTracker = ({ navigation, route }: Params) => {
  const goBack = () => {
    navigation.goBack();
  };

  const onPressSleepTracker = () => {};

  return (
    <BaseContainerWithHeader onPressBack={goBack} title="Sleep Tracker">
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.banner}
          colors={colors.blueLinear}
        >
          <TypographyRegular
            text="Last Night Sleep"
            color={colors.white}
            fontFamily={fontFamily.medium}
            fontSize={fontSize.mediumText}
            lineHeight={lineHeight.mediumText}
          />
          <TypographyRegular
            text="8h 20m"
            color={colors.white}
            fontFamily={fontFamily.medium}
            fontSize={fontSize.mediumText}
            lineHeight={lineHeight.mediumText}
          />
        </LinearGradient>

        <Margin margin={30} />
        <ContentContainer>
          <FlexRowContainer>
            <TypographyRegular text="Daily Meal Schedule" {...mediumTypography} />
            <ButtonCheck
              buttonColor={colors.blueLinear}
              borderRadius={50}
              text="Check"
              color={colors.white}
              onPress={onPressSleepTracker}
            />
          </FlexRowContainer>
        </ContentContainer>

        <Margin margin={30} />
        <TypographyRegular {...titleTypography} text="Today Schedule" />
        <Margin margin={15} />
        {todayScheduleData.map((schedule, index) => {
          const scheduleIcon = schedule.name === 'Bedtime' ? images.bedIcon : images.alarmIcon;
          const displayDate = moment(schedule.date).format('hh:mma');

          const differenceTimes = schedule.date.getTime() - new Date().getTime();

          return (
            <ScheduleCard
              key={index}
              name={schedule.name}
              image={scheduleIcon}
              displayDate={displayDate}
              differenceHours={new Date(differenceTimes).getHours()}
              differenceMinutes={new Date(differenceTimes).getMinutes()}
            />
          );
        })}
      </View>
    </BaseContainerWithHeader>
  );
};

export default SleepTracker;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(30),
    backgroundColor: colors.white,
    flex: 1,
  },
  banner: {
    width: responsiveWidth(315),
    height: responsiveHeight(148),
    borderRadius: responsiveWidth(22),
    padding: responsiveWidth(20),
  },
});
