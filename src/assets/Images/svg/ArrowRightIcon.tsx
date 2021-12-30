import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../colors';

export default function ArrowRightIcon({ height = 24, width = 24, colorIcon = colors.gray1 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.75 11.7256L4.75 11.7256"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
