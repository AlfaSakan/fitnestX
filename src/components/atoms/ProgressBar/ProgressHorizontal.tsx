import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../assets/colors';
import { captionTypography } from '../../../assets/Typography';
import { responsiveHeight, responsiveWidth } from '../../../utils/functions/responsiveDimension';
import TypographyRegular from '../Typography/TypographyRegular';

interface Props {
  colorsParam: (string | number)[];
  progress?: number;
}

const ProgressHorizontal: React.FC<Props> = ({ colorsParam, progress = 0 }) => {
  const textProgress = `${progress * 100}%`;

  return (
    <View style={styles.parameter}>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        colors={colorsParam}
        style={{ flex: progress, alignItems: 'center', justifyContent: 'center' }}
      >
        <TypographyRegular {...captionTypography} color={colors.white} text={textProgress} />
      </LinearGradient>
    </View>
  );
};

export default ProgressHorizontal;

const styles = StyleSheet.create({
  parameter: {
    marginTop: responsiveHeight(10),
    height: responsiveHeight(15),
    width: '100%',
    borderRadius: responsiveHeight(100),
    backgroundColor: colors.gray4,
    overflow: 'hidden',
    flexDirection: 'row',
  },
});
