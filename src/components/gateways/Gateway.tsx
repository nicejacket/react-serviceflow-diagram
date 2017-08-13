import * as React from 'react';
import Path from '../Raphael/Path';

export interface GatewayProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  stroke?: string;
  fillColors?: string;
  fillOpacity?: string;
  strokeWidth?: number;
}

export default class Gateway extends React.Component<GatewayProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    stroke: '#585858',
  }

  constructor(props: GatewayProps) {
    super(props);
    const { x, y, width, height, stroke, fillColors, fillOpacity } = props;
    this.state = { x, y, width, height, stroke, fillColors, fillOpacity };
  }

  render() {
    const { x, y, width, height } = this.state;
    const path = 'M' + x + ' ' + (y + (height / 2)) +
            'L' + (x + (width / 2)) + ' ' + (y + height) +
            'L' + (x + width) + ' ' + (y + (height / 2)) +
            'L' + (x + (width / 2)) + ' ' + y + 'z';
    return <Path d={path} />
  }
}
