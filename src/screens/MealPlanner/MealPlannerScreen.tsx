import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import { ArrowDown2Icon, NotificationIcon } from '../../assets/Images/svg';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';

import ButtonCheck from '../../components/atoms/Button/ButtonCheck';
import ContentContainer from '../../components/atoms/Container/ContentContainer';
import FlexRowContainer from '../../components/atoms/Container/FlexRowContainer';
import Margin from '../../components/atoms/Margin/Margin';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import BaseContainerWithHeader from '../../components/organisms/BaseContainerWithHeader';

import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import { MealPlannerStackType } from '../../utils/types/navigation';

import { postUser } from '../api/user';

import ExampleCalendar from '../../components/organisms/Calendar';

const { width } = Dimensions.get('window');

type params = NativeStackScreenProps<MealPlannerStackType, 'MealPlanner'>;

const dummyList = [
  {
    name: 'BreakFast',
    image: images.pieImage,
    amount: 120,
  },
  {
    name: 'Lunch',
    image: images.breadImage,
    amount: 130,
  },
];

const MealPlannerScreen = ({ navigation }: params) => {
  const onPressButton = async () => {
    // console.log(await getUser());
    const result = await postUser({ email: 'alfa@gmail.com', password: 'test12345' });

    console.log(result);
  };

  const onPressCategory = (name: String) => {
    navigation.navigate('CategoryMeal');
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressMealSchedule = () => {
    navigation.navigate('MealSchedule');
  };

  return (
    <BaseContainerWithHeader
      title="Meal Planner"
      onPressButton={() => {}}
      onPressBack={onPressBack}
    >
      <View style={styles.container}>
        <FlexRowContainer>
          <TypographyRegular
            text="Meal Nutritions"
            fontFamily={fontFamily.semiBold}
            lineHeight={lineHeight.largeText}
            fontSize={fontSize.largeText}
          />
          <ButtonCheck
            buttonColor={colors.blueLinear}
            borderRadius={50}
            text="Weekly"
            color={colors.white}
            image={<ArrowDown2Icon colorIcon={colors.white} />}
          />
        </FlexRowContainer>

        {/* DIAGRAM SKIP DULU */}

        <Margin margin={30} />
        <ContentContainer>
          <FlexRowContainer>
            <TypographyRegular
              text="Daily Meal Schedule"
              fontFamily={fontFamily.medium}
              fontSize={fontSize.mediumText}
              lineHeight={lineHeight.mediumText}
            />
            <ButtonCheck
              buttonColor={colors.blueLinear}
              borderRadius={50}
              text="Check"
              color={colors.white}
              onPress={onPressMealSchedule}
            />
          </FlexRowContainer>
        </ContentContainer>

        <Margin margin={30} />
        <FlexRowContainer>
          <TypographyRegular
            text="Today Meals"
            fontFamily={fontFamily.semiBold}
            fontSize={fontSize.largeText}
            lineHeight={lineHeight.largeText}
          />
          <ButtonCheck
            buttonColor={colors.blueLinear}
            borderRadius={50}
            text="Breakfast"
            color={colors.white}
            image={<ArrowDown2Icon colorIcon={colors.white} />}
          />
        </FlexRowContainer>

        <Margin margin={15} />
        <ContentContainer backgroundColor={colors.white}>
          <FlexRowContainer>
            <Image source={images.salmonNigiri} style={styles.foodImage} />
            <View>
              <TypographyRegular
                text="Salmon Nigiri"
                fontFamily={fontFamily.medium}
                fontSize={fontSize.mediumText}
                lineHeight={lineHeight.mediumText}
              />
              <TypographyRegular
                text="Today | 7am"
                fontSize={fontSize.smallText}
                lineHeight={lineHeight.smallText}
                color={colors.gray1}
              />
            </View>
            <View style={styles.notifButton}>
              <NotificationIcon colorIcon={colors.purple1} />
            </View>
          </FlexRowContainer>
        </ContentContainer>

        <Margin margin={15} />
        <ContentContainer backgroundColor={colors.white}>
          <FlexRowContainer>
            <Image source={images.glassOfMilk} style={styles.foodImage} />
            <View>
              <TypographyRegular
                text="Salmon Nigiri"
                fontFamily={fontFamily.medium}
                fontSize={fontSize.mediumText}
                lineHeight={lineHeight.mediumText}
              />
              <TypographyRegular
                text="Today | 7am"
                fontSize={fontSize.smallText}
                lineHeight={lineHeight.smallText}
                color={colors.gray1}
              />
            </View>
            <View style={styles.notifButton}>
              <NotificationIcon colorIcon={colors.purple1} />
            </View>
          </FlexRowContainer>
        </ContentContainer>

        <Margin margin={30} />
        <TypographyRegular
          text="Find Something to Eat"
          fontFamily={fontFamily.semiBold}
          fontSize={fontSize.largeText}
          lineHeight={lineHeight.largeText}
        />

        <Margin margin={15} />
        <View style={{ width, right: responsiveWidth(30) }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dummyList.map((food, index) => {
              return (
                <LinearGradient
                  key={index}
                  style={[
                    styles.foodContainer,
                    {
                      marginRight:
                        dummyList.length - 1 === index ? responsiveWidth(30) : responsiveWidth(15),
                      marginLeft: index === 0 ? responsiveWidth(30) : 0,
                    },
                  ]}
                  colors={colors.blueLinearOpacity}
                >
                  <View style={{ alignItems: 'flex-end' }}>
                    <Image source={food.image} style={styles.foodFindImage} resizeMode="contain" />
                  </View>
                  <TypographyRegular
                    text={food.name}
                    fontFamily={fontFamily.medium}
                    fontSize={fontSize.mediumText}
                    lineHeight={lineHeight.mediumText}
                  />
                  <TypographyRegular
                    text={`${food.amount}+ Foods`}
                    fontSize={fontSize.smallText}
                    lineHeight={lineHeight.smallText}
                    color={colors.gray1}
                  />
                  <Margin margin={15} />
                  <ButtonCheck
                    buttonColor={colors.blueLinear}
                    text="Select"
                    color={colors.white}
                    width={responsiveWidth(98)}
                    borderRadius={responsiveWidth(49)}
                    onPress={() => onPressCategory(food.name)}
                  />
                </LinearGradient>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </BaseContainerWithHeader>
  );
};

export default MealPlannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(30),
    paddingBottom: responsiveHeight(30),
  },
  notifButton: {
    padding: responsiveWidth(5),
    borderRadius: responsiveWidth(5),
    backgroundColor: `${colors.purple2}33`,
  },
  foodImage: {
    width: responsiveWidth(42),
    height: responsiveWidth(42),
  },
  foodContainer: {
    padding: responsiveWidth(20),
    borderRadius: responsiveWidth(20),
    borderTopRightRadius: responsiveWidth(110),
    width: responsiveWidth(200),
    height: responsiveWidth(200),
  },
  foodFindImage: {
    width: responsiveWidth(118),
    height: responsiveHeight(74),
  },
});
