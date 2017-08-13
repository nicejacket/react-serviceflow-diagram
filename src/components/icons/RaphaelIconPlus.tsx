import * as React from 'react';
import Path from '../Raphael/Path';

export interface IconPlusProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
  fillOpacity?: string;
  strokeWidth?: number;
}

export default class IconPlus extends React.Component<IconPlusProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    strokeWidth: 3,
  }

  render() {
    const { x, y, width, height } = this.props;
    const px = x + width / 4;
    const py = y + height / 4;
    const PATH_DATA = 'M 6.75,16 L 25.75,16 M 16,6.75 L 16,25.75';
    const transform = 'T' + (this.props.x + this.props.width / 4) + ',' + (this.props.y + this.props.height / 4);

    return <Path d={PATH_DATA} {...this.props} transform={transform} />;
  }
}
