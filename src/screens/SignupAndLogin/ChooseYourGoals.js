import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import {fontFamily, fontSize, lineHeight} from '../../assets/Typography';
import ButtonLarge from '../../components/Button/ButtonLarge';
import CardProgram from '../../components/CardProgram/CardProgram';
import Margin from '../../components/Margin';
import TypographyRegular from '../../components/Typography/TypographyRegular';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsiveDimension';

const programs = [
  {
    id: 0,
    title: 'Improve Shape',
    message:
      'I have a low amount of body fat and need / want to build more muscle',
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
    message:
      'I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass',
    image: images.program3,
  },
];

const {width, height} = Dimensions.get('screen');

export default function ChooseYourGoals({navigation}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const isCarousel = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setActiveIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const navigateNextScreen = item => {
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
        <View style={{width: responsiveWidth(182)}}>
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
          keyExtractor={(item, index) => index}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          ref={isCarousel}
          snapToInterval={width}
          decelerationRate="normal"
          snapToAlignment="center"
          disableIntervalMomentum={true}
        />
        {/* <Margin margin={60} /> */}
        <ButtonLarge
          isTextGradient={false}
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
});
