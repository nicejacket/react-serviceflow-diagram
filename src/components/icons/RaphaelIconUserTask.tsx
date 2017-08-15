import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Path from '../Raphael/Path';

const PATH = `m 1,17 16,0 0,-1.7778 -5.333332,-3.5555 0,-1.7778 c 1.244444,0 1.244444,-2.3111 1.244444,-2.3111
    l 0,-3.0222 C 12.555557,0.8221 9.0000001,1.0001 9.0000001,1.0001 c 0,0 -3.5555556,-0.178 -3.9111111,3.5555 l 0,3.0222 c
    0,0 0,2.3111 1.2444443,2.3111 l 0,1.7778 L 1,15.2222 1,17 17,17`;

export interface RaphaelIconUserTaskProps extends BaseElementProps{
  opacity?: number;
}

export default class RaphaelIconUserTask extends React.Component<RaphaelIconUserTaskProps, any> {
  render() {
    const { x, y, fill, stroke, opacity } = this.props;
    return (<Path
      d={PATH}
      transform={`T${x},${y}`}
      fillOpacity={opacity}
      stroke={stroke}
      fill={fill}
    />);
  }
}
