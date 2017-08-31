import * as React from 'react';
import { getFillColour, getFillOpacity } from '../../services/DiagramColorService';
import BaseElementProps from '../BaseElementProps';
import IconCross from '../raphael/icons/RaphaelIconCross';
import Gateway from './Gateway';

export interface ExclusiveGatewayProps extends BaseElementProps { }

export default class ExclusiveGateway extends React.Component<ExclusiveGatewayProps, any> {
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
      <IconCross
        x={x}
        y={y}
        width={width}
        height={height}
        strokeWidth={strokeWidth}
        fill={getFillColour(data.id)}
        fillOpacity={getFillOpacity()}
      />
    </Gateway>);
  }
}
