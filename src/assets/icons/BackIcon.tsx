import * as React from 'react';
import {ColorValue} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  color?: ColorValue;
}
const BackIcon = (props: IProps) => {
  const {color = 'black'} = props;
  return (
    <Svg width={18} height={20} fill="none">
      <Path
        d="M1.116 9.116a1.25 1.25 0 0 0 0 1.768l7.955 7.955a1.25 1.25 0 1 0 1.768-1.768L3.768 10l7.07-7.071A1.25 1.25 0 1 0 9.072 1.16L1.116 9.116ZM2.5 8.75H2v2.5h.5v-2.5Z"
        fill={color}
      />
    </Svg>
  );
};

export default BackIcon;
