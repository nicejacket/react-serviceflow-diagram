import * as React from 'react';
import Circle from '../Circle';
import BaseElementProps from '../../BaseElementProps';

export interface RaphaelIconCircleProps extends BaseElementProps {
  radius?: number;
}

export default class RaphaelIconCircle extends React.Component<RaphaelIconCircleProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 40,
    height: 40,
    strokeWidth: 2.5,
    radius: 9.75,
  }

  render() {
    const { radius, x, y, width, height, ...others } = this.props;
    return <Circle r={radius} x={x + width / 2} y={y + height / 2} {...others} />;
  }
}
