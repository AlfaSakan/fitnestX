import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { colors } from '../../colors';

export default function ActivityGradientIcon({
  height = 24,
  width = 24,
  colorIcon = colors.purpleLinear,
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14.9243 3.12024H7.65655C4.64511 3.12024 2.77783 5.25296 2.77783 8.2644V16.3468C2.77783 19.3582 4.6085 21.4818 7.65655 21.4818H16.2607C19.2721 21.4818 21.1394 19.3582 21.1394 16.3468V9.30788"
        fill="url(#paint0_linear_930_2404)"
      />
      <Path
        d="M7.24463 14.7815L10.2378 10.8914L13.652 13.5733L16.581 9.79297"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle cx="19.9954" cy="4.20027" r="1.9222" fill="url(#paint0_linear_930_2404)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_930_2404"
          x1="21.5"
          y1="22"
          x2="-3.83778"
          y2="20.1374"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor={colorIcon[0]} stopOpacity="1" />
          <Stop offset="1" stopColor={colorIcon[1]} stopOpacity="1" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
