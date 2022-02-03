import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '../../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../../assets/Typography';

import { responsiveHeight, responsiveWidth } from '../../../utils/functions/responsiveDimension';

import Margin from '../../atoms/Margin/Margin';
import TypographyGradient from '../../atoms/Typography/TypographyGradient';
import TypographyRegular from '../../atoms/Typography/TypographyRegular';

interface UserInfoProps {
  value: string | number;
  label: string;
}

const UserInfoComponent: React.FC<UserInfoProps> = ({ value, label }) => {
  return (
    <View style={styles.profileUser}>
      <TypographyGradient color={colors.blueLinear}>
        <TypographyRegular
          text={`${value}`}
          fontFamily={fontFamily.medium}
          fontSize={fontSize.mediumText}
          lineHeight={lineHeight.mediumText}
        />
      </TypographyGradient>
      <Margin margin={5} />
      <TypographyRegular
        text={label}
        fontFamily={fontFamily.regular}
        fontSize={fontSize.smallText}
        lineHeight={lineHeight.smallText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileUser: {
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(10),
    borderRadius: responsiveWidth(16),
    width: responsiveWidth(95),
    height: responsiveHeight(65),
    alignItems: 'center',
  },
});

export default UserInfoComponent;
