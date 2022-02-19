import React, { memo } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { colors } from '../../colors';

const SearchIcon = ({ height = 18, width = 18, colorIcon = colors.gray1 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Circle
        cx="11.7664"
        cy="11.7666"
        r="8.98856"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.0181 18.4852L21.5421 22.0001"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default memo(SearchIcon);
