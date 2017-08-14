import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Path from '../Raphael/Path';

const PATH = `M 22.820839,11.171502 L 19.36734,24.58992 L 13.54138,14.281819 L 9.3386512,20.071607
        L 13.048949,6.8323057 L 18.996148,16.132659 L 22.820839,11.171502 z`;

export interface RaphaelIconErrorProps extends BaseElementProps {};

export default class RaphaelIconError extends React.Component<RaphaelIconErrorProps, any> {
  render() {
    const { x, y, stroke, fill } = this.props;
    return <Path d={PATH} stroke={stroke} fill={fill} transform={`T${x},${y}`} />
  }
}