import React, { memo } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../assets/colors';
import { CircleGradientIcon } from '../../../assets/Images/svg';
import { fontSize, lineHeight } from '../../../assets/Typography';
import { responsiveHeight } from '../../../utils/functions/responsiveDimension';
import FlexRowContainer from '../../atoms/Container/FlexRowContainer';
import TypographyGradient from '../../atoms/Typography/TypographyGradient';
import TypographyRegular from '../../atoms/Typography/TypographyRegular';

interface Props {
  index: number;
  amountData: number;
  title: string;
  description: string;
}

const Steps: React.FC<Props> = ({ index, amountData, title, description }) => {
  return (
    <View style={{ height: responsiveHeight(98) }}>
      <FlexRowContainer alignItems="flex-start">
        <View style={{ width: 20 }}>
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
          }}
        >
          <CircleGradientIcon />
          {!(index === amountData - 1) && (
            <LinearGradient
              colors={colors.purpleLinear}
              style={{ height: '90%', borderRightWidth: 1 }}
            />
          )}
        </View>
        <View style={{ width: '90%' }}>
          <TypographyRegular
            text={title}
            fontSize={fontSize.mediumText}
            lineHeight={lineHeight.mediumText}
          />
          <TypographyRegular
            text={description}
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            color={colors.gray1}
          />
        </View>
      </FlexRowContainer>
    </View>
  );
};

export default memo(Steps);
