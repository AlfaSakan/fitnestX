import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import { ArrowRight2GradientIcon, SearchIcon } from '../../assets/Images/svg';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';

import ButtonRegularGradient from '../../components/atoms/Button/ButtonRegularGradient';
import ContentContainer from '../../components/atoms/Container/ContentContainer';
import FlexRowContainer from '../../components/atoms/Container/FlexRowContainer';
import ScrollHorizontalContainer from '../../components/atoms/Container/ScrollHorizontalContainer';
import Margin from '../../components/atoms/Margin/Margin';
import SearchBar from '../../components/atoms/TextInputCustom/SearchBar';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import BaseContainerWithHeader from '../../components/organisms/BaseContainerWithHeader';

import { logicColors } from '../../utils/functions/logicColors';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import { MealPlannerStackType } from '../../utils/types/navigation';

type params = NativeStackScreenProps<MealPlannerStackType, 'CategoryMeal'>;

const categoryList = [
  {
    name: 'Salad',
    image: images.pieImage,
  },
  {
    name: 'Salad',
    image: images.pieImage,
  },
  {
    name: 'Salad',
    image: images.pieImage,
  },
  {
    name: 'Salad',
    image: images.pieImage,
  },
];

const recommenList = [
  {
    name: 'Honey Pancake',
    difficulty: 'Easy',
    time: 130,
    cal: 180,
    image: images.breadImage,
  },
  {
    name: 'Honey Pancake',
    difficulty: 'Easy',
    time: 130,
    cal: 180,
    image: images.pancakeImage,
  },
  {
    name: 'Honey Pancake',
    difficulty: 'Easy',
    time: 130,
    cal: 180,
    image: images.pancakeImage,
  },
];

const CategoryMeal = ({ navigation }: params) => {
  const [search, setSearch] = useState('');

  const onPressBack = () => {
    navigation.goBack();
  };

  const navigateToMealDetail = () => {
    navigation.navigate('MealDetail');
  };

  return (
    <BaseContainerWithHeader title="Breakfast" onPressButton={() => {}} onPressBack={onPressBack}>
      <View style={styles.container}>
        <SearchBar
          image={<SearchIcon height={responsiveWidth(20)} width={responsiveWidth(20)} />}
          placeholder="Search Pancake"
          value={search}
          onChangeText={setSearch}
        />

        <Margin margin={15} />
        <TypographyRegular
          text="Category"
          fontFamily={fontFamily.semiBold}
          fontSize={fontSize.largeText}
          lineHeight={lineHeight.largeText}
        />

        <Margin margin={15} />
        <ScrollHorizontalContainer>
          {categoryList.map((category, index) => {
            const backgroundColor = logicColors(
              index,
              colors.purpleLinearOpacity,
              colors.blueLinearOpacity
            );
            const marginRight =
              index === categoryList.length - 1 ? responsiveWidth(30) : responsiveWidth(15);
            const marginLeft = index === 0 ? responsiveWidth(30) : 0;

            return (
              <LinearGradient
                key={index}
                colors={backgroundColor}
                style={[styles.categoryContainer, { marginRight, marginLeft }]}
              >
                <View style={styles.categoryImageContainer}>
                  <Image
                    source={category.image}
                    style={styles.categoryImage}
                    resizeMode="contain"
                  />
                </View>
                <Margin margin={10} />
                <TypographyRegular text={category.name} />
              </LinearGradient>
            );
          })}
        </ScrollHorizontalContainer>

        <Margin margin={30} />
        <View style={{ width: '50%' }}>
          <TypographyRegular
            text="Recommendation for Diet"
            fontFamily={fontFamily.semiBold}
            fontSize={fontSize.largeText}
            lineHeight={lineHeight.largeText}
          />
        </View>

        <Margin margin={15} />
        <ScrollHorizontalContainer>
          {recommenList.map((recommen, index) => {
            const backgroundColor = logicColors(
              index,
              colors.purpleLinearOpacity,
              colors.blueLinearOpacity
            );
            const marginRight =
              index === categoryList.length - 1 ? responsiveWidth(30) : responsiveWidth(15);
            const marginLeft = index === 0 ? responsiveWidth(30) : 0;

            return (
              <LinearGradient
                key={index}
                colors={backgroundColor}
                style={[styles.recommenContainer, { marginRight, marginLeft }]}
              >
                <Image source={recommen.image} style={styles.recommenImage} resizeMode="contain" />
                <Margin margin={18} />
                <TypographyRegular
                  text={recommen.name}
                  fontFamily={fontFamily.medium}
                  fontSize={fontSize.mediumText}
                  lineHeight={lineHeight.mediumText}
                />
                <TypographyRegular
                  text={`${recommen.difficulty} | ${recommen.time}mins | ${recommen.cal}kCal`}
                  fontFamily={fontFamily.regular}
                  fontSize={fontSize.smallText}
                  lineHeight={lineHeight.smallText}
                  color={colors.gray1}
                />
                <Margin margin={18} />
                <ButtonRegularGradient onPress={navigateToMealDetail} text="View" />
              </LinearGradient>
            );
          })}
        </ScrollHorizontalContainer>

        <Margin margin={30} />
        <View style={{ width: '50%' }}>
          <TypographyRegular
            text="Popular"
            fontFamily={fontFamily.semiBold}
            fontSize={fontSize.largeText}
            lineHeight={lineHeight.largeText}
          />
        </View>

        <Margin margin={15} />
        <ContentContainer backgroundColor={colors.white}>
          <FlexRowContainer>
            <Image source={images.breadImage} style={styles.popularImage} resizeMode="contain" />
            <View>
              <TypographyRegular
                text="Blueberry Pancake"
                fontFamily={fontFamily.medium}
                fontSize={fontSize.mediumText}
                lineHeight={lineHeight.mediumText}
              />
              <TypographyRegular
                text={`Medium | 30mins | 230kCal`}
                fontFamily={fontFamily.regular}
                fontSize={fontSize.smallText}
                lineHeight={lineHeight.smallText}
                color={colors.gray1}
              />
            </View>
            <LinearGradient colors={colors.purpleLinear} style={styles.borderWorkoutBtn}>
              <View style={styles.workoutBtn}>
                <ArrowRight2GradientIcon />
              </View>
            </LinearGradient>
          </FlexRowContainer>
        </ContentContainer>
      </View>
    </BaseContainerWithHeader>
  );
};

export default CategoryMeal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(30),
    paddingBottom: responsiveHeight(30),
  },
  categoryContainer: {
    paddingTop: responsiveHeight(15),
    paddingBottom: responsiveHeight(16),
    paddingHorizontal: responsiveWidth(20),
    borderRadius: responsiveHeight(16),
    alignItems: 'center',
  },
  categoryImageContainer: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderRadius: responsiveWidth(40),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: responsiveWidth(29),
  },
  recommenContainer: {
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(42),
    paddingTop: responsiveHeight(30),
    paddingBottom: responsiveHeight(20),
    borderRadius: responsiveHeight(20),
  },
  recommenImage: {
    width: responsiveWidth(116),
    height: responsiveHeight(80),
  },
  popularImage: {
    width: responsiveWidth(45),
    height: responsiveWidth(45),
  },
  borderWorkoutBtn: {
    width: responsiveWidth(24),
    height: responsiveWidth(24),
    borderRadius: responsiveWidth(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  workoutBtn: {
    width: responsiveWidth(22),
    height: responsiveWidth(22),
    borderRadius: responsiveWidth(22),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
