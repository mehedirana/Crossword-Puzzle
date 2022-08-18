import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const RightArrow = () => {
  return (
    <Svg width={33} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="m12.5 6 10 10-10 10"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
