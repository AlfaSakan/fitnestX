import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { colors } from '../../colors';

export default function ArrowRight2GradientIcon({ size = 14, color=colors.purpleLinear }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        d="M4.95825 2.91658L9.04159 6.99992L4.95825 11.0833"
        stroke="url(#paint0_linear_414_5549)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_414_5549"
          x1="9.04158"
          y1="2.91658"
          x2="7.38663"
          y2="13.6101"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={color[0]} />
          <Stop offset="1" stopColor={color[1]} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
