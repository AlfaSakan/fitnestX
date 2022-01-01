import React from 'react';
import { View } from 'react-native';
import { colors } from '../../assets/colors';

interface DotComponentType {
  marginRight?: number;
  marginBottom?: number;
  color?: string;
}

const DotComponent: React.FC<DotComponentType> = ({
  marginRight,
  marginBottom,
  color = colors.black,
}) => {
  return (
    <View
      style={{
        width: 4,
        height: 4,
        backgroundColor: color,
        borderRadius: 2,
        marginRight,
        marginBottom,
      }}
    />
  );
};

export default DotComponent;
