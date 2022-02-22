import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import { PlusIcon } from '../../assets/Images/svg';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import ArrowRightBorder from '../../components/atoms/ArrowRightBorder';
import ContentContainer from '../../components/atoms/Container/ContentContainer';
import FlexRowContainer from '../../components/atoms/Container/FlexRowContainer';
import Margin from '../../components/atoms/Margin/Margin';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import BaseContainerWithHeader from '../../components/organisms/BaseContainerWithHeader';
import Calendar from '../../components/organisms/Calendar';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import { sentenceCase } from '../../utils/functions/sentenceCase';
import { MealPlannerStackType } from '../../utils/types/navigation';

type Params = NativeStackScreenProps<MealPlannerStackType, 'MealSchedule'>;

const scheduleMeals = [
  {
    type: 'breakfast',
    meals: [
      { name: 'Honey Pancake', date: new Date().getTime(), image: images.pancakeImage },
      { name: 'Coffee', date: new Date().getTime(), image: images.pancakeImage },
    ],
  },
  {
    type: 'lunch',
    meals: [
      { name: 'Honey Pancake', date: new Date().getTime(), image: images.pancakeImage },
      { name: 'Coffee', date: new Date().getTime(), image: images.pancakeImage },
    ],
  },
  {
    type: 'snacks',
    meals: [
      { name: 'Honey Pancake', date: new Date().getTime(), image: images.pancakeImage },
      { name: 'Coffee', date: new Date().getTime(), image: images.pancakeImage },
    ],
  },
  {
    type: 'dinner',
    meals: [
      { name: 'Honey Pancake', date: new Date().getTime(), image: images.pancakeImage },
      { name: 'Coffee', date: new Date().getTime(), image: images.pancakeImage },
    ],
  },
];

const nutritions = [
  {
    name: 'Calories',
    unit: 'kCal',
    amount: 320,
    icon: images.calories,
  },
  {
    name: 'Proteins',
    unit: 'g',
    amount: 300,
    icon: images.protein,
  },
  {
    name: 'Fats',
    unit: 'g',
    amount: 320,
    icon: images.transFat,
  },
  {
    name: 'Carbo',
    unit: 'g',
    amount: 320,
    icon: images.carboIcon,
  },
];

const MealSchedule = ({ navigation }: Params) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <BaseContainerWithHeader
      title="Meal Schedule"
      isButtonRounded={true}
      onPressBack={onPressBack}
      icon={
        <PlusIcon
          height={responsiveHeight(40)}
          width={responsiveWidth(40)}
          colorIcon={colors.white}
        />
      }
    >
      <View style={styles.container}>
        <Calendar selectedDate={selectedDate} onPress={(value) => setSelectedDate(value)} />

        <Margin margin={30} />
        {scheduleMeals.map((schedule, index) => {
          return (
            <View key={index}>
              <FlexRowContainer>
                <TypographyRegular
                  text={sentenceCase(schedule.type)}
                  fontFamily={fontFamily.semiBold}
                  fontSize={fontSize.largeText}
                  lineHeight={lineHeight.largeText}
                />
                <TypographyRegular
                  text={`${schedule.meals.length} meals | 500 calories`}
                  color={colors.gray1}
                  fontSize={fontSize.smallText}
                  lineHeight={lineHeight.smallText}
                />
              </FlexRowContainer>
              <Margin margin={10} />
              {schedule.meals.map((meal, index) => {
                const hours = moment(meal.date).format('hh:mma');

                return (
                  <View key={index}>
                    <FlexRowContainer>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={meal.image} />
                        <View style={{ marginLeft: responsiveWidth(10) }}>
                          <TypographyRegular
                            text={meal.name}
                            fontFamily={fontFamily.medium}
                            fontSize={fontSize.mediumText}
                            lineHeight={lineHeight.mediumText}
                          />
                          <TypographyRegular
                            text={`${hours}`}
                            fontSize={fontSize.smallText}
                            lineHeight={lineHeight.smallText}
                            color={colors.gray1}
                          />
                        </View>
                      </View>
                      <ArrowRightBorder />
                    </FlexRowContainer>
                    <Margin margin={15} />
                  </View>
                );
              })}
            </View>
          );
        })}
        <Margin margin={15} />
        <TypographyRegular
          text={'Today Meal Nutritions'}
          fontFamily={fontFamily.semiBold}
          fontSize={fontSize.largeText}
          lineHeight={lineHeight.largeText}
        />
        <Margin margin={15} />
        {nutritions.map((nutrition, index) => {
          return (
            <View key={index}>
              <ContentContainer backgroundColor={colors.white}>
                <FlexRowContainer>
                  <View style={styles.flex}>
                    <TypographyRegular text={nutrition.name} />
                    <Image
                      source={nutrition.icon}
                      style={styles.nutritionIcon}
                      resizeMode="contain"
                    />
                  </View>
                  <TypographyRegular text={`${nutrition.amount} ${nutrition.unit}`} />
                </FlexRowContainer>
                <View />
              </ContentContainer>
              <Margin margin={15} />
            </View>
          );
        })}
      </View>
    </BaseContainerWithHeader>
  );
};

export default MealSchedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(30),
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nutritionIcon: {
    width: responsiveWidth(18),
    height: responsiveWidth(18),
    marginLeft: responsiveWidth(5),
  },
});
