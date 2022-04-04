import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { colors } from '../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import FlexRowContainer from '../../components/atoms/Container/FlexRowContainer';
import PaddingHorizontal from '../../components/atoms/Container/PaddingHorizontal';
import Margin from '../../components/atoms/Margin/Margin';
import TypographyGradient from '../../components/atoms/Typography/TypographyGradient';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import BaseContainerWithHeader from '../../components/organisms/BaseContainerWithHeader';
import { ImageInterface } from '../../utils/functions/datadummies';
import { responsiveWidth } from '../../utils/functions/responsiveDimension';
import { WorkoutStackType } from '../../utils/types/navigation';
import { getImageApi } from '../api/exercisePublic';

type WorkoutDetail1NavigationType = NativeStackScreenProps<WorkoutStackType, 'WorkoutProgress'>;

const { height } = Dimensions.get('screen');

export default function WorkoutProgress({ navigation, route }: WorkoutDetail1NavigationType) {
  const { data } = route.params;

  const [timeWorkout, setTimeWorkout] = useState(30);
  const [images, setImages] = useState<ImageInterface[]>([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    console.log('USE EFFECT 1: ', idx);
    (async () => {
      try {
        const results = (await getImageApi(data[idx].exercise_base)) as ImageInterface[];

        if (results.length === 0) {
          setImages([]);
          return;
        }
        setImages(results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [idx]);

  useEffect(() => {
    console.log('USE EFFECT 2: ', idx);
    if (idx < data.length) {
      const timer = setInterval(() => {
        setTimeWorkout((prev) => {
          if (prev === 0) {
            clearInterval(timer);

            if (idx === data.length - 1) {
              navigation.navigate('CompletedWorkout');
              return 0;
            }

            if (idx < data.length - 1) {
              setIdx((prev) => prev + 1);
            }

            return 30;
          }
          return prev - 1;
        });
      }, 1000);
      return;
    }
  }, [idx]);

  return (
    <BaseContainerWithHeader
      navigation={navigation}
      title="Workout Progress"
      //   isButtonBottom
      buttonText="Pause"
    >
      <PaddingHorizontal>
        <View style={styles.container}>
          <TypographyGradient color={colors.blueLinear}>
            <TypographyRegular
              text={data[idx].name}
              fontFamily={fontFamily.bold}
              fontSize={fontSize.h4}
              lineHeight={lineHeight.h4}
            />
          </TypographyGradient>
          <Margin margin={30} />
          <View style={styles.imageContainer}>
            <FlexRowContainer>
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
            </FlexRowContainer>
          </View>
          <View style={styles.timerPosition}>
            <TypographyGradient color={colors.blueLinear}>
              <TypographyRegular
                text={`${timeWorkout}`}
                fontFamily={fontFamily.bold}
                fontSize={36}
                lineHeight={lineHeight.h1}
              />
            </TypographyGradient>
          </View>
        </View>
      </PaddingHorizontal>
    </BaseContainerWithHeader>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: height * 0.8,
  },
  imageSize: {
    width: responsiveWidth(100),
    height: responsiveWidth(100),
  },
  timerPosition: {
    position: 'absolute',
    top: '50%',
  },
  imageContainer: {
    height: responsiveWidth(100),
  },
});
