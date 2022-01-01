import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../assets/colors';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';
import ButtonCheck from '../Button/ButtonCheck';
import TypographyRegular from '../Typography/TypographyRegular';

interface ProfilePictureType {
  image: ImageSourcePropType;
  text: string;
  description: string;
  colorImage: string;
  onPress?(): void;
  onPressDot?(): void;
  backgroundColor?: string;
  padding?: number;
  borderRadius?: number;
  textButton: string;
  buttonColor?: (string | number)[];
}

const ProfilePicture: React.FC<ProfilePictureType> = ({
  image,
  text,
  description,
  colorImage,
  onPress,
  onPressDot,
  backgroundColor,
  padding,
  borderRadius,
  textButton,
  buttonColor = colors.blueLinear,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor, padding, borderRadius }]}
    >
      <View style={styles.flexDirection}>
        <View style={[styles.circleBackground, { backgroundColor: colorImage }]}>
          <Image style={styles.image} source={image} resizeMode="contain" />
        </View>
        <View>
          <TypographyRegular
            text={text}
            fontFamily={fontFamily.medium}
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
          />
          <TypographyRegular
            text={description}
            fontFamily={fontFamily.regular}
            fontSize={fontSize.smallText}
            lineHeight={lineHeight.smallText}
            color={colors.gray1}
          />
        </View>
      </View>
      <TouchableOpacity onPress={onPressDot}>
        <ButtonCheck
          borderRadius={50}
          width={responsiveWidth(83)}
          height={responsiveHeight(30)}
          buttonColor={buttonColor}
          color={colors.white}
          text={textButton}
          paddingVertical={0}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circleBackground: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderRadius: responsiveWidth(20),
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 10,
    overflow: 'hidden',
  },
  image: {
    width: 30,
    height: 30,
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProfilePicture;
