import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { colors } from '../../colors';

export default function CircleGradientIcon({
  height = '20',
  width = '20',
  colorIcon = colors.gray1,
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Circle
        cx="10"
        cy="10"
        r="9.4"
        fill="white"
        stroke="url(#paint0_linear_326_6492)"
        strokeWidth="1.2"
      />
      <Circle cx="10" cy="10" r="5" fill="url(#paint1_linear_326_6492)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_326_6492"
          x1="20"
          y1="20"
          x2="-6.65587"
          y2="17.9373"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#C58BF2" />
          <Stop offset="1" stopColor="#EEA4CE" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_326_6492"
          x1="15"
          y1="15"
          x2="1.67207"
          y2="13.9687"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#C58BF2" />
          <Stop offset="1" stopColor="#EEA4CE" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
