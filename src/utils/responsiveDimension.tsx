import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const responsiveWidth = (input: number) => {
  return (input / 375) * width;
};

export const responsiveHeight = (input: number) => {
  return (input / 812) * height;
};
