import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const LeftArrow = () => {
  return (
    <Svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20 26 10 16 20 6"
        stroke="#FFFFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};



