import * as React from 'react';
import BaseElementProps from '../../BaseElementProps';
import { RaphaelBasePath } from '../RaphaelBasePath';

const PATH = `m 5,2 0,0.094 c 0.23706,0.064 0.53189,0.1645 0.8125,0.375 0.5582,0.4186 1.05109,1.228 1.15625,2.5312
      l 8.03125,0 1,0 1,0 c 0,-3 -2,-3 -2,-3 l -10,0 z M 4,3 4,13 2,13 c 0,3 2,3 2,3 l 9,0 c 0,0 2,0 2,-3 L 15,6 6,6 6,5.5 C 6,4.1111
      5.5595,3.529 5.1875,3.25 4.8155,2.971 4.5,3 4.5,3 L 4,3 z`;

export interface RaphaelIconScriptProps extends BaseElementProps {}

export default class RaphaelIconScript extends React.Component<RaphaelIconScriptProps, any> {
  render() {
    const { x, y, stroke, fill } = this.props;
    return (<RaphaelBasePath
      d={PATH}
      stroke={stroke}
      fill={fill}
      transform={`T${x},${y}`}
    />);
  }
}
