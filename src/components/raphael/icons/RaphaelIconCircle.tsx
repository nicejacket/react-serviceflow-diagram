import * as React from 'react';
import BaseElementProps from '../../BaseElementProps';
import { RaphaelBaseCircle } from '../RaphaelBaseCircle';

export interface RaphaelIconCircleProps extends BaseElementProps {
  radius?: number;
}

export default class RaphaelIconCircle extends React.Component<RaphaelIconCircleProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    strokeWidth: 2.5,
    radius: 9.75
  };

  render() {
    const { id, x, y, radius, ...others } = this.props;
    return (<RaphaelBaseCircle
      id={id}
      x={x}
      y={y}
      r={radius}
      {...others}
    />);
  }
}
