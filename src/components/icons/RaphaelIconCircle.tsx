import * as React from 'react';
import Circle from '../Raphael/Circle';

export interface IconCircleProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  fillOpacity?: string;
  radius?: number;
}

export default class IconCircle extends React.Component<IconCircleProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    strokeWidth: 2.5,
    radius: 9.75,
  }

  render() {
    const { radius, x, y, width, height, ...others } = this.props;
    return <Circle r={radius} x={x + width / 2} y={y + height / 2} {...others} />;
  }
}
