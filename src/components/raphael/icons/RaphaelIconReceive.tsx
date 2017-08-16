import * as React from 'react';
import BaseElementProps from '../../BaseElementProps';
import Path from '../Path';

const PATH = `m 0.5,2.5 0,13 17,0 0,-13 z M 2,4 6.5,8.5 2,13 z M 4,4 14,4 9,9 z m 12,0 0,9 -4.5,-4.5 z
      M 7.5,9.5 9,11 10.5,9.5 15,14 3,14 z`;

export interface RaphaelIconReceiveProps extends BaseElementProps {}

export default class RaphaelIconReceive extends React.Component<RaphaelIconReceiveProps, any> {
  render() {
    const { x, y, stroke, fill } = this.props;
    return (<Path
      d={PATH}
      stroke={stroke}
      fill={fill}
      transform={`T${x},${y}`}
    />);
  }
}
