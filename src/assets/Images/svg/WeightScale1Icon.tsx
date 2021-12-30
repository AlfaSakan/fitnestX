import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../colors';

export default function WeightScale1Icon({ height = 18, width = 18, colorIcon = colors.gray1 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <Path
        d="M1.58203 0.5H16.418C17.0141 0.5 17.5 0.985859 17.5 1.58203V16.418C17.5 17.0141 17.0141 17.5 16.418 17.5H1.58203C0.985859 17.5 0.5 17.0141 0.5 16.418V1.58203C0.5 0.985859 0.985859 0.5 1.58203 0.5ZM16.418 17.4453C16.9848 17.4453 17.4453 16.9848 17.4453 16.418V1.58203C17.4453 1.01516 16.9848 0.554688 16.418 0.554688H1.58203C1.01516 0.554688 0.554688 1.01516 0.554688 1.58203V16.418C0.554688 16.9848 1.01516 17.4453 1.58203 17.4453H16.418Z"
        stroke={colorIcon}
      />
      <Path
        d="M11.9654 8.35389L11.9655 8.35399C11.9774 8.36288 11.9945 8.36062 12.0036 8.34847L12.0036 8.34842L14.7874 4.64493L14.7875 4.64481C14.7918 4.63912 14.7937 4.63193 14.7926 4.62475L14.7926 4.62434C14.7916 4.61751 14.7878 4.61088 14.7818 4.60635C13.1005 3.34549 11.1026 2.67969 9.00001 2.67969C6.89739 2.67969 4.89956 3.34549 3.21822 4.60635C3.21212 4.61093 3.20827 4.61758 3.20725 4.62475L11.9654 8.35389ZM11.9654 8.35389C11.104 7.70793 10.077 7.36566 9.00001 7.36566C7.92289 7.36566 6.89604 7.70792 6.03468 8.35384L11.9654 8.35389ZM11.601 8.04028L11.9886 8.27749L12.2616 7.91422L14.4176 5.04597L14.7359 4.62243L14.2947 4.32914C12.7224 3.28413 10.9021 2.73438 9.00001 2.73438C7.09797 2.73438 5.27759 3.28413 3.70537 4.32914L3.26411 4.62243L3.58246 5.04597L5.73839 7.91422L6.01144 8.27749L6.39907 8.04028C7.04529 7.64481 7.76476 7.40543 8.51975 7.33402L8.97267 7.29119V6.83624V5.22894C8.97267 5.21381 8.98488 5.2016 9.00001 5.2016C9.01515 5.2016 9.02736 5.21381 9.02736 5.22894V6.83624V7.29119L9.48028 7.33402C10.2353 7.40543 10.9547 7.64481 11.601 8.04028ZM3.21261 4.64512C3.21259 4.6451 3.21258 4.64508 3.21256 4.64506L6.03461 8.35389C6.03149 8.35622 6.0289 8.35741 6.02672 8.35813C6.02434 8.35891 6.02161 8.35938 6.0186 8.35938C6.01392 8.35938 6.0094 8.35827 6.00573 8.35648C6.00258 8.35494 5.99946 8.35267 5.9962 8.34834L3.21261 4.64512Z"
        stroke={colorIcon}
      />
    </Svg>
  );
}