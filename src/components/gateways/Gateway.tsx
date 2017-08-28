import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import { getBpmnColor, getFillColour, getFillOpacity, MAIN_STROKE_COLOR } from '../../services/DiagramColorService';
import { RaphaelBaseRhombus } from '../raphael/RaphaelBaseRhombus';

export interface GatewayProps extends BaseElementProps {}

export default class Gateway extends React.Component<GatewayProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    strokeWidth: 2,
  }

  render() {
    const { x, y, width, height, strokeWidth, data } = this.props;
    return (<Tooltip data={data}>
      <RaphaelBaseRhombus
        id={data.id}
        x={x}
        y={y}
        width={width}
        height={height}
        stroke={getBpmnColor(data, MAIN_STROKE_COLOR)}
        strokeWidth={strokeWidth}
        fill={getFillColour(data.id)}
        fillOpacity={getFillOpacity()}
      />
      {this.props.children}
    </Tooltip>);
  }
}
