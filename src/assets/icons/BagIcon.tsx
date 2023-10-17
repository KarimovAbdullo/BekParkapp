import * as React from 'react';
import {ColorValue} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  color?: ColorValue;
}

const BagIcon = (props: IProps) => {
  const {color = 'white'} = props;

  return (
    <Svg width="111" height="107" viewBox="0 0 111 107" fill="none">
      <Path
        d="M21.5452 26.9508H94.7636C96.2471 26.9509 97.7143 27.2618 99.0703 27.8635C100.426 28.4653 101.641 29.3445 102.637 30.4446C103.632 31.5446 104.386 32.841 104.85 34.2502C105.314 35.6595 105.477 37.1502 105.33 38.6265L102.144 70.4836C101.882 73.1039 100.656 75.5334 98.703 77.3004C96.7506 79.0674 94.2112 80.046 91.5778 80.0461H40.8718C38.416 80.0471 36.0358 79.1968 34.1364 77.6401C32.237 76.0834 30.9359 73.9165 30.4546 71.5084L21.5452 26.9508Z"
        stroke="#336154"
        stroke-width="10.6191"
        stroke-linejoin="round"
      />
      <Path
        d="M79.9511 101.286H90.5701M21.5463 26.9523L17.2455 9.73355C16.9579 8.58538 16.2949 7.56624 15.3618 6.83802C14.4286 6.1098 13.2789 5.71426 12.0953 5.71423H5.61768L21.5463 26.9523ZM37.4748 101.286H48.0939H37.4748Z"
        stroke="#336154"
        stroke-width="10.6191"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default BagIcon;
