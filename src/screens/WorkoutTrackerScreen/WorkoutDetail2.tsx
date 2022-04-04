import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../assets/colors';
import { CircleGradientIcon } from '../../assets/Images/svg';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';

import ButtonLargeGradient from '../../components/atoms/Button/ButtonLargeGradient';
import FlexRowContainer from '../../components/atoms/Container/FlexRowContainer';
import Margin from '../../components/atoms/Margin/Margin';
import TypographyGradient from '../../components/atoms/Typography/TypographyGradient';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';

import { WorkoutStackType } from '../../utils/types/navigation';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import BaseContainerWithHeader from '../../components/organisms/BaseContainerWithHeader';
import { getImageApi } from '../api/exercisePublic';
import { ImageInterface } from '../../utils/functions/datadummies';
import RenderHTML from 'react-native-render-html';

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

type WorkoutDetail2NavigationType = NativeStackScreenProps<WorkoutStackType, 'WorkoutDetail2'>;

const { height, width } = Dimensions.get('window');

const tagStyles = {
  body: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.smallText,
    lineHeight: lineHeight.smallText,
    color: colors.gray1,
  },
};

export default function WorkoutDetail2({ navigation, route }: WorkoutDetail2NavigationType) {
  const { data } = route.params;

  const [images, setImages] = useState<ImageInterface[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const results = (await getImageApi(data.exercise_base)) as ImageInterface[];

        if (results.length === 0) return;
        setImages(results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <BaseContainerWithHeader
      navigation={navigation}
      buttonText="Save"
      onPressButton={() => {}}
      title=""
      isButtonBottom
    >
      <View style={styles.bodyContainer}>
        <TypographyRegular
          text={data.name}
          fontFamily={fontFamily.semiBold}
          fontSize={fontSize.largeText}
          lineHeight={lineHeight.largeText}
        />
        {/* <TypographyRegular
          text={`${data.difficulty ?? 'normal'} | ${data.calories ?? ''} Calories Burn`}
          fontSize={fontSize.smallText}
          lineHeight={lineHeight.smallText}
          color={colors.gray1}
        /> */}
        <Margin margin={30} />
        <TypographyRegular
          text="Description"
          fontFamily={fontFamily.semiBold}
          fontSize={fontSize.largeText}
          lineHeight={lineHeight.largeText}
        />
        <Margin margin={15} />
        <RenderHTML
          contentWidth={width}
          source={{ html: data.description }}
          tagsStyles={tagStyles}
        />
        {/* <TypographyRegular
            text={`${data.description.replaceAll('<p>', '').replaceAll('</p>', '')}`}
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            color={colors.gray1}
          /> */}
        <Margin margin={30} />
        <View>
          <FlexRowContainer>
            <TypographyRegular
              text="How To Do It"
              fontFamily={fontFamily.semiBold}
              fontSize={fontSize.largeText}
              lineHeight={lineHeight.largeText}
            />
            <TypographyRegular
              text={`${images.length} Steps`}
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              color={colors.gray1}
            />
          </FlexRowContainer>
          <Margin margin={15} />

          <View style={styles.imageContainer}>
            {images.map((img) => {
              return (
                <View key={img.id}>
                  <Image
                    style={styles.imageSize}
                    resizeMode="contain"
                    source={{ uri: img.image }}
                  />
                </View>
              );
            })}
          </View>
        </View>
        {/* <TypographyRegular
          text="Custom Repetitions"
          fontFamily={fontFamily.semiBold}
          fontSize={fontSize.largeText}
          lineHeight={lineHeight.largeText}
        /> */}
        {/* <Margin margin={30} /> */}
      </View>
    </BaseContainerWithHeader>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    paddingHorizontal: responsiveWidth(30),
  },
  dotGradient: {
    padding: 5,
    borderRadius: 10,
  },
  mainContainer: {
    justifyContent: 'space-between',
    height: height * 0.8,
  },
  imageSize: {
    width: responsiveWidth(100),
    height: responsiveWidth(100),
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
