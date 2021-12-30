import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../assets/colors';
import {CircleGradientIcon, CloseIcon} from '../../assets/Images/svg';
import {fontFamily, fontSize, lineHeight} from '../../assets/Typography';
import ButtonLarge from '../../components/Button/ButtonLarge';
import BaseContainer from '../../components/Container/BaseContainer';
import FlexRowContainer from '../../components/Container/FlexRowContainer';
import HeaderTitleBack from '../../components/Header/HeaderTitleBack';
import Margin from '../../components/Margin';
import TypographyGradient from '../../components/Typography/TypographyGradient';
import TypographyRegular from '../../components/Typography/TypographyRegular';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsiveDimension';

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

export default function WorkoutDetail2({navigation, route}) {
  const {data} = route?.params;

  return (
    <BaseContainer>
      <ScrollView>
        <HeaderTitleBack
          imageLeft={<CloseIcon colorIcon={colors.black} />}
          title=""
          onPressBack={() => navigation.goBack()}
        />
        <View style={styles.bodyContainer}>
          <TypographyRegular
            text={data.name}
            fontFamily={fontFamily.semiBold}
            fontSize={fontSize.largeText}
            lineHeight={lineHeight.largeText}
          />
          <TypographyRegular
            text={`${data.difficulty} | ${data.calories} Calories Burn`}
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            color={colors.gray1}
          />
          <Margin margin={30} />
          <TypographyRegular
            text="Description"
            fontFamily={fontFamily.semiBold}
            fontSize={fontSize.largeText}
            lineHeight={lineHeight.largeText}
          />
          <Margin margin={15} />
          <TypographyRegular
            text={`${data.description}`}
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            color={colors.gray1}
          />
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
                text={`${exerciseSteps.length} Steps`}
                fontSize={fontSize.smallText}
                lineHeight={lineHeight.smallText}
                color={colors.gray1}
              />
            </FlexRowContainer>
            <Margin margin={15} />
            {exerciseSteps.map((step, index) => {
              return (
                <View key={index} style={{height: responsiveHeight(98)}}>
                  <FlexRowContainer alignItems="flex-start">
                    <View style={{width: 20}}>
                      <TypographyGradient color={colors.blueLinear}>
                        <TypographyRegular
                          text={`0${index + 1}`}
                          fontSize={fontSize.mediumText}
                          lineHeight={lineHeight.mediumText}
                        />
                      </TypographyGradient>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        marginRight: 15,
                        marginLeft: 5,
                      }}>
                      <CircleGradientIcon />
                      {!(index === exerciseSteps.length - 1) && (
                        <LinearGradient
                          colors={colors.purpleLinear}
                          style={{height: '90%', borderRightWidth: 1}}
                        />
                      )}
                    </View>
                    <View style={{width: '90%'}}>
                      <TypographyRegular
                        text={step.title}
                        fontSize={fontSize.mediumText}
                        lineHeight={lineHeight.mediumText}
                      />
                      <TypographyRegular
                        text={step.description}
                        fontSize={fontSize.smallText}
                        lineHeight={lineHeight.smallText}
                        color={colors.gray1}
                      />
                    </View>
                  </FlexRowContainer>
                </View>
              );
            })}
          </View>
          <TypographyRegular
            text="Custom Repetitions"
            fontFamily={fontFamily.semiBold}
            fontSize={fontSize.largeText}
            lineHeight={lineHeight.largeText}
          />
          <Margin margin={30} />
          <ButtonLarge
            text="Get Started"
            // onPress={navigateNextScreen}
            // position="absolute"
            // bottom={responsiveHeight(40)}
            isTextGradient={false}
            color={colors.white}
            buttonColor={colors.blueLinear}
          />
        </View>
      </ScrollView>
    </BaseContainer>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    paddingHorizontal: responsiveWidth(30),
    paddingBottom: responsiveHeight(30),
  },
  dotGradient: {
    // width: 20,
    // height: 20,
    padding: 5,
    borderRadius: 10,
  },
});
