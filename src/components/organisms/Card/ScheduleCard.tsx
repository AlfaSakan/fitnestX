import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';

import { colors } from '../../../assets/colors';
import {
  fontFamily,
  mediumTypography,
  smallTypography,
  titleTypography,
} from '../../../assets/Typography';

import { responsiveHeight, responsiveWidth } from '../../../utils/functions/responsiveDimension';

import ContentContainer from '../../atoms/Container/ContentContainer';
import FlexRowContainer from '../../atoms/Container/FlexRowContainer';
import DotVerticalThree from '../../atoms/Dots/DotsVerticalThree';
import Margin from '../../atoms/Margin/Margin';
import TypographyRegular from '../../atoms/Typography/TypographyRegular';

interface Props {
  name: string;
  valueSwitch?: boolean;
  onValueChange?: (value: boolean) => void;
  image: ImageSourcePropType;
  displayDate?: string;
  differenceHours?: number | string;
  differenceMinutes?: number | string;
}

const ScheduleCard: React.FC<Props> = ({
  name,
  valueSwitch = false,
  onValueChange,
  image,
  displayDate,
  differenceHours = 6,
  differenceMinutes = 22,
}) => {
  return (
    <View>
      <ContentContainer
        backgroundColor={colors.white}
        paddingHorizontal={responsiveWidth(15)}
        paddingVertical={responsiveHeight(20)}
      >
        <FlexRowContainer>
          <View style={styles.displayFlex}>
            <Image style={styles.image} source={image} resizeMode="contain" />
            <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', height: 50 }}>
              <View style={styles.displayFlex}>
                <TypographyRegular text={`${name}, `} {...mediumTypography} />
                <TypographyRegular text={displayDate} {...smallTypography} color={colors.gray1} />
              </View>
              <FlexRowContainer>
                <TypographyRegular
                  text="in "
                  {...mediumTypography}
                  fontFamily={fontFamily.regular}
                  color={colors.gray1}
                />
                <TypographyRegular
                  text={`${differenceHours}`}
                  {...titleTypography}
                  fontFamily={fontFamily.medium}
                  color={colors.gray1}
                />
                <TypographyRegular
                  text="hours "
                  {...mediumTypography}
                  fontFamily={fontFamily.regular}
                  color={colors.gray1}
                />
                <TypographyRegular
                  text={`${differenceMinutes}`}
                  {...titleTypography}
                  fontFamily={fontFamily.medium}
                  color={colors.gray1}
                />
                <TypographyRegular
                  text="minutes "
                  {...mediumTypography}
                  fontFamily={fontFamily.regular}
                  color={colors.gray1}
                />
              </FlexRowContainer>
            </View>
          </View>
          <View style={{ height: '100%', justifyContent: 'flex-end' }}>
            <Switch
              trackColor={{
                false: '#767577',
                true: colors.purpleLinear[0],
              }}
              // thumbColor={workout.isActive ? '#f5dd4b' : '#f4f3f4'}
              // ios_backgroundColor="#3e3e3e"
              onValueChange={onValueChange}
              value={valueSwitch}
            />
          </View>
        </FlexRowContainer>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: responsiveWidth(5),
            top: responsiveHeight(5),
            transform: [{ scale: 0.8 }],
          }}
        >
          <DotVerticalThree color={colors.gray1} />
        </TouchableOpacity>
      </ContentContainer>
      <Margin margin={15} />
    </View>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({
  displayFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerImage: {
    backgroundColor: colors.blue,
    borderRadius: responsiveWidth(25),
    width: responsiveWidth(50),
    height: responsiveWidth(50),
    paddingTop: responsiveHeight(10),
    overflow: 'hidden',
    marginRight: responsiveWidth(10),
  },
  image: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    marginRight: responsiveWidth(15),
  },
  positionSwitch: {
    height: '100%',
    justifyContent: 'flex-end',
  },
});
