import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../assets/colors';
import { ArrowRight2Icon } from '../../../assets/Images/svg';
import { fontSize, lineHeight } from '../../../assets/Typography';
import { responsiveWidth } from '../../../utils/functions/responsiveDimension';
import FlexRowContainer from '../../atoms/Container/FlexRowContainer';
import TypographyRegular from '../../atoms/Typography/TypographyRegular';

interface ProfileSectionProps {
  imageSection: ImageSourcePropType;
  label: string;
  onPress?: () => void;
}

const ProfileSectionComponent: React.FC<ProfileSectionProps> = ({
  imageSection,
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FlexRowContainer alignItems="center">
        <View style={styles.displayFlex}>
          <Image style={[styles.accountImage, { marginRight: 10 }]} source={imageSection} />
          <TypographyRegular
            text={label}
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            color={colors.gray1}
          />
        </View>
        <ArrowRight2Icon />
      </FlexRowContainer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  displayFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountImage: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
  },
});

export default ProfileSectionComponent;
