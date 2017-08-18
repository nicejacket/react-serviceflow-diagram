import * as React from 'react';
import Set from '../raphael/Set';
import Gateway from './Gateway';
import IconCross from '../raphael/icons/RaphaelIconCross';
import BaseElementProps from '../BaseElementProps';
import { getBpmnColor, getFillColour, getFillOpacity, MAIN_STROKE_COLOR } from '../../services/DiagramColorService';

export interface ExclusiveGatewayProps extends BaseElementProps { }

export default class ExclusiveGateway extends React.Component<ExclusiveGatewayProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    strokeWidth: 3,
  }

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
        stroke={getBpmnColor(data, MAIN_STROKE_COLOR)}
        strokeWidth={strokeWidth}
        fill={getFillColour(data.id)}
        fillOpacity={getFillOpacity()}
      />
    </Gateway>);
  }
}
