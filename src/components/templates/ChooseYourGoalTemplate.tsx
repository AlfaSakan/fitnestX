import React, { useRef } from 'react';
import { Animated, Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { colors } from '../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../utils/functions/responsiveDimension';
import { ProgramsType } from '../../utils/types/programsType';
import ButtonLargeGradient from '../atoms/Button/ButtonLargeGradient';
import Margin from '../atoms/Margin/Margin';
import TypographyRegular from '../atoms/Typography/TypographyRegular';
import CardProgram from '../molecules/CardProgram/CardProgram';

interface Props {
  values: ProgramsType[];
  activeIndex: number;
  onPressButton: (value: ProgramsType) => void;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const { width, height } = Dimensions.get('screen');

const ChooseYourGoalTemplate: React.FC<Props> = ({
  values,
  activeIndex,
  onPressButton,
  setActiveIndex,
}) => {
  const isCarousel = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setActiveIndex(viewableItems[0].index);
  }).current;

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
          data={values}
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
          {values.map((value) => {
            const isActive = activeIndex === value.id;
            return (
              <View
                key={value.id.toString()}
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
          onPress={() => onPressButton(values[activeIndex])}
        />
      </View>
    </View>
  );
};

export default ChooseYourGoalTemplate;

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
