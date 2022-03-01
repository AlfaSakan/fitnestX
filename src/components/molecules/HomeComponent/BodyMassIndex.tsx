import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../assets/colors';
import { BannerPie } from '../../../assets/Images/svg';
import { fontFamily, fontSize, lineHeight } from '../../../assets/Typography';
import ButtonCheck from '../../atoms/Button/ButtonCheck';
import ButtonLargeGradient from '../../atoms/Button/ButtonLargeGradient';
import ButtonSquareGradient from '../../atoms/Button/ButtonSquareGradient';
import ContentContainer from '../../atoms/Container/ContentContainer';
import FlexRowContainer from '../../atoms/Container/FlexRowContainer';
import Margin from '../../atoms/Margin/Margin';
import TypographyRegular from '../../atoms/Typography/TypographyRegular';

const BodyMassIndex: React.FC<{bmi: Number}> = ({bmi}) => {
  return (
    <ContentContainer isShadow={false} backgroundColor={colors.blue1}>
      <FlexRowContainer>
        <View>
          <TypographyRegular
            fontSize={fontSize.mediumText}
            fontFamily={fontFamily.semiBold}
            lineHeight={lineHeight.mediumText}
            color={colors.white}
            text="BMI (Body Mass Index)"
          />
          <TypographyRegular
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            color={colors.white}
            text="You have a normal weight"
          />
          <Margin margin={15} />
          <ButtonCheck
            width={95}
            height={35}
            borderRadius={35}
            color={colors.white}
            buttonColor={colors.purpleLinear}
            text="View More"
            onPress={() => {}}
          />
        </View>
        <View style={{ transform: [{ scale: 1.5 }] }}>
          <BannerPie />
          <View style={styles.bmiTypography}>
            <TypographyRegular
              text={`${bmi.toFixed()}`}
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              color={colors.white}
            />
          </View>
        </View>
      </FlexRowContainer>
    </ContentContainer>
  );
};

export default BodyMassIndex;

const styles = StyleSheet.create({
  bmiTypography: {
    position: 'absolute',
    top: 20,
    right: 35,
  },
});
