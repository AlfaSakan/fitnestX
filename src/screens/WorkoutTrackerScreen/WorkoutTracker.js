import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Switch, View} from 'react-native';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import AbWorkoutImage from '../../assets/Images/svg/AbWorkoutImage';
import FullbodyWorkoutImage from '../../assets/Images/svg/FullbodyWorkoutImage';
import UpperbodyWorkoutImage from '../../assets/Images/svg/UpperbodyWorkoutImage';
import {fontFamily, fontSize, lineHeight} from '../../assets/Typography';
import ButtonCheck from '../../components/Button/ButtonCheck';
import ButtonRegular from '../../components/Button/ButtonRegular';
import BaseContainer from '../../components/Container/BaseContainer';
import ContentContainer from '../../components/Container/ContentContainer';
import FlexRowContainer from '../../components/Container/FlexRowContainer';
import HeaderTitleBack from '../../components/Header/HeaderTitleBack';
import Margin from '../../components/Margin';
import TypographyRegular from '../../components/Typography/TypographyRegular';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsiveDimension';
import {listWorkout, upcomingData} from './dummyData';

export default function WorkoutTracker({navigation, route}) {
  const [isActive, setIsActive] = useState('');

  const toggleSwitch = item => {
    setIsActive(prev => ({...prev, [item]: !prev[item]}));
  };

  const navigateDetailScreen = data => {
    navigation.navigate('WorkoutDetail1', {data});
  };

  return (
    <BaseContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderTitleBack
          title="Workout Tracker"
          onPressBack={() => navigation.goBack()}
        />
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
              return (
                <View key={index}>
                  <Margin margin={30} />
                  <ContentContainer
                    backgroundColor={colors.white2}
                    padding={15}>
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
                            fontFamily={fontFamily.regular}
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
                        onValueChange={() => toggleSwitch(workout.name)}
                        value={isActive[workout.name]}
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
                          borderRadius={responsiveHeight(24)}
                          onPress={() => navigateDetailScreen(item)}
                          width={100}
                        />
                      </View>
                      {imageWorkout ? (
                        <View style={styles.circleWorkout}>{imageWorkout}</View>
                      ) : null}
                    </FlexRowContainer>
                  </ContentContainer>
                </View>
              );
            })}
          </View>
          <Margin margin={40} />
        </View>
      </ScrollView>
    </BaseContainer>
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
