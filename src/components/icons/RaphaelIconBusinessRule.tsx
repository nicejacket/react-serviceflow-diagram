import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Path from '../Raphael/Path';

const PATH = `m 1,2 0,14 16,0 0,-14 z m 1.45458,5.6000386 2.90906,0 0,2.7999224 -2.90906,0 z m 4.36364,0 8.72718,0
      0,2.7999224 -8.72718,0 z m -4.36364,4.1998844 2.90906,0 0,2.800116 -2.90906,0 z m
      4.36364,0 8.72718,0 0,2.800116 -8.72718,0 z`;

export interface RaphaelIconBusinessRuleProps extends BaseElementProps {}

export default class RaphaelIconBusinessRule extends React.Component<RaphaelIconBusinessRuleProps, any> {
  render() {
    const { stroke, fill, x, y } = this.props;
    return (<Path
      d={PATH}
      stroke={stroke}
      fill={fill}
      transform={`T${x},${y}`}
    />);
  }
}
