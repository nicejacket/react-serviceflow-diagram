import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import { getStrokeAndFill } from '../Utils';
import { RaphaelBaseRhombus } from '../raphael/RaphaelBaseRhombus';

export interface GatewayProps extends BaseElementProps {}

export default class Gateway extends React.Component<GatewayProps, any> {
  static defaultProps = { x: 0, y: 0, strokeWidth: 2 };

  render() {
    const { x, y, width, height, data } = this.props;
    const { stroke, strokeWidth, fill, fillOpacity } = getStrokeAndFill(data);
    return (<Tooltip data={data}>
      <RaphaelBaseRhombus
        id={data.id}
        x={x}
        y={y}
        width={width}
        height={height}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
      />
      {this.props.children}
    </Tooltip>);
  }
}
