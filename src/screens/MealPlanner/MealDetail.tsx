import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import { LoveIcon } from '../../assets/Images/svg';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';

import ContentContainer from '../../components/atoms/Container/ContentContainer';
import FlexRowContainer from '../../components/atoms/Container/FlexRowContainer';
import ScrollHorizontalContainer from '../../components/atoms/Container/ScrollHorizontalContainer';
import Margin from '../../components/atoms/Margin/Margin';
import TypographyGradient from '../../components/atoms/Typography/TypographyGradient';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import BaseContainerWithHeader from '../../components/organisms/BaseContainerWithHeader';
import Steps from '../../components/organisms/Steps/Steps';

import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import { substringString } from '../../utils/functions/substringString';
import { MealPlannerStackType } from '../../utils/types/navigation';

type params = NativeStackScreenProps<MealPlannerStackType, 'MealDetail'>;

const descriptions =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum nunc sed viverra aliquam. Ut tristique justo et semper scelerisque. Maecenas ac massa sed ex blandit malesuada. Donec tristique ac velit vitae rhoncus. Vestibulum et sollicitudin leo. Etiam vitae fringilla urna. Aliquam in porta magna, vel interdum libero.';

const exerciseSteps = [
  {
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat.',
  },
  {
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat.',
  },
  {
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat.',
  },
  {
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra odio eu finibus consequat.',
  },
];

const MealDetail = ({ navigation }: params) => {
  const [isDesc, setIsDesc] = useState(true);

  const descriptionHandler = () => {
    setIsDesc((prev) => !prev);
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <BaseContainerWithHeader
      title=""
      isButtonBottom={true}
      buttonText="Add To Breakfast Meal"
      onPressButton={() => {}}
      onPressBack={onPressBack}
    >
      <View style={styles.container}>
        <FlexRowContainer>
          <View>
            <TypographyRegular
              text="Blueberry Pancake"
              fontFamily={fontFamily.bold}
              fontSize={fontSize.largeText}
              lineHeight={lineHeight.largeText}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TypographyRegular
                text="by "
                fontFamily={fontFamily.regular}
                fontSize={fontSize.smallText}
                lineHeight={lineHeight.smallText}
              />
              <TypographyGradient color={colors.blueLinear}>
                <TypographyRegular
                  text="James Ruth"
                  fontFamily={fontFamily.regular}
                  fontSize={fontSize.smallText}
                  lineHeight={lineHeight.smallText}
                />
              </TypographyGradient>
            </View>
          </View>
          <View style={styles.loveIcon}>
            <LoveIcon />
          </View>
        </FlexRowContainer>

        <Margin margin={30} />
        <TypographyRegular
          text="Nutrition"
          fontFamily={fontFamily.semiBold}
          fontSize={fontSize.largeText}
          lineHeight={lineHeight.largeText}
        />
        <Margin margin={15} />
        <ScrollHorizontalContainer>
          <LinearGradient
            // key={index}
            colors={colors.blueLinearOpacity}
            style={[styles.nutritionContainer, { marginLeft: responsiveWidth(30) }]}
          >
            <FlexRowContainer>
              <Image
                source={images.drinkImage}
                style={styles.nutritionImage}
                resizeMode="contain"
              />
              <TypographyRegular text="180kCal" />
            </FlexRowContainer>
          </LinearGradient>
        </ScrollHorizontalContainer>

        <Margin margin={30} />
        <TypographyRegular
          text="Descriptions"
          fontFamily={fontFamily.semiBold}
          fontSize={fontSize.largeText}
          lineHeight={lineHeight.largeText}
        />
        <Margin margin={15} />
        {isDesc ? (
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <TypographyRegular text={substringString(descriptions)} />
            <TouchableOpacity style={{ right: responsiveWidth(217) }} onPress={descriptionHandler}>
              <TypographyGradient color={colors.blueLinear}>
                <TypographyRegular text="Read more..." />
              </TypographyGradient>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={descriptionHandler}>
            <TypographyRegular text={descriptions} />
          </TouchableOpacity>
        )}

        <Margin margin={30} />
        <FlexRowContainer>
          <View style={{ width: '60%' }}>
            <TypographyRegular
              text="Ingredients That You Will Need"
              fontFamily={fontFamily.semiBold}
              fontSize={fontSize.largeText}
              lineHeight={lineHeight.largeText}
            />
          </View>
          <TypographyRegular
            text="6 items"
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            color={colors.gray1}
          />
        </FlexRowContainer>
        <Margin margin={15} />
        <ScrollHorizontalContainer>
          <View style={{ marginLeft: responsiveWidth(30) }}>
            <ContentContainer backgroundColor={colors.white2}>
              <Image source={images.pieImage} style={styles.ingredientImage} resizeMode="contain" />
            </ContentContainer>
            <Margin margin={5} />
            <TypographyRegular
              text="Wheat Flour"
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
            />
            <TypographyRegular
              text="100gr"
              color={colors.gray1}
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
            />
          </View>
          <View style={{ marginLeft: responsiveWidth(15) }}>
            <ContentContainer backgroundColor={colors.white2}>
              <Image source={images.pieImage} style={styles.ingredientImage} resizeMode="contain" />
            </ContentContainer>
            <Margin margin={5} />
            <TypographyRegular
              text="Wheat Flour"
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
            />
            <TypographyRegular
              text="100gr"
              color={colors.gray1}
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
            />
          </View>
        </ScrollHorizontalContainer>

        <Margin margin={30} />
        <FlexRowContainer>
          <View style={{ width: '60%' }}>
            <TypographyRegular
              text="Step by Step"
              fontFamily={fontFamily.semiBold}
              fontSize={fontSize.largeText}
              lineHeight={lineHeight.largeText}
            />
          </View>
          <TypographyRegular
            text="8 steps"
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            color={colors.gray1}
          />
        </FlexRowContainer>
        <Margin margin={15} />
        {exerciseSteps.map((step, index) => {
          return (
            <Steps
              key={index}
              index={index}
              amountData={exerciseSteps.length}
              description={step.description}
              title={step.title}
            />
          );
        })}
      </View>
    </BaseContainerWithHeader>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(30),
    paddingBottom: responsiveHeight(30),
    flex: 1,
  },
  loveIcon: {
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  nutritionContainer: {
    padding: responsiveWidth(10),
    borderRadius: responsiveWidth(12),
  },
  nutritionImage: {
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    marginRight: responsiveWidth(5),
  },
  ingredientImage: {
    width: responsiveWidth(40),
    height: responsiveHeight(43),
  },
});
