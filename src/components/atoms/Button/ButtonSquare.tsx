import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { colors } from '../../../assets/colors';

interface ButtonSquareType {
  image: ImageSourcePropType;
}

const ButtonSquare: React.FC<ButtonSquareType> = ({ image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 14,
    borderColor: colors.gray3,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default ButtonSquare;
