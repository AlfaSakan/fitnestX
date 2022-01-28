import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
// import MaskedView from '@react-native-community/masked-view';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

interface TypographyGradientType {
  color: string[];
  style?: StyleProp<TextStyle>;
}

const TypographyGradient: React.FC<TypographyGradientType> = (props) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient colors={props.color} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default TypographyGradient;
