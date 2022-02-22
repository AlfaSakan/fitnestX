import React, { memo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { colors } from '../../../assets/colors';
import { responsiveHeight } from '../../../utils/functions/responsiveDimension';
import ButtonLargeGradient from '../../atoms/Button/ButtonLargeGradient';

const { width } = Dimensions.get('window');

interface Props {
  text: string;
  onPress: () => void;
}

const ButtonLargeGradientBottom: React.FC<Props> = ({ text, onPress }) => {
  return (
    <View style={styles.center}>
      <ButtonLargeGradient
        text={text}
        // onPress={navigateNextScreen}
        // position="absolute"
        // bottom={responsiveHeight(40)}
        onPress={onPress}
        color={colors.white}
        buttonColor={colors.blueLinear}
      />
    </View>
  );
};

export default memo(ButtonLargeGradientBottom);

const styles = StyleSheet.create({
  center: {
    position: 'absolute',
    width,
    bottom: responsiveHeight(40),
    alignItems: 'center',
  },
});
