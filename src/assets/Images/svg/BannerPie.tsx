import React from 'react';
import Svg, { Circle, Defs, G, LinearGradient, Path, Stop } from 'react-native-svg';

const BannerPie = () => {
  return (
    <Svg width="106" height="106" viewBox="0 0 168 168" fill="none">
      <Circle cx="84" cy="74" r="44" fill="white" />
      <Path
        d="M131 74C133.883 74 135.324 74 136.219 72.9979C137.114 71.9958 136.963 70.6681 136.661 68.0127C136.019 62.3661 134.471 56.8462 132.066 51.6688C128.815 44.6728 124.077 38.4707 118.182 33.4956C112.286 28.5204 105.376 24.8922 97.9331 22.8642C92.4249 21.3634 86.7234 20.7658 81.0493 21.0822C78.3809 21.231 77.0467 21.3054 76.2093 22.3557C75.3719 23.4061 75.6142 24.827 76.0988 27.6689L83.1488 69.0087C83.5554 71.3932 83.7588 72.5854 84.5969 73.2927C85.435 74 86.6445 74 89.0634 74H131Z"
        fill="url(#paint0_linear_1104_2435)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1104_2435"
          x1="137"
          y1="127"
          x2="-4.27609"
          y2="116.068"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#C58BF2" />
          <Stop offset="1" stopColor="#EEA4CE" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default BannerPie;
