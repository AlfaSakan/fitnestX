import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import ButtonLargeGradient from '../../components/atoms/Button/ButtonLargeGradient';
import PaddingHorizontal from '../../components/atoms/Container/PaddingHorizontal';
import Margin from '../../components/atoms/Margin/Margin';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import BaseContainerWithHeader from '../../components/organisms/BaseContainerWithHeader';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import { MainStackNavigation, WorkoutStackType } from '../../utils/types/navigation';

type WorkoutTrackerNavigationType = NativeStackScreenProps<
  MainStackNavigation,
  'BottomNavbarStackScreen'
>;

const CompletedWorkout = ({ navigation }: WorkoutTrackerNavigationType) => {
  const navigateBackHome = () => {
    navigation.navigate('BottomNavbarStackScreen', { screen: 'HomeTab' });
  };
  return (
    <SafeAreaView>
      <PaddingHorizontal>
        <View>
          <View style={{ alignItems: 'center' }}>
            <Image style={styles.image} source={images.womanWithBall} resizeMode="contain" />
          </View>
          <Margin margin={36} />
          <TypographyRegular
            text="Congratulations, You Have Finished Your Workout"
            color={colors.black}
            fontFamily={fontFamily.bold}
            fontSize={fontSize.h4}
            lineHeight={lineHeight.h4}
            textAlign="center"
          />
          <Margin margin={15} />
          <TypographyRegular
            text="Exercises is king and nutrition is queen. Combine the two and you will have a kingdom"
            color={colors.gray1}
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            textAlign="center"
          />
          <TypographyRegular
            text="-Jack Lalanne"
            color={colors.gray1}
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            textAlign="center"
          />
          <Margin margin={74} />
          <ButtonLargeGradient
            buttonColor={colors.blueLinear}
            onPress={() => {}}
            text="Update Your Progress"
            color={colors.white}
          />
          <Margin margin={16} />
          <ButtonLargeGradient
            buttonColor={colors.blueLinear}
            onPress={navigateBackHome}
            text="Back To Home"
            color={colors.white}
          />
        </View>
      </PaddingHorizontal>
    </SafeAreaView>
  );
};

export default CompletedWorkout;

const styles = StyleSheet.create({
  image: {
    width: responsiveWidth(255),
    height: responsiveHeight(327),
  },
});
