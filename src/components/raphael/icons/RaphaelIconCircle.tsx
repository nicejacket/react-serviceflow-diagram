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
    strokeWidth: 2.5,
    radius: 9.75,
  }

  render() {
    const { x, y, radius, ...others } = this.props;
    return (<Circle
      x={x}
      y={y}
      r={radius}
      {...others}
    />);
  }
}
