import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../colors';

export default function ArrowLeftIcon({ height = 24, width = 24, colorIcon = colors.gray1 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.25 12.2744L19.25 12.2744"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
