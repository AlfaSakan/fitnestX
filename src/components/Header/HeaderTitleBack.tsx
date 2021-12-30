import React, { ReactElement } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';
import DotComponent from '../Dots/DotComponent';
import TypographyRegular from '../Typography/TypographyRegular';
import ArrowLeft2Icon from '../../assets/Images/svg/ArrowLeft2Icon';

type HeaderTitleBackType = {
  onPressBack?(): void;
  onPressRight?(): void;
  title?: string;
  imageLeft?: ReactElement<any, any>;
};

const HeaderTitleBack: React.FC<HeaderTitleBackType> = ({
  onPressBack,
  onPressRight,
  title = 'Notification',
  imageLeft = <ArrowLeft2Icon colorIcon={colors.black} />,
}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.containerImage} onPress={onPressBack}>
        {imageLeft}
      </TouchableOpacity>
      <TypographyRegular
        text={title}
        fontFamily={fontFamily.bold}
        fontSize={fontSize.largeText}
        lineHeight={lineHeight.largeText}
      />
      <TouchableOpacity
        style={[styles.containerImage, { flexDirection: 'row' }]}
        onPress={onPressRight}
      >
        <DotComponent marginRight={2} />
        <DotComponent />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTitleBack;

const styles = StyleSheet.create({
  containerImage: {
    width: responsiveWidth(32),
    height: responsiveWidth(32),
    borderRadius: responsiveWidth(8),
    backgroundColor: colors.gray4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBack: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(30),
    paddingHorizontal: responsiveWidth(30),
  },
});
