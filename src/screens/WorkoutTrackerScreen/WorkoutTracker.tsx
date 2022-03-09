import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, StyleSheet, Switch, View } from 'react-native';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import AbWorkoutImage from '../../assets/Images/svg/AbWorkoutImage';
import FullbodyWorkoutImage from '../../assets/Images/svg/FullbodyWorkoutImage';
import UpperbodyWorkoutImage from '../../assets/Images/svg/UpperbodyWorkoutImage';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import ButtonCheck from '../../components/atoms/Button/ButtonCheck';
import ButtonRegular from '../../components/atoms/Button/ButtonRegular';
import ContentContainer from '../../components/atoms/Container/ContentContainer';
import FlexRowContainer from '../../components/atoms/Container/FlexRowContainer';
import Margin from '../../components/atoms/Margin/Margin';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import { MainStackNavigation } from '../../utils/types/navigation';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';

import { listWorkout, upcomingData, workoutTrackerType } from '../../utils/functions/datadummies';
import BaseContainerWithHeader from '../../components/organisms/BaseContainerWithHeader';

type WorkoutTrackerNavigationType = NativeStackScreenProps<
  MainStackNavigation,
  'BottomNavbarStackScreen'
>;

export default function WorkoutTracker({ navigation, route }: WorkoutTrackerNavigationType) {
  const [isActive, setIsActive] = useState<object>({
    'Fullbody Workout': false,
    'Upperbody Workout': false,
    'AB Workout': false,
  });

  const toggleSwitch = (value: boolean, name: string) => {
    setIsActive((prev) => ({ ...prev, [name]: value }));
  };

  const navigateDetailScreen = (data: workoutTrackerType) => {
    navigation.navigate('WorkoutTrackerStackScreen', {
      screen: 'WorkoutDetail1',
      params: { data },
    });
  };

  return (
    <BaseContainerWithHeader navigation={navigation} title="Workout Tracker">
      <View style={styles.body}>
        <ContentContainer>
          <FlexRowContainer>
            <TypographyRegular
              text="Daily Workout Schedule"
              fontFamily={fontFamily.medium}
              fontSize={fontSize.mediumText}
              lineHeight={lineHeight.mediumText}
            />
            <ButtonCheck
              text="Check"
              buttonColor={colors.blueLinear}
              borderRadius={responsiveHeight(24)}
              color={colors.white}
              onPress={() => {}}
              width={80}
            />
          </FlexRowContainer>
        </ContentContainer>
        <Margin margin={30} />
        <View>
          <FlexRowContainer>
            <TypographyRegular
              text="Upcoming Workout"
              fontFamily={fontFamily.semiBold}
              fontSize={fontSize.largeText}
              lineHeight={lineHeight.largeText}
            />
            <TypographyRegular
              text="See more"
              fontFamily={fontFamily.medium}
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              color={colors.gray2}
            />
          </FlexRowContainer>
          {upcomingData.map((workout, index) => {
            const [valueSwitch, setValueSwitch] = useState(false);
            return (
              <View key={index}>
                <Margin margin={30} />
                <ContentContainer backgroundColor={colors.white2} padding={15}>
                  <FlexRowContainer>
                    <View style={styles.displayFlex}>
                      <View style={styles.containerImage}>
                        <Image
                          style={styles.fbWorkout}
                          source={images.program2}
                          resizeMode="contain"
                        />
                      </View>
                      <View>
                        <TypographyRegular
                          text={workout.name}
                          fontFamily={fontFamily.medium}
                          fontSize={fontSize.smallText}
                          lineHeight={lineHeight.smallText}
                        />
                        <TypographyRegular
                          color={colors.gray2}
                          fontSize={fontSize.smallText}
                          lineHeight={lineHeight.smallText}
                          text="Today, 03:00pm"
                        />
                      </View>
                    </View>
                    <Switch
                      trackColor={{
                        false: '#767577',
                        true: colors.purpleLinear[0],
                      }}
                      // thumbColor={workout.isActive ? '#f5dd4b' : '#f4f3f4'}
                      // ios_backgroundColor="#3e3e3e"
                      onValueChange={setValueSwitch}
                      value={valueSwitch}
                    />
                  </FlexRowContainer>
                </ContentContainer>
              </View>
            );
          })}
        </View>
        <Margin margin={30} />
        <View>
          <TypographyRegular
            text="What Do You Want to Train"
            fontFamily={fontFamily.semiBold}
            fontSize={fontSize.largeText}
            lineHeight={lineHeight.largeText}
          />
          {listWorkout.map((item, index) => {
            let imageWorkout;

            switch (item.name) {
              case 'Fullbody Workout':
                imageWorkout = <FullbodyWorkoutImage />;
                break;
              case 'Upperbody Workout':
                imageWorkout = <UpperbodyWorkoutImage />;
                break;
              case 'AB Workout':
                imageWorkout = <AbWorkoutImage />;
                break;
              default:
                imageWorkout = <FullbodyWorkoutImage />;
                break;
            }

            return (
              <View key={index}>
                <Margin margin={30} />
                <ContentContainer>
                  <FlexRowContainer>
                    <View>
                      <TypographyRegular
                        text={item.name}
                        fontFamily={fontFamily.medium}
                        fontSize={fontSize.mediumText}
                        lineHeight={lineHeight.mediumText}
                      />
                      <TypographyRegular
                        text={`${item.exercises} Exercises | ${item.minutes}mins`}
                        fontFamily={fontFamily.regular}
                        fontSize={fontSize.smallText}
                        lineHeight={lineHeight.smallText}
                        color={colors.gray1}
                      />
                      <Margin margin={15} />
                      <ButtonRegular
                        text="View more"
                        // borderRadius={responsiveHeight(24)}
                        onPress={() => navigateDetailScreen(item)}
                        width={100}
                      />
                    </View>
                    {imageWorkout ? <View style={styles.circleWorkout}>{imageWorkout}</View> : null}
                  </FlexRowContainer>
                </ContentContainer>
              </View>
            );
          })}
        </View>
        <Margin margin={40} />
      </View>
    </BaseContainerWithHeader>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: responsiveWidth(30),
  },
  displayFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerImage: {
    backgroundColor: colors.blue,
    borderRadius: responsiveWidth(25),
    width: responsiveWidth(50),
    height: responsiveWidth(50),
    paddingTop: responsiveHeight(10),
    overflow: 'hidden',
    marginRight: responsiveWidth(10),
  },
  fbWorkout: {
    width: responsiveWidth(50),
    height: responsiveWidth(50),
  },
  circleWorkout: {
    width: responsiveWidth(92),
    height: responsiveWidth(92),
    borderRadius: responsiveWidth(92),
    backgroundColor: colors.white2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
