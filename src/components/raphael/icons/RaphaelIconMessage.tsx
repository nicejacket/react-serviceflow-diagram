import * as React from 'react';
import BaseElementProps from '../../BaseElementProps';
import { RaphaelBasePath } from '../RaphaelBasePath';

const PATH = `M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15
      L 17 15 L 12 10 L 9 13 L 6 10 z`;

export interface RaphaelIconMessageProps extends BaseElementProps {}

export default class RaphaelIconMessage extends React.Component<RaphaelIconMessageProps, any> {
  render() {
    const { x, y, stroke, strokeWidth, fill, fillOpacity } = this.props;
    return (<RaphaelBasePath
      d={PATH}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      fillOpacity={fillOpacity}
      transform={`T${x},${y}`}
    />);
  }
}
