import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../colors';

export default function PlusIcon({
  height = '24',
  width = '24',
  colorIcon = colors.gray1,
}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.0001 8.32727V15.6536"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.6668 11.9905H8.3335"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      {/* <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z"
        stroke={colorIcon}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      /> */}
    </Svg>
  );
}
