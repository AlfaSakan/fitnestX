import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../colors';

export default function ArrowDownIcon({ height = 24, width = 24, colorIcon = colors.gray1 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.2739 19.75V4.75"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.2985 13.7002L12.2745 19.7502L6.24951 13.7002"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
