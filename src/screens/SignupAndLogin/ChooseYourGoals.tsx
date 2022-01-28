import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Animated,
  Dimensions,
  FlatList,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';

import { colors } from '../../assets/colors';
import { images } from '../../assets/images';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import ButtonLarge from '../../components/atoms/Button/ButtonLarge';
import ButtonLargeGradient from '../../components/atoms/Button/ButtonLargeGradient';
import CardProgram from '../../components/molecules/CardProgram/CardProgram';
import Margin from '../../components/atoms/Margin/Margin';
import TypographyRegular from '../../components/atoms/Typography/TypographyRegular';
import { SignupAndLoginStackType } from '../../utils/types/navigation';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';

import { useAppDispatch, useAppSelector } from '../../config/redux/app/hooks';
import { setGoal } from '../../config/redux/features/user/userInformation';
import FlexRowContainer from '../../components/atoms/Container/FlexRowContainer';

export type programsType = {
  id: number;
  title: string;
  message: string;
  image: ImageSourcePropType;
};

const programs: programsType[] = [
  {
    id: 0,
    title: 'Improve Shape',
    message: 'I have a low amount of body fat and need / want to build more muscle',
    image: images.program1,
  },
  {
    id: 1,
    title: 'Lean and Tone',
    message:
      'I’m “skinny fat”. look thin but have no shape. I want to add learn muscle in the right way',
    image: images.program2,
  },
  {
    id: 2,
    title: 'Lose a Fat',
    message: 'I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass',
    image: images.program3,
  },
];

const { width, height } = Dimensions.get('screen');

type ChooseYourGoalsNavigationType = NativeStackScreenProps<
  SignupAndLoginStackType,
  'ChooseYourGoals'
>;

export default function ChooseYourGoals({ navigation }: ChooseYourGoalsNavigationType) {
  const [activeIndex, setActiveIndex] = useState(0);

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state);
  const { goal } = useAppSelector((state) => state.user);

  const isCarousel = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setActiveIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const navigateNextScreen = (item: programsType) => {
    dispatch(setGoal(item.title));
    navigation.navigate('WelcomingScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TypographyRegular
          text="What is your goal?"
          fontFamily={fontFamily.bold}
          fontSize={fontSize.h4}
          lineHeight={lineHeight.h4}
          color={colors.black}
        />
        <View style={{ width: responsiveWidth(182) }}>
          <TypographyRegular
            text="It will help us to choose a best program for you"
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            color={colors.gray1}
            textAlign="center"
          />
        </View>
        <Margin margin={50} />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          data={programs}
          renderItem={CardProgram}
          keyExtractor={(item, index) => String(index)}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          onViewableItemsChanged={viewableItemsChanged}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          ref={isCarousel}
          snapToInterval={width}
          decelerationRate="normal"
          snapToAlignment="center"
          disableIntervalMomentum={true}
        />
        <View style={styles.dotContainer}>
          {programs.map((program) => {
            const isActive = activeIndex === program.id;
            return (
              <View
                key={program.id.toString()}
                style={[styles.dot, { backgroundColor: isActive ? colors.blue1 : colors.blue }]}
              />
            );
          })}
        </View>
        <ButtonLargeGradient
          buttonColor={colors.blueLinear}
          color={colors.white}
          text="Confirm"
          bottom={responsiveHeight(40)}
          onPress={() => navigateNextScreen(programs[activeIndex])}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    marginTop: responsiveHeight(40),
  },
  cardProgramGradient: {
    width: responsiveWidth(275),
    height: responsiveHeight(478),
    borderRadius: responsiveWidth(22),
  },
  cardProgram: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(30),
  },
  dotContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
});
