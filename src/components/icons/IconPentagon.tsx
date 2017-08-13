import * as React from 'react';
import Path from '../Raphael/Path';

export interface IconPentagonProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  fillOpacity?: string;
  strokeLinejoin?: string;
}

export default class IconPentagon extends React.Component<IconPentagonProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    strokeLinejoin: 'bevel',
  }

  render() {
    const PENTAGON = 'M 20.327514,22.344972 L 11.259248,22.344216 L 8.4577203,13.719549' +
      ' L 15.794545,8.389969 L 23.130481,13.720774 L 20.327514,22.344972 z';
    const transform = 'T' + (this.props.x + this.props.width / 4) + ',' + (this.props.y + this.props.height / 4);
    return <Path d={PENTAGON} {...this.props} transform={transform} />
  }
}
