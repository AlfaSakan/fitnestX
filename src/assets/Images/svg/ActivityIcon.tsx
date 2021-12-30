import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { colors } from '../../colors';

export default function ActivityIcon({ height = 24, width = 24, colorIcon = colors.gray1 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.24463 14.7815L10.2378 10.8914L13.652 13.5733L16.581 9.79297"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle
        cx="19.9954"
        cy="4.20027"
        r="1.9222"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.9243 3.12024H7.65655C4.64511 3.12024 2.77783 5.25296 2.77783 8.2644V16.3468C2.77783 19.3582 4.6085 21.4818 7.65655 21.4818H16.2607C19.2721 21.4818 21.1394 19.3582 21.1394 16.3468V9.30788"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
