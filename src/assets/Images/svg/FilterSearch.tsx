import React, { memo } from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { colors } from '../../colors';

const FilterSearch = ({ height = 20, width = 20, color = colors.blueLinear }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M8.60851 13.8279H3.35791"
        stroke="url(#paint0_linear_1227_2155)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.9502 5.75072H16.2008"
        stroke="url(#paint1_linear_1227_2155)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.27183 5.70521C7.27183 4.6255 6.39002 3.75 5.30254 3.75C4.21505 3.75 3.33325 4.6255 3.33325 5.70521C3.33325 6.78492 4.21505 7.66042 5.30254 7.66042C6.39002 7.66042 7.27183 6.78492 7.27183 5.70521Z"
        stroke="url(#paint2_linear_1227_2155)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6666 13.7951C16.6666 12.7153 15.7855 11.8398 14.698 11.8398C13.6098 11.8398 12.728 12.7153 12.728 13.7951C12.728 14.8748 13.6098 15.7503 14.698 15.7503C15.7855 15.7503 16.6666 14.8748 16.6666 13.7951Z"
        stroke="url(#paint3_linear_1227_2155)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1227_2155"
          x1="8.60851"
          y1="14.1723"
          x2="3.38529"
          y2="11.092"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={color[1]} />
          <Stop offset="1" stopColor={color[0]} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1227_2155"
          x1="16.2008"
          y1="6.09518"
          x2="10.9776"
          y2="3.0148"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={color[1]} />
          <Stop offset="1" stopColor={color[0]} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_1227_2155"
          x1="7.27183"
          y1="7.66042"
          x2="2.02297"
          y2="7.25134"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={color[1]} />
          <Stop offset="1" stopColor={color[0]} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_1227_2155"
          x1="16.6666"
          y1="15.7503"
          x2="11.4177"
          y2="15.3412"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={color[1]} />
          <Stop offset="1" stopColor={color[0]} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default memo(FilterSearch);
