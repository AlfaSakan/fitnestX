import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import { PlusIcon } from '../../assets/Images/svg';
import { mediumTypography, smallTypography, titleTypography } from '../../assets/Typography';
import ButtonCheck from '../../components/atoms/Button/ButtonCheck';
import ContentContainer from '../../components/atoms/Container/ContentContainer';
import FlexRowContainer from '../../components/atoms/Container/FlexRowContainer';
import Margin from '../../components/atoms/Margin/Margin';
import ProgressHorizontal from '../../components/atoms/ProgressBar/ProgressHorizontal';
import TypographyGradient from '../../components/atoms/Typography/TypographyGradient';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import BaseContainerWithHeader from '../../components/organisms/BaseContainerWithHeader';
import Calendar from '../../components/organisms/Calendar';
import ScheduleCard from '../../components/organisms/Card/ScheduleCard';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import { SleepTrackerStackType } from '../../utils/types/navigation';
import { todayScheduleData } from './SleepTracker';

type Params = NativeStackScreenProps<SleepTrackerStackType, 'SleepSchedule'>;

const SleepSchedule = ({ navigation }: Params) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <BaseContainerWithHeader
      onPressBack={goBack}
      title="Sleep Schedule"
      isButtonRounded
      icon={
        <PlusIcon
          width={responsiveWidth(40)}
          height={responsiveHeight(40)}
          colorIcon={colors.white}
        />
      }
    >
      <View style={styles.container}>
        <ContentContainer isShadow={false}>
          <FlexRowContainer>
            <View>
              <TypographyRegular text="Ideal Hours for Sleep" {...smallTypography} />
              <TypographyGradient color={colors.blueLinear}>
                <View style={styles.displayFlex}>
                  <TypographyRegular text="8" {...mediumTypography} />
                  <TypographyRegular text="Hours " {...smallTypography} />
                  <TypographyRegular text="30" {...mediumTypography} />
                  <TypographyRegular text="Minutes" {...smallTypography} />
                </View>
              </TypographyGradient>
              <Margin margin={10} />
              <ButtonCheck
                buttonColor={colors.blueLinear}
                borderRadius={50}
                text="Learn More"
                color={colors.white}
                // onPress={onPressSleepTracker}
              />
            </View>
            <Image source={images.starSleep} resizeMode="contain" style={styles.starImage} />
          </FlexRowContainer>
        </ContentContainer>

        <Margin margin={30} />
        <TypographyRegular {...titleTypography} text="Your Schedule" />
        <Margin margin={15} />
        <Calendar selectedDate={selectedDate} onPress={setSelectedDate} isTitle={false} />

        <Margin margin={30} />
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

        <Margin margin={15} />
        <ContentContainer backgroundColor={colors.pink}>
          <View style={styles.displayFlex}>
            <TypographyRegular text="You will get " {...smallTypography} />
            <TypographyRegular text="8" {...mediumTypography} />
            <TypographyRegular text="hours " {...smallTypography} />
            <TypographyRegular text="22" {...mediumTypography} />
            <TypographyRegular text="minutes" {...smallTypography} />
          </View>
          <TypographyRegular text="for tonight" {...smallTypography} />
          <ProgressHorizontal colorsParam={colors.purpleLinear} progress={0.75} />
        </ContentContainer>
      </View>
    </BaseContainerWithHeader>
  );
};

export default SleepSchedule;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(30),
    backgroundColor: colors.white,
    flex: 1,
  },
  starImage: {
    width: responsiveWidth(118),
    height: responsiveHeight(100),
  },
  displayFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
