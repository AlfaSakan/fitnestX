import React, { ReactElement } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../assets/colors';
import ArrowDown2Icon from '../../assets/Images/svg/ArrowDown2Icon';
import { fontFamily, fontSize, lineHeight } from '../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../utils/responsiveDimension';
import TypographyRegular from '../Typography/TypographyRegular';

export type TextInputDropdownType = {
  value: string;
  image: ReactElement<any, any>;
  backgroundColor?: string;
  onPress(): void;
  isDropdown?: boolean;
  placeholder: string;
};

const TextInputDropdown: React.FC<TextInputDropdownType> = ({
  value,
  image,
  backgroundColor = colors.gray4,
  onPress,
  isDropdown = false,
  placeholder = '',
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor }]}>
        <View style={{ flexDirection: 'row' }}>
          {/* <Image style={styles.image1} source={image} /> */}
          {image}
          {value === '' ? (
            <TypographyRegular
              text={placeholder}
              fontFamily={fontFamily.regular}
              color={colors.gray2}
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              marginLeft={10}
            />
          ) : (
            <TypographyRegular
              text={value}
              fontFamily={fontFamily.regular}
              color={colors.black}
              fontSize={fontSize.smallText}
              lineHeight={lineHeight.smallText}
              marginLeft={10}
            />
          )}
        </View>
        {isDropdown && <ArrowDown2Icon />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: responsiveHeight(15),
    flexDirection: 'row',
    padding: responsiveWidth(15),
    borderRadius: responsiveWidth(14),
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(315),
  },
  image1: {
    width: responsiveWidth(18),
    height: responsiveWidth(18),
    marginRight: responsiveWidth(10),
  },
  textInput: {
    flex: 1,
  },
});

export default TextInputDropdown;
