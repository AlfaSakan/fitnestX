import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/colors';
import { ArrowRight2GradientIcon } from '../../assets/Images/svg';
import { responsiveWidth } from '../../utils/functions/responsiveDimension';

interface Props {
  onPress?: () => void;
}

const ArrowRightBorder: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={colors.purpleLinear} style={styles.borderWorkoutBtn}>
        <View style={styles.workoutBtn}>
          <ArrowRight2GradientIcon />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ArrowRightBorder;

const styles = StyleSheet.create({
  workoutBtn: {
    width: responsiveWidth(22),
    height: responsiveWidth(22),
    borderRadius: responsiveWidth(22),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderWorkoutBtn: {
    width: responsiveWidth(24),
    height: responsiveWidth(24),
    borderRadius: responsiveWidth(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
