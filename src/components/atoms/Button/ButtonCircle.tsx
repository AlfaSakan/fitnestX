import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../assets/colors';
import ArrowRight2Icon from '../../../assets/Images/svg/ArrowRight2Icon';
import { responsiveHeight, responsiveWidth } from '../../../utils/functions/responsiveDimension';

interface ButtonCircleType {
  onPress(): void;
  color?: string[];
  icon?: React.ReactNode;
}

const ButtonCircle: React.FC<ButtonCircleType> = ({
  onPress,
  color = colors.blueLinear,
  icon = <ArrowRight2Icon colorIcon={colors.white} width={18} height={18} />,
}) => {
  return (
    <TouchableOpacity style={styles.cornerPosition} onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={color}
        style={styles.circleButton}
      >
        {icon}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cornerPosition: {
    position: 'absolute',
    bottom: responsiveHeight(30),
    right: responsiveWidth(30),
  },
  circleButton: {
    width: responsiveWidth(60),
    height: responsiveHeight(60),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonCircle;
