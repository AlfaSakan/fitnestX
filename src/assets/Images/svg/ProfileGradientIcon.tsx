import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { colors } from '../../colors';

export default function ProfileGradientIcon({
  height = 18,
  width = 18,
  colorIcon = colors.purpleLinear,
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z"
        fill="url(#paint0_linear_930_2404)"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z"
        fill="url(#paint0_linear_930_2404)"
      />
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
