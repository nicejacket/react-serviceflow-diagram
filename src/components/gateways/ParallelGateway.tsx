import * as React from 'react';
import { getFillColour, getFillOpacity } from '../../services/DiagramColorService';
import BaseElementProps from '../BaseElementProps';
import IconPlus from '../raphael/icons/RaphaelIconPlus';
import Gateway from './Gateway';

export interface ParallelGatewayProps extends BaseElementProps {}

export default class ParallelGatway extends React.Component<ParallelGatewayProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    strokeWidth: 3
  };

  render() {
    const { x, y, width, height, strokeWidth, data } = this.props;
    return (<Gateway
      x={x}
      y={y}
      width={width}
      height={height}
      data={data}
    >
      <IconPlus
        x={x}
        y={y}
        strokeWidth={strokeWidth}
        fill={getFillColour(data.id)}
        fillOpacity={getFillOpacity()}
      />
    </Gateway>);
  }
}
