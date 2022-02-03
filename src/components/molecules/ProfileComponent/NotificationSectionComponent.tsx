import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Switch, View } from 'react-native';
import { colors } from '../../../assets/colors';
import { images } from '../../../assets/images';
import { ArrowRight2Icon } from '../../../assets/Images/svg';
import { fontSize, lineHeight } from '../../../assets/Typography';
import { responsiveWidth } from '../../../utils/functions/responsiveDimension';
import FlexRowContainer from '../../atoms/Container/FlexRowContainer';
import TypographyRegular from '../../atoms/Typography/TypographyRegular';

interface NotificationSectionProps {
  label?: string;
  imageSection?: ImageSourcePropType;
  onValueChange?: (value: boolean) => void;
  value: boolean;
}

const NotificationSectionComponent: React.FC<NotificationSectionProps> = ({
  label = 'Pop-up Notification',
  imageSection = images.notificationGradient,
  onValueChange,
  value,
}) => {
  return (
    <FlexRowContainer>
      <View style={styles.displayFlex}>
        <Image style={[styles.accountImage, { marginRight: 10 }]} source={imageSection} />
        <TypographyRegular
          text={label}
          fontSize={fontSize.smallText}
          lineHeight={lineHeight.smallText}
          color={colors.gray1}
        />
      </View>
      <Switch
        trackColor={{
          false: '#767577',
          true: colors.purpleLinear[0],
        }}
        thumbColor={value ? colors.white : '#f4f3f4'}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
      />
    </FlexRowContainer>
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

export default NotificationSectionComponent;
