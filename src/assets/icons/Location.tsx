import * as React from 'react';
import {ColorValue} from 'react-native';
import Svg, {Path, Rect, Defs, ClipPath, G} from 'react-native-svg';

interface IProps {
  color?: ColorValue;
}
const LocIcon = (props: IProps) => {
  const {color = 'black'} = props;
  return (
    <Svg width="25" height="25" viewBox="0 0 60 80" fill="none">
      <G clip-path="url(#clip0_0_105)">
        <Path
          d="M33.9017 77.9046C41.8212 67.9937 59.883 43.973 59.883 30.4806C59.883 14.1168 46.6068 0.840576 30.243 0.840576C13.8793 0.840576 0.603027 14.1168 0.603027 30.4806C0.603027 43.973 18.6649 67.9937 26.5843 77.9046C28.4832 80.2665 32.0029 80.2665 33.9017 77.9046ZM30.243 40.3606C24.7936 40.3606 20.363 35.93 20.363 30.4806C20.363 25.0311 24.7936 20.6006 30.243 20.6006C35.6925 20.6006 40.123 25.0311 40.123 30.4806C40.123 35.93 35.6925 40.3606 30.243 40.3606Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_105">
          <Rect
            width="59.28"
            height="79.04"
            fill="white"
            transform="translate(0.603027 0.841675)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default LocIcon;
